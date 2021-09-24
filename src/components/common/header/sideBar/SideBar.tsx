import React from 'react';
import ExitButton from './buttons/ExitButton';
import Divider from '@material-ui/core/Divider';
import LoginComponent from '../login/LoginComponent';
import { SocialLinks } from './buttons/MenuItems';
import SocialLinksComponent from './SideBarComponents/SocialLinksComponent';
import './SideBar.sass';
import { FirstList, FromHeaderList, NestedList, SecondList } from './SideBarComponents/SideBarComponents';

const SideBar = (props : any) : JSX.Element => {

    return (
        <>
            <div className='classes.drawerHeader'>
                <div className="first-section">
                    MENU
                    <button className="close-menu" type="button" onClick={() => props.click}>
                        <ExitButton/>
                    </button>
                </div>
            </div>

            <FirstList/>

            <div className="hide-list-display-in-nested">
                <FromHeaderList/>
            </div>

            <div className="nested-list">
                <Divider className="menu-divider"/>
                <NestedList/>
            </div>

            <Divider className="menu-divider"/>

            <SecondList/>

            <LoginComponent/>

            <div className="social-links rwdHideContent">
                {SocialLinks.map(({ svg, href }) => <SocialLinksComponent svg={svg} href={href} key={href}/>)}
            </div>
        </>
    );
};

export default SideBar;