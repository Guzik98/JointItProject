import React from 'react';
import { DialogActions, DialogContent, Divider, IconButton, Slider, makeStyles, Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useSettings } from '../../../../Settings';
import { employmentBtn, seniorityBtn, ButtonType,
    EmploymentBtnComponent, SeniorityBtnComponent } from './MoreFiltersBtns';

const useStylesBtn = makeStyles({
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

const MoreFilersPopOut = (props: any): JSX.Element => {
    const classesBtn = useStylesBtn();
    const { setEmploymentType, setToSalary, setFromSalary, toSalary, fromSalary, setSeniority } = useSettings();
    const [value, setValue] = React.useState<number[]>([fromSalary, toSalary]);

    const handleChange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    function numberWithSpaces(x: number) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }


    const onClick = () => {
        props.onClick();
    };

    const submit = () => {
        setFromSalary(value[0]);
        setToSalary(value[1]);
        onClick();
    };

    const clear = () => {
        setEmploymentType('All');
        setToSalary(100000);
        setFromSalary(0);
        setSeniority('All');
        onClick();
    };

    return (
        <>
            <div className="dialog-title">
                More filters
                <IconButton aria-label="close" onClick={onClick}>
                    <CloseIcon/>
                </IconButton>
            </div>
            <DialogContent dividers>
                <div className = "label-title">
                    Salary expectations?
                </div>
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
                    <div className="slider-output-between"/>
                    <div className="slider-output">
                        <div className="slider-text">Max. amount</div>
                        <div className="output">
                            { value[1] === 100000 ?
                                numberWithSpaces(value[1]) + '+' + ' PLN'
                                : numberWithSpaces(value[1]) + ' PLN'}
                        </div>
                    </div>
                </div>
                <Divider classes={{ root: classesBtn.divider }} />
                <div className="label-title">
                    Employment Type
                </div>

                {employmentBtn.map(({ name }: ButtonType) =>
                    <EmploymentBtnComponent  name={name} key={name}/>)}

                <Divider classes={{ root: classesBtn.divider }}/>
                <div className="label-title">
                    Seniority
                </div>
                {seniorityBtn.map(({ name }: ButtonType) =>
                    <SeniorityBtnComponent
                        name={name} key={name}
                    />
                )}
            </DialogContent>
            <DialogActions classes={{ root: classesBtn.headerFooter }}>
                <Button
                    size="small"
                    variant="outlined"
                    onClick={clear}
                    classes={{
                        root: classesBtn.clearFilter,
                        label: classesBtn.label
                    }}>
                    Clear filters
                </Button>
                <Button
                    size="small"
                    variant="outlined"
                    onClick={submit}
                    classes={{
                        root: classesBtn.showOffers,
                    }}>
                    Show offers
                </Button>
            </DialogActions>
        </>
    );
};

export default MoreFilersPopOut;