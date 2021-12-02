import React from 'react';
import MediaQuery from 'react-responsive';
import { useSettings } from '../../../../Settings';
const OffersWithSalary = (): JSX.Element => {
    const { setWithSalary, withSalary } = useSettings();
    return (
        <div
            className= {`${withSalary ? 'tab-active offers' : 'offers'}`}
            onClick={() => setWithSalary(true)}
        >
            <MediaQuery minWidth={1025}>
                <span className="tab-offers-text">
                Offers with salary
                </span>
            </MediaQuery>
            <MediaQuery maxWidth={1025}>
                <span>
                With salary
                </span>
            </MediaQuery>
        </div>
    );
};

export default OffersWithSalary;