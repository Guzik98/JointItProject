import React from 'react';
import './MainContainer.sass';
import { Map } from './map';
import { Offers } from './offers';


function MainContainer(): JSX.Element {
    return (
        <div className="main-container">
            <Offers/>
            <Map/>
        </div>
    );
}

export default MainContainer;