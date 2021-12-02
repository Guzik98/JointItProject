import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/MenuOutlined';
import Drawer from '@material-ui/core/Drawer';
import SideBar from './SideBarComponent/SideBarPopOut';
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

const SideBarButton = () :  JSX.Element => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
            <button className="open-btn"
                    role ='open-side-bar'
                    type="button"
                    onClick={handleDrawerOpen}>
                <MenuIcon className="menu-icon"/>
            </button>
                <Drawer
                    className={classes.drawer}
                    variant="temporary"
                    anchor="right"
                    ModalProps={{ onBackdropClick: handleDrawerClose }}
                    open={open}
                    role ='content-side-bar'
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <SideBar handleClose={handleDrawerClose}/>
                </Drawer>

        </>
    );
};

export default SideBarButton;