import React from 'react';
import './Header.sass';

import { Logo } from '../../../assets/icons';

import MenuOutlinedIcon  from '@material-ui/icons/MenuOutlined';

import Divider from '@material-ui/core/Divider';

function Header():JSX.Element  {
    return (
        <header className="topBarContainer">
            <div className="header-container">
                <div className="logo-container">
                    <a className="jss62"  role="button" aria-disabled="false"
                       href="/">
                    <Logo/>
                </a>

                </div>
                <div className="navbar-container">
                    <div className="text">
                        <p className="Job">
                            #1 Job Board for IT industry in Poland
                        </p>
                    </div>

                    <div className="navbar-right-side">
                        <a className="navbar-right-side-item">
                            Offers
                        </a>
                        <a className="navbar-right-side-item">
                            Brand Stories
                        </a>
                        <a className="navbar-right-side-item">
                            Geek
                        </a>
                        <a className="navbar-right-side-item">
                            Mathmaking
                        </a>
                        <a className="navbar-right-side-item">
                            <span> Post a job</span>
                        </a>
                        <a className="navbar-right-side-item">
                            <button className="sign-in">Sign in</button>

                        </a>

                        <Divider orientation="vertical" flexItem />
                        <button
                            className="side-bar-menu" type="button">
                            <span>
                                <MenuOutlinedIcon viewBox="0 0 24 24 " aria-hidden="true"/>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;