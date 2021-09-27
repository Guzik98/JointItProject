import React from 'react';
import './App.sass';
import { Header } from './components/common';
import { Bar } from './components/filterBar';
import { MainContainer } from './components/mainContainer';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { SettingsProvider } from './Settings';

function App(): JSX.Element {
    return (
        <SettingsProvider>
            <BrowserRouter>
                <Redirect exact from="/" to="Offers"/>
                <div className="App">
                    <Header/>
                    <Bar/>
                    <MainContainer/>
                </div>
            </BrowserRouter>
        </SettingsProvider>
    );
}

export default App;
