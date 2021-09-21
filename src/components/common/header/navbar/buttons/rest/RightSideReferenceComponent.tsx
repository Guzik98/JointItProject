import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderLinkType } from './RightSideReferenceArray';
import { useSettings } from '../../../../../../Settings';

const RightSideReferenceComponent = ({ text }: HeaderLinkType): JSX.Element => {
    const { city, tech, seniority, employmentType, fromSalary, toSalary, sortBy, withSalary } = useSettings();
    return (
        <NavLink className="navbar-right-side-item rwdDisplay"
                 aria-disabled="false" rel="noreferrer"
                 to={`/${text}/${city}/${tech}/${seniority}/${employmentType}/${fromSalary}/${toSalary}/${sortBy}/${withSalary}`}
                 target="_blank" activeClassName="active">
            <span className="navbar-right-side-item-label">
                {text}
            </span>
        </NavLink>

    );
};

export default RightSideReferenceComponent;
