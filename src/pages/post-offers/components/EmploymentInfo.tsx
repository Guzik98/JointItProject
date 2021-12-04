import React, { Dispatch, SetStateAction } from 'react';
import { Autocomplete } from '@material-ui/lab';
import { programingLanguageIconArray } from '../../../components/filterBar/iconBar/programing-language';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { OfferType } from '../../../types/offerType';
import '../post-offer.sass';

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

type FormDataType = {
    formData: OfferType;
    setFormData: Dispatch<SetStateAction<OfferType>>;
};


const EmploymentInfo = ({ formData, setFormData }: FormDataType): JSX.Element => {
    const classes = useStyles();

    return (
        <>
            <Autocomplete
                classes={{ root: classes.autocomplete, input: classes.autocompleteLabel }}
                id="highlights-demo"
                size="small"
                ListboxProps={{ style: { maxHeight: '200px' } }}
                options={programingLanguageIconArray}
                getOptionSelected={(option, value) =>  option.name === value.name }
                getOptionLabel={(option) => option.name}
                renderOption={(option) => {
                    if (option.name === 'All') {
                        return null;
                    }
                    return (
                        <div
                            onClick={() =>  {
                                if (option.name === 'JS'){
                                    setFormData({ ...formData, marker_icon: 'javascript' });
                                } else if (option.name === 'UX/UI'){
                                    setFormData({ ...formData, marker_icon: 'ux' });
                                } else {
                                    setFormData({ ...formData, marker_icon: option.name.toLowerCase() });
                                }
                            }}
                             className="autocomplete-row"
                        >
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
                    row aria-label="gender"
                    name="row-radio-buttons-group"
                    defaultValue="junior"
                    onChange={(e) => {
                        setFormData({ ...formData, experience_level: e.target.value });
                    }}
                >
                    <FormControlLabel  value="junior" control={<Radio/>}
                                      label="Junior"/>
                    <FormControlLabel value="mid" control={<Radio/>}
                                      label="Mid"/>
                    <FormControlLabel value="senior" control={<Radio/>}
                                      label="Senior"/>
                </RadioGroup>
            </FormControl>
            <FormControl component="fieldset">
                <FormLabel component="legend">Workplace type</FormLabel>
                <RadioGroup
                    row aria-label="gender"
                    name="row-radio-buttons-group"
                    defaultValue="remote"
                    onChange={(e) => {
                        setFormData({ ...formData, workplace_type: e.target.value });
                    }}
                >
                    <FormControlLabel  value="remote" control={<Radio/>}
                                      label="Remote"/>
                    <FormControlLabel value="partly_remote" control={<Radio/>}
                                      label="Partly remote"/>
                    <FormControlLabel value="office" control={<Radio/>}
                                      label="Office"/>
                </RadioGroup>
            </FormControl>
            <FormControl component="fieldset">
                <FormLabel component="legend">Interview type</FormLabel>
                <RadioGroup
                    row
                    aria-label="Interview type"
                    name="row-radio-buttons-group"
                    defaultValue="online"
                >
                    <FormControlLabel
                        onClick={() =>   setFormData({ ...formData, remote: true })}
                        value="online"
                        control={<Radio/>}
                        label="Online"/>
                    <FormControlLabel
                        onClick={() =>   setFormData({ ...formData, remote: false })}
                        value="offline"
                        control={<Radio/>}
                        label="Offline"/>
                </RadioGroup>
            </FormControl>
        </>
    );
};

export default EmploymentInfo;