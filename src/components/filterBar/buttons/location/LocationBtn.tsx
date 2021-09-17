import React from 'react';

import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import PopOverLocation from './popOver';

import '../buttons.sass';
import { useSettings } from '../../../../Settings';


export const useStyles = makeStyles(() =>
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
        choseCity: {
            borderRadius: '32px',
            textTransform: 'none',
            fontSize: '14px',
            color: 'rgb(119, 119, 119)',
            background: 'rgb(255, 255, 255)',
            minWidth: '160px',
            justifyContent: 'space-between',
            marginTop: 6,
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
            height: 36
        },
        label: {
            textTransform: 'none',
            fontWeight: 500,
            fontSize: 14,
            fontFamily: 'Open Sans,sans-serif',
        },
    }),
);


 export  const LocationBtn = (): JSX.Element => {
     const { city } = useSettings();
     const classes = useStyles();

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
            {
                (city == 'all') ? ( <Button size="small"
                                variant="outlined"
                                endIcon = {<ExpandMoreIcon /> }
                                onClick={ handleClick }
                                classes = {{ root: classes.choseCity }}
                             >
                                Location
                                </Button>
                    ) : ( <Button size="small"
                                  variant="outlined"
                                  endIcon = {<ExpandMoreIcon /> }
                                  onClick={ handleClick }
                                  classes = {{ root: classes.chosenCity }}
                        >
                        {city}
                        </Button>)
            }


            <Popover
                className={classes.root}
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <PopOverLocation click={ handleClose }/>
            </Popover>
        </>
    );
};

export const LocationSmall = () : JSX.Element => {
    const classes = useStyles();

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
            <Button size="small" variant="outlined" onClick={ handleClick } className="mui-btn">
                Location
            </Button>

            <Popover
                className={classes.root}
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >

                <PopOverLocation click={ handleClose }/>
            </Popover>
        </>
    );
};



