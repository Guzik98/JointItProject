import React from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/MenuOutlined';
import ExitButton from './menu/ExitButton';
import { SocialLinks } from './menu/MenuItems';
import SocialLinksComponent from './menu/SocialLinksComponent';
import LoginComponent from '../buttons/LoginComponent';
import FromHeaderList from './lists/FromHeaderList';
import MenuSideBarList from './lists/MenuSideBarList';
import HelpList from './lists/HelpList';
import NestedList from './lists/NestedList';
import './SideBar.sass';


const drawerWidth = 320;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginRight: drawerWidth,
        },
        title: {
            flexGrow: 1,
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: 'flex-start',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginRight: -drawerWidth,
        },
        contentShift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginRight: 0,
        },
    }),
);



export const SideBar = (): JSX.Element => {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
            <div>
                <button className="open-btn" type="button" onClick={handleDrawerOpen}>
                    <MenuIcon className="menu-icon"/>
                </button>

                <Drawer
                    className="{classes.drawer}"
                    variant="temporary"
                    anchor="right"
                    open={open}
                    onEscapeKeyDown={handleDrawerClose}
                    onBackdropClick={handleDrawerClose}

                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >

                    <div className="{classes.drawerHeader}">
                        <div className="first-section">
                            MENU
                            <button className="close-menu" type="button" onClick={handleDrawerClose}>
                                <ExitButton/>
                            </button>
                        </div>
                    </div>

                    <FromHeaderList/>

                    <div className="hide-list-display-in-nested">
                        <MenuSideBarList/>
                    </div>

                    <div className="nested-list">
                        <Divider className="menu-divider"/>
                        <NestedList/>
                    </div>

                    <Divider className="menu-divider"/>

                    <HelpList/>

                    <LoginComponent/>

                    <div className="social-links rwdHideContent">
                        {SocialLinks.map(({ svg, href }) => <SocialLinksComponent svg={svg} href={href} key={href}/>)}
                    </div>

                </Drawer>
            </div>
    );
};


export default SideBar;

