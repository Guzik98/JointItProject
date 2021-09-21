import React from 'react';

import './Offers.sass';
import OffersWithSalary from './buttons/OffersWithSalary';
import AllOffers from './buttons/AllOffers';
import SortBy from './buttons/sortBy/SortBy';
import MediaQuery from 'react-responsive';
import OfferComponent from './offer/offerComponent';
import { useSettings } from '../../../Settings';
import OfferType from '../../../offerType';



function Offers(): JSX.Element {
    const { data } = useSettings();
    const size = 3;
    return (
        <div className="offers">
            <div className="offers-level-2">
                <div className="offers-menu">
                    <div className="left-side-buttons">
                        <OffersWithSalary/>
                        <AllOffers/>
                    </div>
                    <div className="offers-menu-left-side">
                        <MediaQuery minWidth={1024}>
                            <SortBy/>
                        </MediaQuery>
                    </div>
                </div>
                <div className="offersContent">
                    <div className="offers-content-2">
                        <div className="offers-content-3">
                            {
                                data?.slice(0, size).map(( { ...props } :OfferType) =>
                                <OfferComponent key={props.id}  {...props}/>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Offers;