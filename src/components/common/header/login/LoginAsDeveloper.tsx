import React from 'react';

import Developer from '../../../../assets/icons/header-icons/Developer';
import './SignAs.sass';

const LoginAsDeveloper = () :JSX.Element => {
    return (
            <a className="sign-btn" role="button">
                <span className="sign-btn-label">
                <Developer/>
                    Sign in as a developer
                </span>
        </a>
    );
};

export default LoginAsDeveloper;