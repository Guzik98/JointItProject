import { useSettings } from '../../../../Settings';
import { EmploymentType, OfferType } from '../../../../offerType';
import sortSalary from './sortSalary';


export const filterFunction = () => {
    const { data, city, tech, seniority, employmentType, fromSalary, toSalary, sortBy } = useSettings();


    const filterTech = data?.filter(function (item: {
            marker_icon: string;
        }): boolean {
            if (tech == 'JS') {
                return item.marker_icon === 'javascript';
            }
            if (tech == 'UX/UI') {
                return item.marker_icon === 'ui' || item.marker_icon === 'ux' || item.marker_icon === 'ux/ui';
            }
            if (tech !== 'All') {
                return item.marker_icon === tech.toLocaleLowerCase();
            }
            return true;
        }
    );

    const filterCity = filterTech?.filter(function (item: {
            city: string;
            workplace_type: string;
            country_code: string
        }): boolean {
            if (city == 'Trójmiasto') {
                return item.city === 'Gdańsk' || item.city === 'Gdynia' || item.city === 'Sopot' || item.city === city;
            }
            if (city == 'Remote Global') {
                return item.workplace_type == 'remote' && item.country_code != 'PL';
            }
            if (city == 'Remote Poland') {
                return item.workplace_type == 'remote' && item.country_code == 'PL';
            }
            if (city !== 'all') {
                return item.city === city;
            }

            return true;
        }
    );

    const filterSeniority = filterCity?.filter(function (item: {
        experience_level: string
    }): boolean {
        if (seniority !== 'All') {
            return item.experience_level === seniority.toLocaleLowerCase();
        }
        return true;
    });

    const filterEmploymentType = filterSeniority?.filter(function (item: {
        employment_types: EmploymentType[];
    }): boolean {
        if ( employmentType === 'B2B') {
            return item.employment_types[0]?.type === employmentType.toLowerCase()
                || item.employment_types[1]?.type === employmentType.toLowerCase()
                ||  item.employment_types[2]?.type === employmentType.toLowerCase();
        }

        if ( employmentType === 'Permanent' ){
            return item.employment_types[0]?.type === employmentType.toLowerCase()
                || item.employment_types[1]?.type === employmentType.toLowerCase()
                ||  item.employment_types[2]?.type === employmentType.toLowerCase();
        }

        if ( employmentType === 'Mandate Contract') {
            return item.employment_types[0]?.type === 'mandate_contract'
                || item.employment_types[1]?.type === 'mandate_contract'
                ||  item.employment_types[2]?.type === 'mandate_contract';
        }
        return true;
    });

    let exchange = 1;
    const checkCurrency = (currency: string | undefined) => {
        switch (currency){
            case 'eur' :
                exchange = 4.6;
                break;
            case 'usd':
                exchange = 4;
                break;
            default :
                exchange = 1;
                break;
        }
    };

    const filterSalaryBetween = filterEmploymentType?.filter(function (item: {
        employment_types : EmploymentType[];
    }) : boolean {
            checkCurrency(item.employment_types[0].salary?.currency);
            if (item.employment_types[0]?.salary !== null) {
                return (item.employment_types[0]?.salary.from * exchange > fromSalary
                    && item.employment_types[0]?.salary.from < toSalary * exchange);
            }
            if (item.employment_types[1]?.salary !== null) {
                return (item.employment_types[1]?.salary.from > fromSalary
                    && item.employment_types[1]?.salary.from < toSalary);
            }
            if (item.employment_types[2]?.salary !== null) {
                return (item.employment_types[2]?.salary.from > fromSalary
                    && item.employment_types[2]?.salary.from < toSalary);
            }
            return true;
        }
    );



    let filtered: OfferType[] | undefined;

    if ( sortBy !== 'latest') {
        if ( sortBy == 'Highest Salary') {
            filtered = filterSalaryBetween?.sort(sortSalary);
        }
        if ( sortBy == 'Lowest Salary') {
            filtered = filterSalaryBetween?.sort(sortSalary);
        }
    }

    if (sortBy === 'Latest') {
        filtered = filterSalaryBetween;
    }

    return filtered;
};