import React from 'react';
import { useSettings } from '../../Settings';

import './MainContainer.sass';
import  Map  from './map/Map';
import  Offers  from './offers/Offers';
import DetailOffer from './offers/offerDertail/DetailOffer';

function MainContainer(): JSX.Element {
    const { openDetailComponent } = useSettings();
    return (
        <div className="main-container">
            { openDetailComponent ? <DetailOffer/> : <Offers/>}
            <Map/>
        </div>
    );
}

export default MainContainer;