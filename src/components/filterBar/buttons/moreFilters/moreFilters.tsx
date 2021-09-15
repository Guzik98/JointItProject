import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

import '../buttons.sass';
import { Dialog, } from '@material-ui/core';
import './moreFilters.sass';
import MoreFilersPopOut from './moreFilersPopOut';



const IconPath = (): JSX.Element => {
    return (
        <svg className="icon-width MuiButton-iconSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z">
            </path>
        </svg>
    );
};


export const MoreFilters = (): JSX.Element => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div >
            <Button size="small" variant="outlined" startIcon={<IconPath/>} onClick={ handleClickOpen }  endIcon={<ExpandMoreIcon/>}
                    className="mui-btn more-filters">
                More filters
            </Button>
            <Dialog  onClose={ handleClose } aria-labelledby="customized-dialog-title" open={open}>

                <MoreFilersPopOut onClick={ handleClose }/>

            </Dialog>
        </div>
    );
};

export const MoreFiltersSmall = (): JSX.Element => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Button size="small" variant="outlined"  onClick={handleClickOpen} className="mui-btn more-filters">
                More filters
            </Button>

            <Dialog fullScreen onClose={ handleClose } aria-labelledby="customized-dialog-title" open={open}>

                <MoreFilersPopOut onClick={ handleClose }/>
            </Dialog>
        </>
    );
};
