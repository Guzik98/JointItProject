import React from 'react';

import Employer from '../../../../assets/icons/header-icons/Employer';
import './SignAs.sass';

const LoginToEmployerPanel = (): JSX.Element => {
    return (
        <a className="sign-btn" aria-disabled="false" href="/users/sign_in">
            <span className="sign-btn-label ">
                 <Employer/>
                Sign in to Employer Panel
            </span>
        </a>
    );
};

export default LoginToEmployerPanel;