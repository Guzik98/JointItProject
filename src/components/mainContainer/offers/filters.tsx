import { EmploymentType } from '../../../offerType';
import { useSettings } from '../../../Settings';

export const filterFunction = () => {
    const { data,  city, tech, seniority, fromSalary, employmentType, toSalary, withSalary, sortBy } = useSettings();

    const filterTech = data?.filter(function (item : {
            marker_icon: string;
        }) : boolean {
            if (tech == 'JS'){
                return  item.marker_icon === 'javascript';
            }
            if (tech == 'UX/UI'){
                return  item.marker_icon === 'ui' || item.marker_icon === 'ux' || item.marker_icon === 'ux/ui';
            }
            if (tech !== 'All'){
                return  item.marker_icon === tech.toLocaleLowerCase();
            }
            return  true;
        }
    );
    const filterCity = filterTech?.filter(function (item : {
            city: string;
            workplace_type : string;
            country_code : string
        }) : boolean {
            if (city == 'Trójmiasto'){
                return  item.city === 'Gdańsk' || item.city === 'Gdynia' || item.city === 'Sopot' || item.city === city;
            }
            if ( city == 'Remote Global') {
                return item.workplace_type == 'remote' && item.country_code != 'PL';
            }
            if ( city == 'Remote Poland') {
                return item.workplace_type == 'remote' && item.country_code == 'PL';
            }
            if (city !== 'all'){
                return  item.city === city;
            }

            return  true;
        }
    );

    const filterSalaryBetween = filterCity?.filter(function (item : {
        employment_types : EmploymentType
    }) : boolean {
        if (item.employment_types[0].salary != null) {
            return (item.employment_types[0].salary.to > fromSalary && item.employment_types[0].salary.to < toSalary);
        }
        if ( (fromSalary != 0 && item.employment_types[0].salary == null ) || withSalary ) {
            return false;
        }
        return true;
    });

    const filterSeniority = filterSalaryBetween?.filter(function (item : {
        experience_level : string
    }) : boolean {
        if ( seniority !== 'All'){
            return  item.experience_level === seniority.toLocaleLowerCase();
        }
        return true;
    });

    const filterEmployment = filterSeniority?.filter(function (item : {
        employment_types : EmploymentType
    }) : boolean {
        if ( employmentType !== 'All'){
            return  item.employment_types[0].type === employmentType.toLocaleLowerCase();
        }
        return true;
    });

    let filtered: any[] | undefined;

    if (sortBy === 'Lowest Salary' ) {
        console.log(sortBy);
        const filtering = filterEmployment?.filter(function (item : {
                employment_types : EmploymentType
            }) : boolean {
                if (item.employment_types[0].salary == null) {
                    return false;
                }
                return  true;
            }
        );
        filtered = filtering?.sort(function (a: any, b: any) : number {
            if (a.employment_types[0].salary?.currency == 'eur') {
                return  (a.employment_types[0].salary?.to * 4.6 ) -  b.employment_types[0]?.salary?.to;
            }
            if (b.employment_types[0].salary?.currency == 'eur') {
                return  a.employment_types[0].salary?.to -  (b.employment_types[0]?.salary?.to * 4.6 );
            }
            if (a.employment_types[0].salary?.currency == 'usd') {
                return  (a.employment_types[0].salary?.to * 4) -  b.employment_types[0]?.salary?.to;
            }
            if (b.employment_types[0].salary?.currency == 'usd') {
                return  a.employment_types[0].salary?.to -  (b.employment_types[0]?.salary?.to * 4);
            }
            return a.employment_types[0].salary?.to - b.employment_types[0]?.salary?.to;
        });
    }

    if (sortBy === 'Highest Salary' ) {
        const filtering = filterEmployment?.filter(function (item : {
                employment_types : EmploymentType
            }) : boolean {
                if (item.employment_types[0].salary == null) {
                    return false;
                }
                return  true;
            }
        );
        filtered = filtering?.sort(function (a: any, b: any) : number  {
            let firstOperand : number = a.employment_types[0].salary.to;
            let secondOperand : number = b.employment_types[0].salary.to;
            let firstHelper : number  =  a.employment_types[0].salary.from;
            let secondHelper : number  =  b.employment_types[0].salary.from;
            if (a.employment_types[0].salary?.currency == 'eur') {
                firstOperand = (firstOperand * 4.6);
            }
            if (b.employment_types[0].salary?.currency == 'eur') {
                secondOperand = (secondOperand * 4.6);
            }
            if (a.employment_types[0].salary?.currency == 'usd') {
                firstOperand = (firstOperand * 4);
            }
            if (b.employment_types[0].salary?.currency == 'usd') {
                secondOperand = (secondOperand * 4);
            }
            if ( secondOperand == firstOperand){
                return  secondHelper - firstHelper;
            }
            return secondOperand - firstOperand ;
        });
    }

    if (sortBy === 'Latest') {
        filtered = filterEmployment;
    }

    return filtered;
};
