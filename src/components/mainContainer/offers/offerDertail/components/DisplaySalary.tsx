import React from 'react';
import { EmploymentType } from '../../../../../types/offerType';

const DisplaySalary = ( props : EmploymentType) : JSX.Element => {
    return (
        <div className = "salary-type">
            <div className = "salary">
                { props.salary !== null && props.salary !== undefined && props.type == 'permanent' ?
                    props.salary.from + ' - ' + props.salary.to  + ' '
                    + props.salary.currency.toUpperCase() + '\u00a0\u00a0'
                    : null }
                { props.salary !== null && props.salary !== undefined && props.type == 'mandate_contract' ?
                    props.salary.from + ' - ' + props.salary.to  + ' '
                    + props.salary.currency.toUpperCase() + '\u00a0\u00a0'
                    : null }
                { props.salary !== null && props.salary !== undefined && props.type == 'b2b' ?
                    props.salary.from + ' - ' + props.salary.to  + ' '
                    + props.salary.currency.toUpperCase()  + '\u00a0\u00a0'
                    : null }
                { props.salary == null ? 'Undisclosed Salary' + '\u00a0\u00a0' : null }

            </div>
            <div className = "month">
                { props.type == ('permanent' || 'mandate_contract')
                && props.salary != null ? 'gross/month' + '\u00a0\u00a0' : null }
                { props.type == 'b2b' && props.salary != null ? 'net/month' + '\u00a0\u00a0' : null}
            </div>
            <div className = "type">
                { ' - ' + props.type[0].toUpperCase() + props.type.slice(1) }
            </div>
        </div>
    );
};

export default DisplaySalary;