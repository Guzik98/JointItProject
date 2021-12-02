import { useSettings } from '../../../../../Settings';
import { OfferType } from '../../../../../types/offerType';
import { sortSalary, checkCurrency } from './sortSalary';

export const  filterFunction = (): OfferType[] | undefined => {
    const { data, city, tech, seniority,
        employmentType, fromSalary,
        toSalary, sortBy, withSalary,
        longFilterTech, longFilterCompany, longFilterLocation } = useSettings();

    const filterTech = data?.filter(item => {
            if (tech !== 'All') {
                if (tech == 'JS') {
                    return item.marker_icon === 'javascript';
                }
                if (tech == 'UX/UI') {
                    return item.marker_icon === 'ui' || item.marker_icon === 'ux' || item.marker_icon === 'ux/ui';
                }
                return item.marker_icon === tech.toLocaleLowerCase();
            }
            return true;
        }
    );

    const filterCity = filterTech?.filter(item => {
        if ( city !== 'all'){
            if (city == 'Trójmiasto') {
                return item.city === 'Gdańsk' || item.city === 'Gdynia' || item.city === 'Sopot' || item.city === city;
            }
            if (city == 'Remote Global') {
                return item.workplace_type === 'remote' && item.country_code !== 'PL';
            }
            if (city == 'Remote Poland') {
                return item.workplace_type === 'remote' && item.country_code === 'PL';
            }
            return item.city === city;
        }
        return true;
        }
    );

    const filterSeniority = filterCity?.filter(item => {
        if (seniority !== 'All') {
            return item.experience_level === seniority.toLocaleLowerCase();
        }
        return true;
    });

    const filterEmploymentType = filterSeniority?.filter( item => {
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

    const filterSalaryBetween = filterEmploymentType?.filter( item => {
        if (item.employment_types[0]?.salary !== null &&
            item.employment_types[0]?.type === (employmentType.toLowerCase() ||  'mandate_contract' )) {

            const  exchangeRate = checkCurrency(item.employment_types[0].salary?.currency);
            return (
                item.employment_types[0]?.salary.to * exchangeRate >= fromSalary &&
                item.employment_types[0]?.salary.from * exchangeRate  <= toSalary
            );
        }
        if (item.employment_types[1]?.salary !== null &&
            item.employment_types[1]?.type === (employmentType.toLowerCase() ||  'mandate_contract' )) {
            const  exchangeRate = checkCurrency(item.employment_types[1].salary?.currency);

            return (
                item.employment_types[1]?.salary.to * exchangeRate >= fromSalary &&
                item.employment_types[1]?.salary.from  * exchangeRate  <= toSalary
            );
        }

        if (item.employment_types[2]?.salary !== null &&
            item.employment_types[2]?.type === (employmentType.toLowerCase() ||  'mandate_contract' )) {

                const  exchangeRate = checkCurrency(item.employment_types[2].salary?.currency);

                return (item.employment_types[2]?.salary.to * exchangeRate >= fromSalary &&
                    item.employment_types[2]?.salary.from * exchangeRate <= toSalary
                );
        }

        if (item.employment_types[0]?.salary !== null) {
            const  exchangeRate = checkCurrency(item.employment_types[0].salary?.currency);
            return (
                item.employment_types[0]?.salary.to * exchangeRate >= fromSalary
                &&  item.employment_types[0]?.salary.from * exchangeRate  <= toSalary
            );
        }
            return true;
        }
    );

    const filter0ffersWithOutSalary =  filterSalaryBetween?.filter( item => {
        if ( withSalary || fromSalary !== 0 || toSalary !== 100000 ) {
            console.log(fromSalary);
            return  item.employment_types[0]?.salary !== null;
        }
        return  true;
    });

    const filterLongFilterTech = filter0ffersWithOutSalary?.filter(item => {
        for (let i = 0;  longFilterTech.length >= i ; i++) {
            if ( longFilterTech[i]?.name === 'JS') {
                return item.marker_icon === 'javascript';
            }
            if (longFilterTech[i]?.name == 'UX/UI') {
                return item.marker_icon === 'ui' || item.marker_icon === 'ux' || item.marker_icon === 'ux/ui';
            }
            if ( item.marker_icon == longFilterTech[i]?.name.toLowerCase()) {
                return item.marker_icon === longFilterTech[i]?.name.toLowerCase();
            }
        }
        return true;
    });

    const filterLongFilterCompany = filterLongFilterTech?.filter(item => {
        for (let i = 0;  longFilterCompany.length >= i ; i++) {
            if ( item.company_name == longFilterCompany[i]?.name) {
                return item.company_name === longFilterCompany[i]?.name;
            }
        }
        return true;
    });

    const filterLongFilterLocation = filterLongFilterCompany?.filter(item => {
        for (let i = 0;  longFilterLocation.length >= i ; i++) {
            if ( item.city == longFilterLocation[i]?.name) {
                return item.city === longFilterLocation[i]?.name;
            }
        }
        return longFilterLocation.length == 0;
    });

    let filtered: OfferType[] | undefined;


    if ( sortBy === 'Highest Salary') {
        filtered = filterLongFilterLocation?.sort(sortSalary);
    }
    if ( sortBy === 'Lowest Salary') {
        filtered = filterLongFilterLocation?.sort(sortSalary);
    }

    if (sortBy === 'Latest') {
        filtered = filterLongFilterLocation;
    }

    return  filtered;
};