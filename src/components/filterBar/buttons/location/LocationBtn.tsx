import React from 'react';

import Button from '@material-ui/core/Button';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import PopOverLocation from './LocationPopOver';
import { useSettings } from '../../../../Settings';
import MediaQuery from 'react-responsive';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

export const useStyles = makeStyles (() =>
    createStyles ({
        root: {
            '& .MuiPopover-paper': {
                margin: 0,
                minWidth: 650,
                padding: 0,
                '@media (max-width: 1024px)': {
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
            height: 36,
            '@media (max-width: 1024px)': {
                fontSize: 12,
                minWidth: 'fit-content',
                margin: '10px 5px 10px 0px',
                borderColor: 'rgb(228, 232, 240)',
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
                margin: '10px 5px 10px 0px'
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

 export  const LocationBtn = (): JSX.Element => {
     const classes = useStyles ();
     const { city } = useSettings ();
     const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null> (null);

     const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
         setAnchorEl (event.currentTarget);
     };

     const handleClose = () => {
         setAnchorEl (null);
     };
     const open = Boolean (anchorEl);
     const id = open ? 'simple-popover' : undefined;

     return (
         <>
             <MediaQuery maxWidth={1024}>
                 <Button
                     size="small"
                     variant="outlined"
                     onClick={handleClick}
                     classes={city == 'all' ? { root: classes.choseCity } : { root: classes.chosenCity }}
                 >
                     {city !== 'all' ? city : 'Location'}
                 </Button>
             </MediaQuery>

             <MediaQuery minWidth={1024}>
                 <Button
                     size="small"
                     variant="outlined"
                     endIcon={open ? <ExpandLess/> : <ExpandMore/>}
                     onClick={handleClick}
                     classes={city == 'all' ? { root: classes.choseCity } : { root: classes.chosenCity }}
                 >
                     {city !== 'all' ? city : 'Location'}
                 </Button>
             </MediaQuery>

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





