import { useSettings } from '../../../../../Settings';
import '../offerComponent.sass';
import { checkCurrency } from '../filters/sortSalary';
import MediaQuery from 'react-responsive';
import React from 'react';
import { EmploymentType } from '../../../../../types/offerType';

export const getNumberOfDays = ( start: string, end: string ): string => {
    const date1 = new Date(start);
    const date2 = new Date(end);

    const oneDay = 1000 * 60 * 60 * 24;

    const diffInTime = date2.getTime() - date1.getTime();

    const diffInDays = Math.round(diffInTime / oneDay);

    if ( diffInDays < 1 ){
        return 'Now';
    } else {
        return diffInDays + 'd ago';
    }
};

let minSalary = 0;
let maxSalary = 0;
let currency = 'Undisclosed Salary';


export const ReturnSalary = (): JSX.Element => {
    return (
        <>
            <MediaQuery minWidth={1025}>
                { currency !== 'Undisclosed Salary' ? minSalary.toString().slice(0, -3) + ' ' + minSalary.toString().slice(-3) + ' - '
                    + maxSalary.toString().slice(0, -3) + ' ' + maxSalary.toString().slice(-3)  + ' ' + currency.toUpperCase() : currency }
            </MediaQuery>
            <MediaQuery maxWidth={1024}>
                {currency !== 'Undisclosed Salary' ?
                    minSalary.toString().slice(0, -3) + 'k - '
                    + maxSalary.toString().slice(0, -3) + 'k ' + currency.toUpperCase()
                    : currency }
            </MediaQuery>
        </>
    );
};

export const ReturnSalaryMap = (): JSX.Element => {
    return (
        <>
            { currency !== 'Undisclosed Salary' ?
                minSalary  + ' - '
                + maxSalary + ' ' +
                currency.toUpperCase()
                :  'Undisclosed Salary'
            }
        </>
    );
};

export const  putSalary = ( type: EmploymentType | null, index? : number, map? : boolean) : JSX.Element | null => {
    const { employmentType, fromSalary, toSalary } = useSettings();
    const exchangeRate = checkCurrency(type?.salary?.currency);
    if (type?.salary !== null
        && type?.salary !== undefined
        && type.type == employmentType.toLowerCase()
        && type.salary.to * exchangeRate > fromSalary
        && type.salary.from * exchangeRate < toSalary

    ) {
        minSalary = type.salary.from;
        maxSalary = type.salary.to;
        currency = type.salary.currency;
        if ( map === true) {
            return <ReturnSalaryMap/>;
        }
        return <ReturnSalary/>;
    }
    if  (type?.salary !== null
        && type?.salary !== undefined
        && type.type == 'mandate_contract'
        && type.salary.to * exchangeRate > fromSalary
        && type.salary.from * exchangeRate < toSalary
    ) {
        minSalary = type.salary.from;
        maxSalary = type.salary.to;
        currency = type.salary.currency;
        if ( map === true) {
            return <ReturnSalaryMap/>;
        }
        return <ReturnSalary/>;
    }
    if (type?.salary !== null
        && type?.salary !== undefined
        && employmentType == 'All'
        && type.salary.to * exchangeRate > fromSalary
        && type.salary.from * exchangeRate < toSalary

    ) {
        if ( index == 1){
            return  null;
        }
        minSalary = type.salary.from;
        maxSalary = type.salary.to;
        currency = type.salary.currency;
        if ( map === true) {
            return <ReturnSalaryMap/>;
        }
        return <ReturnSalary/>;
    }
    if (type?.salary !== null
        && type?.salary !== undefined
        && employmentType == 'All'
        && ( fromSalary === 0 && toSalary === 100000)
    ) {

        minSalary = type.salary.from;
        maxSalary = type.salary.to;
        currency = type.salary.currency;
        if ( map === true) {
            return <ReturnSalaryMap/>;
        }
        return <ReturnSalary/>;
    }
    if ( type?.salary == null) {
        if ( index === 1){
            return  null;
        }
        currency = 'Undisclosed Salary';
        if ( map === true) {
            return <ReturnSalaryMap/>;
        }
        return <ReturnSalary/>;
    }
    return null;
};






