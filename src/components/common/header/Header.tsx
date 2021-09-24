import React from 'react';
import './Header.sass';
import Divider from '@material-ui/core/Divider';
import Navbar from './navbar/Navbar';
import  SideBarButton  from './sideBar/SideBarButton';
import { Logo } from './logo/LogoComponent';

function Header(): JSX.Element {

    return (
        <header className="topBarContainer">
            <div className="header-container">
                <Logo/>
                <Navbar/>
                <Divider className="divider" orientation="vertical" flexItem/>
                <SideBarButton/>
            </div>
        </header>
    );
}

export default Header;