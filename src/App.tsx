import React  from 'react';
import './App.sass';
import { Header } from './components/common';
import { Bar } from './components/filterBar';
import { MainContainer } from './components/mainContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SettingsProvider } from './Settings';

function App(): JSX.Element {

    return (
        <SettingsProvider>
            <BrowserRouter>
                <div className="App">
                    <Header/>
                    <Bar/>
                    <MainContainer/>
                </div>
                <Switch>
                    <Route exact path="/"  />
                </Switch>
            </BrowserRouter>
        </SettingsProvider>
    );
}

export default App;
