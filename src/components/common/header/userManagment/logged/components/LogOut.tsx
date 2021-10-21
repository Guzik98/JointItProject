import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LogOutIcon from '../../../../../../assets/icons/svg/LogOutIcon';

const LogOut = (): JSX.Element => {
    const { logout } = useAuth0();
    return (
        <div
            className='sign-btn'
            onClick={() => logout()}
        >
             <span className="sign-btn-label ">
                 <LogOutIcon/>
                    Log Out
            </span>
        </div>
    );
};

export default LogOut;