import React from 'react';

import './MainContainer.sass';
import {Map} from './map'
import {Offers} from "./offers";



function MainContainer(): JSX.Element {
    return (
    <div className="main-container">
        <div className="offers">
            <Offers/>
        </div>
        <div className="map-feature">
            <Map/>
        </div>
    </div>
    )
}

export default MainContainer