import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DialogActions, DialogContent, Divider, IconButton, Slider } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';

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

const seniorityBtn  = [
    { name: 'All' },
    { name: 'Junior' },
    { name: 'Mid' },
    { name: 'Senior' }
];

const MoreFiltersBtnComponent = ({ name } :ButtonType ) : JSX.Element => {
    const classes = useStylesBtn();
    return (
        <Button size="small"
                variant="outlined"
                classes = {{
                    root: classes.root,
                    label: classes.label
                }}>
            {name}
        </Button>
    );
};


const MoreFilersPopOut = (props: any) => {
    const classesBtn = useStylesBtn();

    const [value, setValue] = React.useState<number[]>([0, 100000]);

    const handleChange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    function numberWithSpaces(x : number) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }
    
    const onClick = () => {
        props.onClick();
    };

    return (
        <>
            <div  className="dialog-title">
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
                            —
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
                    { employmentBtn.map(({ name }: ButtonType) => <MoreFiltersBtnComponent name={name} key={name}/>) }
                </div>
                <Divider classes={{ root: classesBtn.divider }} />
                <div className="label-title">
                    Seniority
                </div>
                <div>
                    { seniorityBtn.map(({ name }: ButtonType) => <MoreFiltersBtnComponent name={name} key={name}/>) }
                </div>
            </DialogContent>
            <DialogActions classes={{ root: classesBtn.headerFooter }}>
                <Button size="small"
                        variant="outlined"
                        classes = {{
                            root: classesBtn.clearFilter,
                            label: classesBtn.label
                        }}>
                    Clear filters
                </Button>

                <Button size="small"
                        variant="outlined"
                        classes = {{
                            root: classesBtn.showOffers,
                        }}>
                    Show offers
                </Button>
            </DialogActions>
        </>
    );
};

export default MoreFilersPopOut;