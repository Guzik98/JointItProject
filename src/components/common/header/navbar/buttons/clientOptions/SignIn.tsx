import React from 'react';
import './SignIn.sass';
import Popover from '@material-ui/core/Popover';
import LoginComponent from './login/LoginComponent';
import { useAuth0 } from '@auth0/auth0-react';
import Logged from './logged/Logged';
import { ExpandLess, ExpandMore } from '@material-ui/icons';


function SignIn(): JSX.Element {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const { user, isAuthenticated } = useAuth0();

    console.log(user);
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
                    className={'navbar-right-side-item sign-in ' + ( isAuthenticated ? 'user-in' : 'user-not-in')}
                    aria-describedby={id}
                    onClick={ handleClick }>
                <span className="sign-in-text">
                    { !isAuthenticated && ('Sign in')}
                    { isAuthenticated && ( user?.given_name) }

                </span>
                {open ? <ExpandLess fontSize='small'/> : <ExpandMore fontSize='small'/>}
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
                { !isAuthenticated && ( <LoginComponent/> ) }
                { isAuthenticated && ( <Logged/> )}

            </Popover>

        </>
    );
}

export default SignIn;