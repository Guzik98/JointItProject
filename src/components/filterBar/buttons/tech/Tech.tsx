import React, { useState } from 'react';
import { Button, Dialog } from '@material-ui/core';
import '../buttons.sass';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TechPopOut from './TechPopOut';


export const useStyles = makeStyles (() =>
    createStyles ({
        choseTech: {
            borderRadius: '32px',
            textTransform: 'none',
            fontSize: '12px',
            color: 'rgb(119, 119, 119)',
            borderColor: 'rgb(228, 232, 240)',
            background: 'rgb(255, 255, 255)',
            marginTop: 6,
            padding: '0px 16px 0px 16px',
            height: 36,
            '@media (max-width: 1024px)': {
                minWidth: 'fit-content',
                margin: '10px 5px 10px 0px'
            }
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
            '@media (max-width: 1024px)': {
                minWidth: 'fit-content',
                margin: '10px 10px 10px 0px'
            }
        },
        label: {
            textTransform: 'none',
            fontWeight: 500,
            fontSize: 14,
            fontFamily: 'Open Sans,sans-serif',
        },
    }),
);
const Tech = (): JSX.Element => {
    const classes = useStyles ();
    const [open, setOpen] = useState (false);

    const handleClickOpen = () => {
        setOpen (true);
    };

    const handleClose = () => {
        setOpen (false);
    };

    return (
        <>
            <Button size="small" variant="outlined" classes={{ root: classes.choseTech }} onClick={handleClickOpen}>
                Tech
            </Button>

            <Dialog fullScreen open={open}>
                <TechPopOut handleClose={handleClose}/>
            </Dialog>
        </>
    );
};

export default Tech;