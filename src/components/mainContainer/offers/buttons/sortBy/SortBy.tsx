import React from 'react';
import Button from '@material-ui/core/Button';
import './SortBy.sass';
import MediaQuery from 'react-responsive';
import { useSettings } from '../../../../../Settings';
import Popover from '@material-ui/core/Popover';
import { Dialog } from '@material-ui/core';
import SortByPopOut from './SortByPopOut';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { ExpandLess, ExpandMore } from '@material-ui/icons';


const useStyles = makeStyles(() =>
    createStyles({
        root: {
            '& .MuiPopover-paper': {
                margin: '0 6px 0 6px',
                minWidth: 126,
                maxWidth: 126,
                padding: 0,
            },
        },
        sortButton: {
            '@media (max-width: 1024px)': {
                minWidth: 'fit-content',
                margin: '10px 5px 10px 0px',
                borderRadius: '32px',
                textTransform: 'none',
                border: '1px solid',
                fontSize: '12px',
                borderColor: 'rgb(228, 232, 240)',
                color: 'rgb(119, 119, 119)',
                background: 'rgb(255, 255, 255)',
                justifyContent: 'space-between',
                marginTop: 10,
                padding: '0px 16px 0px 16px',
                height: 36,
            }
        },
        sortButtonChosen: {
            '@media (max-width: 1024px)': {
                borderRadius: '32px',
                textTransform: 'none',
                fontSize: '14px',
                color: 'rgb(255, 64, 129)',
                background: 'rgb(255, 248, 251)',
                borderColor: 'rgb(255, 64, 129)',
                border: '1px solid',
                justifyContent: 'space-between',
                marginTop: 10,
                padding: '0px 16px 0px 16px',
                height: 36,
                minWidth: 'fit-content',
                margin: '10px 5px 10px 0px'
            }
        },
    }),
);


const SortBy = (): JSX.Element => {
    const classes = useStyles();
    const { sortBy } = useSettings();
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
            <Button
                classes={sortBy == 'Latest' ? { root: classes.sortButton } : { root: classes.sortButtonChosen }}
                onClick={handleClick}

            >
                <MediaQuery minWidth={1024}>
                    <span className="sort-by-label">
                       Sort by:
                    </span>
                </MediaQuery>
                <span className="sort-by-option">
                    {sortBy}
                </span>
                <MediaQuery minWidth={1024}>
                    {open ? <ExpandLess/> : <ExpandMore/>}
                </MediaQuery>
            </Button>

            <MediaQuery maxWidth={1024}>
                <Dialog fullScreen aria-labelledby="customized-dialog-title" open={open}>
                    <SortByPopOut click={handleClose}/>
                </Dialog>
            </MediaQuery>

            <MediaQuery minWidth={1024}>

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
                    <SortByPopOut click={handleClose}/>
                </Popover>
            </MediaQuery>
        </>
    );
};

export default SortBy;