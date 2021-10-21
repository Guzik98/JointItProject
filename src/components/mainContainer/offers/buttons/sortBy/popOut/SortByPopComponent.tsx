import React from 'react';
import { ButtonType } from '../../../../../../types/shortTypes';
import { useSettings } from '../../../../../../Settings';
import MediaQuery from 'react-responsive';
import { Button } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
    createStyles({
        label: {
            whiteSpace: 'nowrap',
            textTransform: 'none',
            margin: 6,
        },
        root: {
            '@media (max-width: 1025px)': {
                display: 'flex',
                width: '100%',
                borderRadius: '32px',
                textTransform: 'none',
                fontSize: '14px',
                color: 'rgb(119, 119, 119)',
                background: 'rgb(255, 255, 255)',
                borderColor: 'rgb(228, 232, 240)',
                border: '1px solid',
                margin: '8px 0',
                height: '34px',
            }
        }
    }),
);

export const sortByButtons = [
    { name: 'Latest' },
    { name: 'Highest Salary' },
    { name: 'Lowest Salary' },
];


export const SortByButtonsComponent = ( props : ButtonType) : JSX.Element => {
    const classes = useStyles();
    const { setSortBy, sortBy } = useSettings();

    const handleClose = () => {
        setSortBy(props.name);
    };

    return (
        <>
            <MediaQuery maxWidth={1025}>
                <div className={`${ sortBy === props.name ? 'sort-active sort-by-link' : 'sort-by-link' }` }>
                    <Button
                        onClick={handleClose}
                        classes={{
                            root: classes.root,
                            label: classes.label
                        }}>
                        {props.name}
                    </Button>
                </div>
            </MediaQuery>
            <MediaQuery minWidth={1025}>
                <div className={`${ sortBy === props.name ? 'false sort-by-link' : 'sort-by-link' }` }>
                    <Button
                        onClick={handleClose}
                        classes={{
                            root: classes.root,
                            label: classes.label
                        }}>
                        {props.name}
                    </Button>
                </div>
            </MediaQuery>
        </>
    );
};
