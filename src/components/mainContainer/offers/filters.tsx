import { EmploymentType } from '../../../offerType';
import { useSettings } from '../../../Settings';



export const filterFunction = () => {
    const { data,  city, tech, seniority, fromSalary, employmentType, toSalary, withSalary, sortBy } = useSettings();

    let sortByFilter;
    if (sortBy === 'Lowest Salary' ) {
        console.log(sortBy);
         sortByFilter = data?.filter(function (item : {
                employment_types : EmploymentType
            }) : boolean {
                if (item.employment_types[0].salary == null) {
                    return false;
                }
                return  true;
            }
        );
        sortByFilter = sortByFilter?.sort(function (a: any, b: any) : number {
            return a.employment_types[0].salary?.to - b.employment_types[0].salary?.to;
        });
        }

    if (sortBy === 'Highest Salary' ) {
        sortByFilter = data?.filter(function (item : {
                employment_types : EmploymentType
            }) : boolean {
                if (item.employment_types[0].salary == null) {
                    return false;
                }
                return  true;
            }
        );
        sortByFilter = sortByFilter?.sort(function (a: any, b: any) : number {
            return b.employment_types[0].salary?.to - a.employment_types[0].salary?.to;
        });
    }
    if (sortBy === 'Latest' ) {
        sortByFilter = data;
    }


    const filterTech = sortByFilter?.filter(function (item : {
            marker_icon: string;
        }) : boolean {
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
            return (item.employment_types[0].salary.from > fromSalary && item.employment_types[0].salary.to < toSalary)  ;
        }
        if ( (fromSalary != 0 && item.employment_types[0].salary == null ) || withSalary == 'offers-with-salary' ) {
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

    return filterEmployment;
};
