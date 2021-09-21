import React from 'react';
import MediaQuery from 'react-responsive';
import { useSettings } from '../../../../Settings';
import { NavLink } from 'react-router-dom';


const OffersWithSalary = (): JSX.Element => {
    const { city, tech, seniority, employmentType, fromSalary, toSalary, sortBy, setWithSalary } = useSettings ();

    return (
        <NavLink
            to={`/Offers/${city}/${tech}/${seniority}/${employmentType}/${fromSalary}/${toSalary}/${sortBy}/offers-with-salary`}
            activeClassName="tab-active"
            className="offers"
            onClick={() => setWithSalary ('offers-with-salary')}
        >
            <MediaQuery minWidth={1024}>
                <span className="tab-offers-text">
                Offers with salary
                </span>
            </MediaQuery>
            <MediaQuery maxWidth={1024}>
                <span>
                With salary
                </span>
            </MediaQuery>
        </NavLink>
    );
};

export default OffersWithSalary;