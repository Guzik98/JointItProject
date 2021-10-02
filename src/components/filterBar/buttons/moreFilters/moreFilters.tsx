import React, { useState } from 'react';
import { useSettings } from '../../../../Settings';
import '../buttons.sass';
import './moreFilters.sass';
import MoreFilersPopOut from './moreFilersPopOut';
import MediaQuery from 'react-responsive';
import { Dialog, Button, createStyles, makeStyles  } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

const IconPath = (): JSX.Element => {
    return (
        <svg className="icon-pad"  focusable="false" viewBox="0 0 24 24" aria-hidden="true">
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
                '@media (max-width: 1025px)':  {
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
                '@media (max-width: 1025px)':  {
                    minWidth: '100%',
                    minHeight: '100%',
                    position: 'relative',
                    padding: 0
                },
            },

        },
        moreFiltersBtn: {
            display: 'flex',
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
            height: 36,
            '@media (max-width: 1024px)': {
                minWidth: 'fit-content',
                margin: '10px 5px 10px 0px',
                borderColor: 'rgb(228, 232, 240)',
            }
        },
        moreFiltersBtnChosen: {
            display: 'flex',
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
            whiteSpace: 'nowrap',
            '@media (max-width: 1025px)': {
                minWidth: 'fit-content',
                margin: '10px 5px 10px 0px'
            }
        },
        label: {
            textTransform: 'none',
            fontWeight: 500,
            fontSize: 14,
            fontFamily: 'Open Sans,sans-serif',
            whiteSpace: 'nowrap',
            '@media (max-width: 1025px)': {
                fontSize: 12
            }
        },
    }),
);

export const MoreFilters = (): JSX.Element => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [counter, setCounter] = useState(0);
    const { fromSalary, toSalary, employmentType, seniority } = useSettings();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const increment = () => {
        setCounter(counter + 1);
    };

    const decrement = () => {
        setCounter(counter - 1);
    };
    const clearCounter = () => {
        setCounter(0);
    };

    return (
        <div>
                <Button size="small"
                        variant="outlined"
                        onClick={handleClickOpen}
                        classes={ (fromSalary != 0 || toSalary != 100000 ||
                            employmentType != 'All' || seniority != 'All')
                            ? { root: classes.moreFiltersBtnChosen, label: classes.label }
                            : { root: classes.moreFiltersBtn, label: classes.label }}
                >
                    {counter > 0 ? <span className="numer-border"> {counter} </span>
                        : <MediaQuery minWidth={1025}>
                            <IconPath/>
                        </MediaQuery>
                    }
                    More filters
                    <MediaQuery minWidth={1025}>
                        {open ? <ExpandLess fontSize='small' /> : <ExpandMore fontSize='small' />}
                    </MediaQuery>
                </Button>
                <MediaQuery maxWidth={1025}>
                    <Dialog fullScreen onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                        <MoreFilersPopOut clearCounter={clearCounter} decrement={decrement} increment={increment}
                                          onClick={handleClose}/>
                    </Dialog>
                </MediaQuery>
                <MediaQuery minWidth={1025}>
                    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                        <MoreFilersPopOut clearCounter={clearCounter} decrement={decrement} increment={increment}
                                          onClick={handleClose}/>
                    </Dialog>
                </MediaQuery>
        </div>
    );
};
