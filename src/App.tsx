import React from 'react';
import './App.sass';
import { Header } from './components/common';
import { Bar } from './components/filterBar';
import { MainContainer } from './components/mainContainer';

import useFetch from './fetch/useFetch';
import { useSettings } from './Settings';
import MediaQuery from 'react-responsive';

function App(): JSX.Element {
    const { openDetailComponent } = useSettings();

    useFetch();
    return (
        <div className="App">
            <Header/>
            <MediaQuery maxWidth={1025}>
                { openDetailComponent  ? null  : <Bar/>}
            </MediaQuery>
            <MediaQuery minWidth={1025}>
                <Bar/>
            </MediaQuery>
            <MainContainer/>
        </div>

    );
}

export default App;
