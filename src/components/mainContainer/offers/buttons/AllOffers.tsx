import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSettings } from '../../../../Settings';

const AllOffers = (): JSX.Element => {
    const { city, tech, seniority, employmentType, fromSalary, toSalary, sortBy, setWithSalary } = useSettings ();
    return (
        <NavLink
            to={`/Offers/${city}/${tech}/${seniority}/${employmentType}/${fromSalary}/${toSalary}/${sortBy}/all-offers`}
            className="offers"
            activeClassName="tab-active"
            onClick={() => setWithSalary ('all-offers')}
        >
            All offers
        </NavLink>
    );
};

export default AllOffers;