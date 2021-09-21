import React from 'react';
import './SignIn.sass';

import ArrowIcon from '@material-ui/icons/ExpandMoreOutlined';
import Popover from '@material-ui/core/Popover';
import LoginComponent from '../../../buttons/LoginComponent';


function SignIn(): JSX.Element {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

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
                <button className="navbar-right-side-item sign-in" aria-describedby={id} color="primary"
                        onClick={handleClick}>
            <span className="sign-in-text">
                Sign in
            </span>
                    <ArrowIcon className="arrow-icon"/>
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
                    <LoginComponent/>
                </Popover>
            </>
        );
}

export default SignIn;