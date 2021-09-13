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
            display: 'flex'
        },
        '& .MuiSvgIcon-root' : {
                paddingRight: 10,
                fill: 'black',
                paddingTop: 20,
                color: 'black',
                position: 'absolute',
                marginTop: 20,

        }
    }),
);

import { Avatar,  } from '@material-ui/core';

import { ArrowDropDownCircle } from '@material-ui/icons';





export default function LongSearch(): JSX.Element {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <Autocomplete
                multiple={true}
                size="medium"
                options={programingLanguageIconArray}
                getOptionLabel={(option) => option.name + 'category' }
                fullWidth={true}
                popupIcon={ <ArrowDropDownCircle />}
                limitTags = {2}

                renderOption={(option) => {
                    if ( option.name !== 'All') {
                        return (
                            <span className="search-label">
                            <span className="circle">
                                {option.icon}
                            </span>
                            <span className="text-label">
                               {option.name}
                                <span className="category-label">
                                    category
                                </span>
                            </span>
                        </span>
                        );
                    }
                }}

                renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                            <Chip
                                key={option.name}
                                label={ option.name + 'category'}
                                size="small"
                                avatar={<Avatar>{option.icon}</Avatar> }
                                {...getTagProps({ index })}
                            />
                            
                    ))
                }

                renderInput={(params) => (
                        <TextField {...params}    className="long-text-field" placeholder= "Skill, Company, Location">

                        </TextField>
                )}
            />
        </div>
    );
}
