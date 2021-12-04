import React from 'react';
import { useSettings } from '../../Settings';

import './MainContainer.sass';
import  Map  from './map/Map';
import  Offers  from './offers/Offers';
import DetailOffer from './offers/offerDertail/DetailOffer';
import Loading from '../common/loading/Loading';
import { filterFunction } from './offers/offer/filters/filters';
import { useFetch } from '../../helpfuntions/fetch/useFetch';
import { useAuthSettings } from '../../AuthContext';

function MainContainer(): JSX.Element {
    const { openDetailComponent } = useSettings();
    const { userOffers } = useAuthSettings();
    const filter = filterFunction();

    useFetch('http://localhost:3000/offers/your-offers');

    console.log(userOffers);
    return (
        <div>
            { !filter ? <div className="spinner-border" role="status">
                <span className="sr-only"><Loading/></span>
            </div> :
                <div className="main-container">
                    { openDetailComponent ? <DetailOffer/> : <Offers/>}
                    <Map/>
                </div>
            }
        </div>
    );
}

export default MainContainer;