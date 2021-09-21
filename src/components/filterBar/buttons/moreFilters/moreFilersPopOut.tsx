import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DialogActions, DialogContent, Divider, IconButton, Slider } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import { useSettings } from '../../../../Settings';
import { Link, NavLink } from 'react-router-dom';

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
    clearFilter: {
        borderRadius: '32px',
        borderColor: 'rgb(228, 232, 240)',
        margin: '6px',
        textTransform: 'none',
        fontSize: 14,
        fontWeight: 600,
        height: 46
    },
    showOffers: {
        borderRadius: '32px',
        borderColor: 'rgb(255, 64, 129)',
        background: 'rgb(255, 64, 129)',
        margin: '6px',
        textTransform: 'none',
        fontSize: 14,
        fontWeight: 600,
        height: 46,
        color: 'rgb(255, 255, 255)',
        '&:hover': {
            background: 'rgb(178, 44, 90)',
            borderColor: 'rgb(178, 44, 90)',
        },
    },
    divider: {
        margin: '24px 0px 16px'
    },
    headerFooter: {
        padding: '16px 24px 16px 24px',
        justifyContent: 'space-between',
    },
});

type ButtonType = {
    name: string;
    href?: string;
};

const employmentBtn  = [
    { name: 'All' },
    { name: 'B2B' },
    { name: 'Permanent' },
    { name: 'Mandate Contract' }
];

const seniorityBtn = [
    { name: 'All' },
    { name: 'Junior' },
    { name: 'Mid' },
    { name: 'Senior' }
];

const EmploymentBtnComponent = (props: any): JSX.Element => {
    const classes = useStylesBtn();
    const {
        city,
        tech,
        seniority,
        setEmploymentType,
        fromSalary,
        toSalary,
        employmentType,
        sortBy,
        withSalary
    } = useSettings();

    const increment = () => {
        props.increment();
    };

    const decrement = () => {
        props.decrement();
    };

    const onClick = () => {
        if (employmentType == 'All' && props.name !== 'All') {
            increment();
        }
        if (props.name == 'All' && employmentType !== 'All') {
            decrement();
        }
        setEmploymentType(`${props.name}`);
    };

    return (
        <NavLink
            to={`/Offers/${city}/${tech}/${seniority}/${props.name}/${fromSalary}/${toSalary}/${sortBy}/${withSalary}`}>
            <Button size="small"
                    variant="outlined"
                    onClick={onClick}
                    classes={{
                        root: classes.root,
                        label: classes.label
                    }}
            >
                {props.name}
            </Button>
        </NavLink>
    );
};

const SeniorityBtnComponent = (props: any): JSX.Element => {
    const classes = useStylesBtn();
    const {
        city,
        tech,
        setSeniority,
        employmentType,
        fromSalary,
        toSalary,
        seniority,
        sortBy,
        withSalary
    } = useSettings();

    const increment = () => {
        props.increment();
    };

    const decrement = () => {
        props.decrement();
    };

    const onClick = () => {
        if (seniority == 'All' && props.name !== 'All') {
            increment();
        }
        if (props.name == 'All' && seniority !== 'All') {
            decrement();
        }
        setSeniority(`${props.name}`);
    };

    return (
        <NavLink
            to={`/Offers/${city}/${tech}/${props.name}/${employmentType}/${fromSalary}/${toSalary}/${sortBy}/${withSalary}`}>
            <Button size="small"
                    onClick={onClick}
                    variant="outlined"
                    classes={{
                        root: classes.root,
                        label: classes.label
                    }}>
                {props.name}
            </Button>
        </NavLink>
    );
};

const MoreFilersPopOut = (props: any): JSX.Element => {
    const classesBtn = useStylesBtn();
    const {
        city,
        tech,
        seniority,
        employmentType,
        setEmploymentType,
        setToSalary,
        setFromSalary,
        toSalary,
        fromSalary,
        setSeniority,
        sortBy,
        withSalary
    } = useSettings();
    const [value, setValue] = React.useState<number[]>([fromSalary, toSalary]);

    const handleChange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    function numberWithSpaces(x: number) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }

    const increment = () => {
        props.increment();
    };
    const decrement = () => {
        props.decrement();
    };
    const clearCounter = () => {
        props.clearCounter();
    };
    const onClick = () => {
        props.onClick();
    };
    const submit = () => {
        if ((value[0] != fromSalary || value[1] != toSalary) && (toSalary == 100000 && fromSalary == 0)) {
            increment();
        }
        setFromSalary(value[0]);
        setToSalary(value[1]);
        if ((value[0] == 0 && value[1] == 100000) && (toSalary !== 100000 && fromSalary !== 0)) {
            decrement();
        }
        onClick();
    };

    const clear = () => {
        setEmploymentType('All');
        setToSalary(100000);
        setFromSalary(0);
        setSeniority('All');
        clearCounter();
        onClick();
    };

    return (
        <>
            <div className="dialog-title">
                <span>More filters</span>
                <IconButton aria-label="close" onClick={onClick}>
                    <CloseIcon/>
                </IconButton>
            </div>
            <DialogContent dividers>
                <div className = "label-title">
                    Salary expectations?
                </div>
                <div className="">
                    <Slider
                        value={value}
                        onChange={handleChange}
                        aria-labelledby="range-slider"
                        max = { 100000 }
                        color="secondary"
                    />
                    <div className="slider-output">
                        <div className="slider-output">
                            <div className="slider-text">Min. amount</div>
                            <div className="output">
                                { value[0] + ' PLN'}
                            </div>
                        </div>
                        <div className="slider-output-between">
                        </div>
                        <div className="slider-output">
                            <div className="slider-text">Max. amount</div>
                            <div className="output">
                                { value[1] === 100000 ?
                                    numberWithSpaces(value[1]) + '+' + ' PLN'
                                    : numberWithSpaces(value[1]) + ' PLN'}
                            </div>
                        </div>
                    </div>
                </div >
                <Divider classes={{ root: classesBtn.divider }} />
                <div className="label-title">
                    Employment Type
                </div>
                <div>
                    {employmentBtn.map(({ name }: ButtonType) => <EmploymentBtnComponent increment={increment}
                                                                                          decrement={decrement}
                                                                                          name={name} key={name}/>)}
                </div>
                <Divider classes={{ root: classesBtn.divider }}/>
                <div className="label-title">
                    Seniority
                </div>
                <div>
                    {seniorityBtn.map(({ name }: ButtonType) => <SeniorityBtnComponent increment={increment}
                                                                                        decrement={decrement}
                                                                                        name={name} key={name}/>)}
                </div>
            </DialogContent>
            <DialogActions classes={{ root: classesBtn.headerFooter }}>
                <Link to={`/Offers/${city}/${tech}/All/All/0/100000/${sortBy}/${withSalary}`}>
                    <Button size="small"
                            variant="outlined"
                            onClick={clear}
                            classes={{
                                root: classesBtn.clearFilter,
                                label: classesBtn.label
                            }}>
                        Clear filters
                    </Button>
                </Link>
                <Link
                    to={`/Offers/${city}/${tech}/${seniority}/${employmentType}/${value[0]}/${value[1]}/${sortBy}/${withSalary}`}>
                    <Button size="small"
                            variant="outlined"
                            onClick={submit}
                            classes={{
                                root: classesBtn.showOffers,
                            }}>
                        Show offers
                    </Button>
                </Link>
            </DialogActions>
        </>
    );
};

export default MoreFilersPopOut;