import React from 'react';
import { useSettings } from '../../../../Settings';

const AllOffers = (): JSX.Element => {
    const { setWithSalary, withSalary } = useSettings();
    return (
        <div
            className={`${ !withSalary ? 'tab-active offers' : 'offers'}`}
            onClick={() => setWithSalary(false)}
        >
            All offers
        </div>
    );
};

export default AllOffers;