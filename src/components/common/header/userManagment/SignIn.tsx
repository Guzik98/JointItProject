import React from 'react';
import './SignIn.sass';
import Popover from '@material-ui/core/Popover';
import LoginComponent from './logIn/LoginComponent';
import Logged from './logged/Logged';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { useAuthSettings } from '../../../../AuthContext';

function SignIn(): JSX.Element {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const { username } = useAuthSettings();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <button
                    className={'navbar-right-side-item sign-in ' + ( username ? 'user-in' : 'user-not-in')}
                    role='open-user-menu'
                    aria-describedby={id}
                    onClick={ handleClick }>
                <span className="sign-in-text">
                    { !username && ('Sign in')}
                    { username && ( username ) }

                </span>
                {open ? <ExpandLess className ='arrow-icon' fontSize='small'/>
                    : <ExpandMore  className ='arrow-icon' fontSize='small'/>}
            </button>
            <Popover
                id={ id }
                open={ open }
                anchorEl={ anchorEl }
                onClose={ handleClose }
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                >
                { !username && ( <LoginComponent/> ) }
                { username && ( <Logged/> )}
            </Popover>
        </>
    );
}

export default SignIn;