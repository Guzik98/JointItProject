import React from 'react';
import Developer from '../../../../../../../../assets/icons/header-icons/Developer';
import '../SignAs.sass';
import { useAuth0 } from '@auth0/auth0-react';

const LoginAsDeveloper = (): JSX.Element => {
    const { loginWithRedirect } = useAuth0();

    return (
        <a className="sign-btn" role="button"
           onClick={() =>  loginWithRedirect({
               screen_hint: 'signup',
           })
           }
        >
            <span className="sign-btn-label">
                <Developer/>
                    Sign in as a developer
            </span>
        </a>
    );
};

export default LoginAsDeveloper;