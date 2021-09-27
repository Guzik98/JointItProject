import React from 'react';
import { Button, DialogContent, DialogTitle, Divider } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useSettings } from '../../../../../Settings';
import MediaQuery from 'react-responsive';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
    createStyles({
        label: {
            whiteSpace: 'nowrap',
            textTransform: 'none',
            margin: 6,
        },
        root: {
            '@media (max-width: 1024px)': {
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
type ButtonType = {
    name: string;
};

const sortByButtons = [
    { name: 'Latest' },
    { name: 'Highest Salary' },
    { name: 'Lowest Salary' },
];

const SortByButtonsComponent = (props: any) => {
    const classes = useStyles();
    const { setSortBy, sortBy } = useSettings();

    const handleClose = () => {
        setSortBy(props.name);
        props.click();
    };

    return (
        <>
            <MediaQuery maxWidth={1024}>
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
            <MediaQuery minWidth={1024}>
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

const SortByPopOut = (props: any): JSX.Element => {

    const handleClose = () => {
        props.click();
    };

    return (
        <>
            <MediaQuery maxWidth={1024}>
                <DialogTitle>
                    <div className="sort-by-title">
                        <span>Sort By</span>
                        <CloseIcon onClick={handleClose}/>
                    </div>
                </DialogTitle>
            </MediaQuery>

            <Divider/>
            <DialogContent>
                <div className="sort-by-pop-out-body">
                    {sortByButtons.map(({ name }: ButtonType) => <SortByButtonsComponent click={handleClose}
                                                                                          name={name} key={name}/>)}
                </div>
            </DialogContent>

        </>
    );
};

export default SortByPopOut;