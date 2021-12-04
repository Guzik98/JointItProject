import React, { Dispatch, SetStateAction } from 'react';
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from '@material-ui/core';

import { EmploymentType } from '../../../types/offerType';
import { createStyles, makeStyles } from '@material-ui/core/styles';

type FormEmployment = {
    employment: EmploymentType[];
    setEmployment: Dispatch<SetStateAction<EmploymentType[]>>;
};

const useStyles = makeStyles(() =>
    createStyles({
        textField: {
            width: 'inherit',
        },
        select: {
            width: 250,
            marginRight: 10
        }
    }),
);

const EmploymentInfoType = ({ employment, setEmployment }: FormEmployment): JSX.Element => {
    const classes = useStyles();

    const handleAddedEmployment = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const inputState = {
            type: 'b2b',
            salary: null,
        };
        setEmployment((prev) => [...prev, inputState]);
    };

    const handleRemovedEmployment = (e: { preventDefault: () => void; }, index: number) => {
        e.preventDefault();
        setEmployment((prev) => prev.filter((item) => item !== prev[index]));
    };

    const onChange = (index: number, event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        event.preventDefault();
        event.persist();
        {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            setEmployment((prev) => {
                return prev.map((item, i) => {
                     if (i !== index) {
                        return item;
                    }
                    if ( item.salary !== null && event.target.name as string === 'to' ){
                        if (event.target.value as number > 100000  ) { return { ...item }; }
                        
                        return {
                            ...item,
                            salary: {
                                from: item.salary?.from,
                                to: event.target.value as number,
                                currency: 'pln'
                            }
                        };
                    }
                    if ( item.salary !== null  && event.target.name as string === 'from' ){
                        if (event.target.value as number > 100000  ) { return { ...item }; }

                        return {
                            ...item,
                            salary: {
                                to: item.salary?.to,
                                from: event.target.value as  number,
                                currency: 'pln'
                            }
                        };
                    }
                    if ( event.target.name as string == 'type' ){
                        console.log(1);
                        return {
                            ...item,
                            [event.target.name as string]: event.target.value as string,
                        };
                    }
                    if ( event.target.name as string == 'undisclosed' ){
                        if (item.salary !== null){
                            return {
                                ...item,
                                salary: null
                            };
                        } else {
                            return {
                                ...item,
                                salary: {
                                    from: 1,
                                    to: 100000,
                                    currency: 'pln'
                                }
                            };
                        }
                    }
                });
            });
        }
    };


    return (
        <>
            {employment.map((item, index) => {
                return (
                    <>
                            <div className="control-skill-level">
                                    <FormControl classes={{ root: classes.select }}>
                                        <InputLabel id="demo-simple-select-label">Type</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={item.type}
                                            name="type"
                                            label="Type"
                                            defaultValue={'b2b'}
                                            onChange={(e) => {
                                                onChange(index, e);
                                            }}
                                        >
                                            <MenuItem value={'b2b'}>B2B</MenuItem>
                                            <MenuItem value={'permanent'}>Permanent</MenuItem>
                                            <MenuItem value={'mandate_contract'}>Mandate contract</MenuItem>
                                        </Select>
                                    </FormControl>

                                <div className="control-skill">
                                    <TextField
                                        classes={{ root: classes.textField }}
                                        label="From"
                                        margin="dense"
                                        variant="outlined"
                                        placeholder="from"
                                        name="from"
                                        type="number"
                                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                        disabled={item.salary === null}
                                        value={item.salary === null ? 'disabled' :  item.salary.from}
                                        onChange={(e) => {
                                            onChange(index, e);
                                        }}
                                    />
                                </div>
                                <div className="control-skill">
                                    <TextField
                                        classes={{ root: classes.textField }}
                                        label="To"
                                        margin="dense"
                                        variant="outlined"
                                        placeholder="to"
                                        name='to'
                                        type="number"
                                        disabled={item.salary === null}
                                        value={item.salary === null ? 'disabled' : item.salary.to }
                                        onChange={(e) => {
                                            onChange(index, e);
                                        }}
                                    />
                                </div>
                            </div>

                            <FormControlLabel
                                control={
                                    <Checkbox
                                        defaultChecked = { item.salary === null }
                                        name='undisclosed'
                                        onChange={(e) => {
                                            onChange(index, e);
                                        }}
                                    />
                                }
                                label="Undisclosed Salary"
                            />
                        { employment.length > 1 &&
                            <Button onClick={(e) => handleRemovedEmployment(e, index)}>
                                Remove Employment TYPE
                            </Button>
                        }
                    </>
                );
            })}

            { employment.length < 3 &&
                <Button onClick={(e) => handleAddedEmployment(e)}>
                    Add Employment TYPE
                </Button>
            }
        </>
    );
};

export default EmploymentInfoType;