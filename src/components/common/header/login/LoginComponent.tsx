import React from 'react';
import LoginAsDeveloper from './LoginAsDeveloper';
import LoginToEmployerPanel from './LoginToEmployerPanel';

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