import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import '../buttons.sass';
import { Dialog, } from '@material-ui/core';
import './moreFilters.sass';
import MoreFilersPopOut from './moreFilersPopOut';

import { createStyles, makeStyles } from '@material-ui/core/styles';

const IconPath = (): JSX.Element => {
    return (
        <svg className="icon-width MuiButton-iconSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z">
            </path>
        </svg>
    );
};

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            '& .MuiPopover-paper': {
                margin: 0,
                minWidth: 650,
                padding: 0,
                '@media (max-width: 1024px)':  {
                    minWidth: '100%',
                    minHeight: '100%',
                    top: '0px!important',
                    left: '0px!important',
                    display: 'unset'
                },
            },
            '& .MuiTypography-body1' : {
                width: 650,
                height: '100%',
                '@media (max-width: 1024px)':  {
                    minWidth: '100%',
                    minHeight: '100%',
                    position: 'relative',
                    padding: 0
                },
            },

        },
        moreFiltersBtn: {
            borderRadius: '32px',
            textTransform: 'none',
            fontSize: '14px',
            color: 'rgb(119, 119, 119)',
            background: 'rgb(255, 255, 255)',
            minWidth: '160px',
            justifyContent: 'space-between',
            marginTop: 6,
            marginLeft: 10,
            padding: '0px 16px 0px 16px',
            height: 36
        },
        chosenCity: {
            borderRadius: '32px',
            textTransform: 'none',
            fontSize: '14px',
            color: 'rgb(255, 64, 129)',
            background: 'rgba(255, 64, 129, 0.08)',
            borderColor: 'rgb(255, 64, 129)',
            minWidth: '160px',
            justifyContent: 'space-between',
            marginTop: 6,
            padding: '0px 16px 0px 16px',
            height: 36,
            whiteSpace: 'nowrap'

        },
        label: {
            textTransform: 'none',
            fontWeight: 500,
            fontSize: 14,
            fontFamily: 'Open Sans,sans-serif',
            whiteSpace: 'nowrap',
        },
    }),
);


export const MoreFilters = (): JSX.Element => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div >
            <Button size="small"
                    variant="outlined"
                    startIcon={<IconPath/>}
                    onClick={ handleClickOpen }
                    endIcon={<ExpandMoreIcon/>}
                    classes={{ root: classes.moreFiltersBtn, label: classes.label }}
            >
                More filters
            </Button>
            <Dialog  onClose={ handleClose } aria-labelledby="customized-dialog-title" open={open}>
                <MoreFilersPopOut onClick={ handleClose }/>
            </Dialog>
        </div>
    );
};

export const MoreFiltersSmall = (): JSX.Element => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Button size="small"
                    variant="outlined"
                    onClick={handleClickOpen}
                    classes={{
                        root: classes.moreFiltersBtn,
                        label: classes.label
                    }}
            >
                More filters
            </Button>

            <Dialog fullScreen onClose={ handleClose } aria-labelledby="customized-dialog-title" open={open}>

                <MoreFilersPopOut onClick={ handleClose }/>
            </Dialog>
        </>
    );
};
