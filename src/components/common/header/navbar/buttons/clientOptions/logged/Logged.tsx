import React from 'react';
import MyProfile from './components/MyProfile';
import LogOut from './components/LogOut';
import Settings from './components/Settings';

const Logged = (): JSX.Element => {
    return (
        <div className="sign-border">
            <MyProfile/>
            <Settings/>
            <LogOut/>
        </div>
    );
};


export default Logged;