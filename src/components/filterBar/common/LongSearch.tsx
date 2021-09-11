
import React from 'react';
import Chip from '@material-ui/core/Chip';
import { Autocomplete } from '@material-ui/lab';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { programingLanguageIconArray } from '../iconBar/programing-language';



import './LongSearch.sass';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            '&:focus': {
                width: '20ch',
            },
            '& > * + *': {
                marginTop: theme.spacing(2),
            },
        },
        overrides: {

        }
    }),
);

export default function LongSearch(): JSX.Element {
    const classes = useStyles();

    return (
        <div className={classes.root} >

            <Autocomplete
                multiple={true}
                id="size-small-filled-multi"
                size="medium"
                options={programingLanguageIconArray}

                getOptionLabel={(option) => `${option.name} ${ option.icon}` }
                defaultValue={[programingLanguageIconArray[13]]}
                fullWidth={true}

                renderOption={(option) => {
                    return <span>{`${option.name} ${ option.icon}`} </span> ;
                }}

                renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                        <Chip
                            key={option.name}
                            label={option.name}
                            size="small"
                            {...getTagProps({ index })}
                        />
                    ))
                }
                renderInput={(params) => (
                    <TextField {...params}  variant="filled" className="long-text-field" placeholder="Skill, Company, Location" />
                )}
            />
        </div>
    );
}
