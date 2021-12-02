import React from 'react';
import { Autocomplete } from '@material-ui/lab';
import { programingLanguageIconArray } from '../../../components/filterBar/iconBar/programing-language';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
    createStyles({
        autocomplete: {
            border: '2px solid #e0eaea',
            borderRadius: 4,
            marginBottom: 10,
        },
        autocompleteLabel: {
            marginLeft: 10,
        },
        textField: {
            width: 'inherit',
        }
    }),
);

const EmploymentInfo = ({ formData, setFormData }: any): JSX.Element => {
    const classes = useStyles();

    return (
        <>
            <Autocomplete
                disablePortal
                classes={{ root: classes.autocomplete, input: classes.autocompleteLabel }}
                id="highlights-demo"
                size="small"
                ListboxProps={{ style: { maxHeight: '200px' } }}
                options={programingLanguageIconArray}
                getOptionLabel={(option) => option.name}
                value={formData.marker_icon}
                onChange={(e) => {
                    setFormData({ ...formData, marker_icon: e.target });
                }}
                renderOption={(option) => {
                    if (option.name === 'All') {
                        return null;
                    }
                    return (
                        <div className="autocomplete-row">
                            <div className="circle">
                                {option.icon}
                            </div>
                            <div className="tech-name">
                                {option.name}
                            </div>
                        </div>
                    );
                }}
                renderInput={(params) => <TextField {...params} label="Main tech"/>}
            />


            <FormControl component="fieldset">
                <FormLabel component="legend">Experience level</FormLabel>
                <RadioGroup
                    row aria-label="gender" name="row-radio-buttons-group"
                >
                    <FormControlLabel value="Junior" control={<Radio/>}
                                      label="Junior"/>
                    <FormControlLabel value="Mid" control={<Radio/>}
                                      label="Mid"/>
                    <FormControlLabel value="Senior" control={<Radio/>}
                                      label="Senior"/>
                </RadioGroup>
            </FormControl>
            <FormControl component="fieldset">
                <FormLabel component="legend">Workplace type</FormLabel>
                <RadioGroup
                    row aria-label="gender" name="row-radio-buttons-group"
                >
                    <FormControlLabel value="remote" control={<Radio/>}
                                      label="Remote"/>
                    <FormControlLabel value="partly_remote" control={<Radio/>}
                                      label="Partly remote"/>
                    <FormControlLabel value="office" control={<Radio/>}
                                      label="Office"/>
                </RadioGroup>
            </FormControl>
            <FormControl component="fieldset">
                <FormLabel component="legend">Workplace type</FormLabel>
                <RadioGroup
                    row aria-label="gender" name="row-radio-buttons-group"
                >
                    <FormControlLabel value="Online" control={<Radio/>}
                                      label="Online"/>
                    <FormControlLabel value="Offline" control={<Radio/>}
                                      label="Offline"/>
                </RadioGroup>
            </FormControl>
        </>
    );
};

export default EmploymentInfo;