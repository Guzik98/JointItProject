import React from 'react';
import LogOutIcon from '../../../../../../assets/icons/svg/LogOutIcon';
import { useNavigate } from 'react-router-dom';

const LogOut = (): JSX.Element => {
    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem('accessToken');
        navigate('/signin');
    };

    return (
        <div
            className='sign-btn'
            onClick={() => handleLogOut()}
        >
             <span className="sign-btn-label ">
                 <LogOutIcon/>
                    Log Out
            </span>
        </div>
    );
};

export default LogOut;