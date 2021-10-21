import React from 'react';
import LoginAsDeveloper from './components/LoginAsDeveloper';
import LoginToEmployerPanel from './components/LoginToEmployerPanel';

const LoginComponent = (): JSX.Element => {
    return (
        <div className="sign-border">
            <LoginAsDeveloper/>
            <div className="rwdHideContent">
                <LoginToEmployerPanel/>
            </div>
        </div>
    );
};

export default LoginComponent;