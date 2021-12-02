import { useSettings } from '../../../../../Settings';

export const checkParametersIncrement = () : number => {
    let counter = 0;
    const { fromSalary, toSalary, employmentType, seniority } = useSettings();

    if ( seniority != 'All' &&  employmentType == 'All' &&  (fromSalary == 0 || toSalary == 100000) ) {
        counter = 1;
    }
    if ( seniority == 'All' &&  employmentType != 'All' &&  (fromSalary == 0 || toSalary == 100000) ) {
        counter = 1;
    }
    if ( seniority == 'All' &&  employmentType == 'All' &&  (fromSalary != 0 || toSalary != 100000) ) {
        counter = 1;
    }
    if ( seniority != 'All' &&  employmentType != 'All' &&  (fromSalary == 0 || toSalary == 100000) ) {
        counter = 2;
    }
    if ( seniority == 'All' &&  employmentType != 'All' &&  (fromSalary != 0 || toSalary != 100000) ) {
        counter = 2;
    }
    if ( seniority != 'All' &&  employmentType == 'All' &&  (fromSalary != 0 || toSalary != 100000) ) {
        counter = 2;
    }
    if ( seniority != 'All' &&  employmentType != 'All' &&  (fromSalary != 0 || toSalary != 100000) ) {
        counter = 3;
    }
    if ( seniority == 'All' &&  employmentType == 'All' &&  (fromSalary == 0 && toSalary == 100000) ) {
        counter = 0;
    }
    return counter;
};
