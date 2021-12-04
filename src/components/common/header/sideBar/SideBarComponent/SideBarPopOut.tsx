import React from 'react';
import ExitButton from '../../../../../assets/icons/svg/ExitButton';
import Divider from '@material-ui/core/Divider';
import LoginComponent from '../../userManagment/logIn/LoginComponent';
import { SocialLinks } from './components/MenuItems';
import SocialLinksComponent from './components/SocialLinksComponent';
import '../SideBar.sass';
import { FirstList, FromHeaderList, NestedList, SecondList } from './components/SideBarComponents';
import { HandlePopOut } from '../../../../../types/shortTypes';
import { useAuthSettings } from '../../../../../AuthContext';

const SideBarPopOut = ({ handleClose } : HandlePopOut) : JSX.Element => {
    const { username } = useAuthSettings();

    return (
        <>
            <div
                role ='side-bar'
                className='classes.drawerHeader'>
                <div className="first-section">
                    MENU
                    <button
                        role ='close-side-bar'
                        className="close-menu"
                        type="button"
                        onClick={ handleClose }>
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

            { !username &&  <LoginComponent/> }

            <div className="social-links rwdHideContent">
                {SocialLinks.map(({ svg, href }) => <SocialLinksComponent svg={svg} href={href} key={href}/>)}
            </div>
        </>
    );
};

export default SideBarPopOut;