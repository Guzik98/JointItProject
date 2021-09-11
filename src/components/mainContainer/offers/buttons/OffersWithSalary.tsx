import React from 'react';
import MediaQuery from 'react-responsive';


const OffersWithSalary = (): JSX.Element => {
    return (
        <a className="offers">
            <MediaQuery minWidth={1024}>
                <span>
                Offers with salary
            </span>
            </MediaQuery>
            <MediaQuery maxWidth={1024}>
                <span>
                With salary
                </span>
            </MediaQuery>
        </a>
    );
};

export default OffersWithSalary;