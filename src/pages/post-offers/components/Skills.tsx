import React, { Dispatch, SetStateAction } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import { SkillsType } from '../../../types/offerType';

const useStyles = makeStyles(() =>
    createStyles({
        textField: {
            width: 'inherit',
        }
    }),
);

type FormSkill = {
    skills: SkillsType[];
    setSkills: Dispatch<SetStateAction<SkillsType[]>>;
};

const Skills = ({ skills, setSkills }: FormSkill): JSX.Element => {
    const classes = useStyles();

    const handleAddedSkill = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const inputState = {
            name: '',
            level: 1,

        };
        setSkills((prev) => [...prev, inputState]);
    };

    const handleRemovedSkill = (e: { preventDefault: () => void; }, index: number) => {
        e.preventDefault();
        setSkills((prev) => prev.filter((item) => item !== prev[index]));
    };

    const onChange = (index: number, event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        event.preventDefault();
        event.persist();

        {
            setSkills((prev) => {
                return prev.map((item, i) => {
                    if (i !== index) {
                        return item;
                    }

                    return {
                        ...item,
                        [event.target.name as string]: event.target.value as string,
                    };
                });
            });
        }
    };

    return (
        <>
            {skills.map((item, index) => {
                return (
                    <>
                        <div className="control-skill-level">
                            <div className="control-skill">
                                <TextField
                                    classes={{ root: classes.textField }}
                                    label="Tech skill"
                                    margin="dense"
                                    variant="outlined"
                                    placeholder="name"
                                    name="name"
                                    value={item.name}
                                    onChange={(e) => {
                                        onChange(index, e);
                                    }}
                                />
                            </div>
                            <Box>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Level</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={item.level}
                                        name="level"
                                        label="level"
                                        defaultValue={1}
                                        type="number"
                                        onChange={(e) => {
                                            onChange(index, e);
                                        }}
                                    >
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                        <MenuItem value={4}>4</MenuItem>
                                        <MenuItem value={5}>5</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                        { skills.length > 1 &&
                            <Button onClick={(e) => handleRemovedSkill(e, index)}>
                                Remove Skill
                            </Button>
                        }
                    </>
                );
            })}

            <Button onClick={(e) => handleAddedSkill(e)}>
                Add skill
            </Button>
        </>
    );
};

export default Skills;