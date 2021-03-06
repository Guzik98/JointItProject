import React from 'react';
import './Header.sass';
import Divider from '@material-ui/core/Divider';
import Navbar from './navbar/Navbar';
import  SideBarButton  from './sideBar/SideBarButton';
import { Logo } from './logo/LogoComponent';
import SignIn from './userManagment/SignIn';
import { useAuth0 } from '@auth0/auth0-react';

function Header(): JSX.Element {
    const { isAuthenticated } = useAuth0();
    return (
        <header className="topBarContainer">
            <div className="header-container">
                <Logo/>
                <Navbar/>
                {isAuthenticated && (   <Divider className="divider" orientation="vertical" flexItem/>)}
                <SignIn/>
                <Divider className="divider" orientation="vertical" flexItem/>
                <SideBarButton/>
            </div>
        </header>
    );
}

export default Header;