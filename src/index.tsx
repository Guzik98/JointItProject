import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SettingsProvider } from './Settings';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(

            <Auth0Provider
                domain={'dev-hc5tj--a.us.auth0.com'}
                clientId={'IJYv6RNjytLbIZgQHt1BR7n81SExgVho'}
                redirectUri={window.location.origin}
            >
                <SettingsProvider>
                    <App/>
                </SettingsProvider>
            </Auth0Provider>,

    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
