import React from 'react';
import './Offers.sass';
import OffersWithSalary from './buttons/OffersWithSalary';
import AllOffers from './buttons/AllOffers';
import SortBy from './buttons/sortBy/SortBy';
import  MediaQuery  from 'react-responsive';
import OfferComponent from './offer/offerComponent';
import { filterFunction } from './offer/filters/filters';
import DefaultComponent from './offer/DefaultComponent';
import { useWindowSize } from '../../../handleScreen/useWindowSize';
import { Size } from '../../../types/shortTypes';
import Loading from '../../common/loading/Loading';


function Offers(): JSX.Element {
    const size: Size = useWindowSize();
    const filter = filterFunction();

    const style = {
        minHeight: size.height - 200,
        maxHeight: size.height - 200,
        maxWidth: size.width < 1025 ? size.width - 20 : (size.width < 1500 ? size.width / 1.68 : size.width / 2),
        minWidth: size.width < 1025 ? size.width - 20 : (size.width < 1500 ? size.width / 1.68 : size.width / 2),
    };


    return (
            <div className="offers">
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
                                <span className="sr-only"><Loading/></span>
                            </div> : null }
                            { filter?.length != 0 ?
                                filter?.slice(0, 50).map(( props ) =>
                                    <div key={props.id}>
                                        <OfferComponent {...props} />
                                     </div>)
                                : <DefaultComponent/> }
                        </div>
                    </div>
            </div>
        );
}

export default Offers;