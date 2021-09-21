import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSettings } from '../../../Settings';

const IconComponent = ({ name, icon }: { name: string, icon: JSX.Element }): JSX.Element => {
    const { city, setTech, seniority, employmentType, fromSalary, toSalary, sortBy, withSalary } = useSettings();
    return (
        <NavLink
            to={`/Offers/${city}/${name}/${seniority}/${employmentType}/${fromSalary}/${toSalary}/${sortBy}/${withSalary}`}
            onClick={() => setTech(`${name}`)} className="icon-level-2" activeClassName="active-icon">
            <div className="icon" key={name}>
                <a className="circle">
                    {icon}
                </a>
                <span className="under-icon">
                    {name}
                </span>
            </div>
        </NavLink>
    );
};

export default IconComponent;