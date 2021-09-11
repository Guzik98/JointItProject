import React from 'react';
import './App.sass';


import {Header} from './components/common';
import {Bar} from './components/filterBar';
import {MainContainer} from './components/mainContainer';


function App(): JSX.Element {
    return (
        <div className="App">
            <Header/>
            <Bar/>
            <MainContainer/>
        </div>
    );
}

export default App;
