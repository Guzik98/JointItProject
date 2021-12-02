import React from 'react';
import './logo.sass';
import LogoSvg from '../../../../assets/icons/header-icons/social-icons/Logo';

export const  Logo = (): JSX.Element => {
    return (
        <div className="logo-border">
            <a className="logo-button">
                <LogoSvg/>
            </a>
        </div>
    );
};


