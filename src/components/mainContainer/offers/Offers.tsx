import React from 'react';

import './Offers.sass';
import OffersWithSalary from './buttons/OffersWithSalary';
import AllOffers from './buttons/AllOffers';
import SortBy from './buttons/sortBy/SortBy';
import MediaQuery from 'react-responsive';
import OfferComponent from './offer/offerComponent';


function Offers(): JSX.Element {
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
                            <OfferComponent/>
                            <OfferComponent/>
                            <OfferComponent/>
                            <OfferComponent/>
                            <OfferComponent/>
                            <OfferComponent/>
                            <OfferComponent/>
                            <OfferComponent/>
                            <OfferComponent/>
                            <OfferComponent/>
                            <OfferComponent/>
                            <OfferComponent/>
                            <OfferComponent/>
                            <OfferComponent/>
                            <OfferComponent/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Offers;