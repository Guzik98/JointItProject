import React from 'react';
import './Offers.sass';
import OffersWithSalary from './buttons/OffersWithSalary';
import AllOffers from './buttons/AllOffers';
import SortBy from './buttons/sortBy/SortBy';
import  MediaQuery  from 'react-responsive';
import OfferComponent from './offer/offerComponent';
import { filterFunction } from './offer/filters/filters';
import { useSettings } from '../../../Settings';
import DefaultComponent from './offer/DefaultComponent';
import DetailOffer from './offerDertail/DetailOffer';
import { useWindowSize } from '../../../handleScreen/useWindowSize';
import { Size } from '../../../types/shortTypes';



function Offers(): JSX.Element {
    const { openDetailComponent } = useSettings();
    const filter = filterFunction();

    const size: Size = useWindowSize();
    const style = {
        maxHeight: size.height,
        minHeight: size.height,
    };

    return (
        <div className="offers">
            { !openDetailComponent ?
                <div className="offers-level-2">
                <div className="offers-menu">
                    <div className="left-side-buttons">
                        <OffersWithSalary/>
                        <AllOffers/>
                    </div>
                    <div className="offers-menu-left-side">
                        <MediaQuery minWidth={1025}>
                            <SortBy/>
                        </MediaQuery>
                    </div>
                </div>
                    <div className="offers-content-3" style={style}>
                        { !filter ? <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div> : null }
                        { filter?.length != 0 ?
                            filter?.slice(0, 50).map(( props, index ) =>
                                <div key={index}>
                                    <OfferComponent {...props} />
                                 </div>)
                            : <DefaultComponent/> }
                    </div>
                </div>
                : <div style={style}>
                    <DetailOffer/>
                </div>
            }
        </div>
    );
}

export default Offers;