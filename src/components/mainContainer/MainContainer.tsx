import React from 'react';

import './MainContainer.sass';
import  Map  from './map/Map';
import  Offers  from './offers/Offers';


function MainContainer(): JSX.Element {
    return (
        <div className="main-container">
            <Offers/>
            <div className="map">
                <Map/>
            </div>
        </div>
    );
}

export default MainContainer;