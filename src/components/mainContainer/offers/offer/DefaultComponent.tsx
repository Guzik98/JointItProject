import React from 'react';
import { useSettings } from '../../../../Settings';

const DefaultComponent = () : JSX.Element => {
    const { tech,  employmentType, seniority, city, fromSalary, toSalary
    , setTech, setEmploymentType, setSeniority, setCity, setFromSalary, setToSalary } = useSettings();

    const clear = () => {
        setTech('All');
        setEmploymentType('All');
        setCity('all');
        setSeniority('All');
        setFromSalary(0);
        setToSalary(100000);
    };

    return (
        <div className= "default">
            <div className = "default-content">
                Sorry, there are no job offers for:
                { city != 'all' ? <strong> {city}</strong> : null }
                { tech != 'All' ? <strong> {tech}</strong> : null }
                { seniority != 'All' ? <strong> {seniority}</strong> : null }
                { fromSalary != 0 ? <strong> {fromSalary}</strong> : null }
                { toSalary != 100000 ? <strong> {toSalary}</strong> : null }
                { employmentType != 'All' ? <strong> {employmentType}</strong> : null }
            </div>
            <button className ="clear-btn" onClick={ clear }>Remove Filters</button>
        </div>
    );
};

export default DefaultComponent;