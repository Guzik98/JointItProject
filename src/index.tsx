import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SettingsProvider } from './Settings';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './AuthContext';

ReactDOM.render(
    <BrowserRouter>
        <SettingsProvider>
            <AuthContextProvider>
                <App/>
            </AuthContextProvider>
        </SettingsProvider>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
