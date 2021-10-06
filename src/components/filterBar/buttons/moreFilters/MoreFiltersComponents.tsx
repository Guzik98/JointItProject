import { useSettings } from '../../../../Settings';
import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { ButtonType } from '../../../../types/shortTypes';


const useStylesBtn = makeStyles({
    root: {
        borderRadius: '32px',
        borderColor: 'rgb(228, 232, 240)',
        margin: '6px',
        '@media (min-width: 1025px)': {
            minWidth: 112
        },
    },
    label: {
        textTransform: 'none',
        fontSize: 14,
        fontWeight: 600,
        color: 'rgb(119, 119, 119)',
    },
});


export const employmentBtn  = [
    { name: 'All' },
    { name: 'B2B' },
    { name: 'Permanent' },
    { name: 'Mandate Contract' }
];

export const seniorityBtn = [
    { name: 'All' },
    { name: 'Junior' },
    { name: 'Mid' },
    { name: 'Senior' }
];

export const EmploymentBtnComponent = (props: ButtonType): JSX.Element => {
    const classes = useStylesBtn();
    const { setEmploymentType, employmentType } = useSettings();

    const onClick = () => {
        setEmploymentType(`${props.name}`);
    };

    return (
        <Button size="small"
                variant="outlined"
                onClick={onClick}
                className={`${employmentType === props.name ? 'active' : null }`}
                classes={{
                    root: classes.root,
                    label: classes.label
                }}
        >
            {props.name}
        </Button>
    );
};

export const SeniorityBtnComponent = (props: ButtonType): JSX.Element => {
    const classes = useStylesBtn();
    const { setSeniority, seniority } = useSettings();

    return (
        <Button
            size="small"
            onClick={() => { setSeniority(`${props.name}`); }}
            variant="outlined"
            className={`${seniority == props.name ? 'active' : null }`}
            classes={{
                root: classes.root,
                label: classes.label
            }}>
            {props.name}
        </Button>
    );
};