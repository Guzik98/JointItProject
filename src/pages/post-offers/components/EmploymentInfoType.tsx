import React, { Dispatch, SetStateAction } from 'react';
import { Button, Checkbox, FormControlLabel, TextField } from '@material-ui/core';
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
        }
    }),
);


const EmploymentInfoType = ({ employment, setEmployment }: FormEmployment): JSX.Element => {
    const classes = useStyles();

    const handleAddedEmployment = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const inputState = {
            type: '',
            salary: {
                from: 0,
                to: 100000,
                currency: 'pln'
            }
        };
        setEmployment((prev) => [...prev, inputState]);
    };

    const handleRemovedEmployment = (e: { preventDefault: () => void; }, index: number) => {
        e.preventDefault();
        setEmployment((prev) => prev.filter((item) => item !== prev[index]));
    };

    const onChange = (index: number, event: React.ChangeEvent<{ name: string, value: unknown }>) => {
        event.preventDefault();
        event.persist();

        {
            setEmployment((prev) => {

                return prev.map((item, i) => {
                    console.log(item);
                    if (i !== index) {
                        return item;
                    }


                    return {
                        ...item,
                        [event.target.name]: event.target.value,
                    };
                });
            });
        }
    };


    return (
        <>
            {employment.map((item, index) => {
                return (
                    <>
                        {(item.salary !== null)
                            ?
                            <div className="control-skill-level">
                                <div className="control-skill">
                                    <TextField
                                        classes={{ root: classes.textField }}
                                        label="Employment type"
                                        margin="dense"
                                        variant="outlined"
                                        placeholder="B2B"
                                        name="type"
                                        value={item.type}
                                        onChange={(e) => {
                                            onChange(index, e);
                                        }}
                                    />
                                </div>
                                <div className="control-skill">
                                    <TextField
                                        classes={{ root: classes.textField }}
                                        label="From"
                                        margin="dense"
                                        variant="outlined"
                                        placeholder="from"
                                        name="salary.from"
                                        type="number"
                                        inputProps={{ inputMode: 'numeric', pattern: '[0-100000]*' }}
                                        value={item.salary}
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
                                        name={`salary[${index}][to]`}
                                        type="number"
                                        inputProps={{ inputMode: 'numeric', pattern: '[0-100000]*' }}
                                        // value={item.salary.to}
                                        onChange={(e) => {
                                            onChange(index, e);
                                        }}
                                    />
                                </div>
                            </div>
                            :
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        defaultChecked
                                        onChange={(e) => {
                                            onChange(index, e);
                                        }}
                                    />
                                }
                                label="Undisclosed Salary"
                            />
                        }
                        <Button onClick={(e) => handleRemovedEmployment(e, index)}>
                            Remove Employment TYPE
                        </Button>
                    </>
                );
            })}

            <Button onClick={(e) => handleAddedEmployment(e)}>
                Add Employment TYPE
            </Button>
        </>
    );
};

export default EmploymentInfoType;