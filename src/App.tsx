import React from 'react';
import './App.sass';
import { Header } from './components/common';
import { Bar } from './components/filterBar';
import { MainContainer } from './components/mainContainer';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { useSettings } from './Settings';
import MediaQuery from 'react-responsive';


function App(): JSX.Element {
    const { openDetailComponent } = useSettings();

    return (
            <BrowserRouter>
                <Redirect exact from="/" to="Offers"/>
                <div className="App">
                    { openDetailComponent ?
                        <>
                            <MediaQuery maxWidth={ 1025}>
                                <Header/>
                                <MainContainer/>
                            </MediaQuery>
                            <MediaQuery minWidth={ 1025}>
                                <Header/>
                                <Bar/>
                                <MainContainer/>
                            </MediaQuery>
                        </>
                        :
                        <>
                            <Header/>
                            <Bar/>
                            <MainContainer/>
                        </>
                    }
                </div>
            </BrowserRouter>
    );
}

export default App;
