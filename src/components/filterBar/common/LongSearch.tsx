import React from 'react';
import { Autocomplete } from '@material-ui/lab';
import { programingLanguageIconArray } from '../iconBar/programing-language';
import { createStyles, makeStyles, Theme, Chip, TextField } from '@material-ui/core';
import './LongSearch.sass';

const IconStart = () : JSX.Element => {
    return (
        <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
        </svg>
    );
};


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            height: 34,
            padding: '3px 10px 3px 10px',
            '&:focus': {
                width: '20ch',
            },
            '& > * + *': {
                marginTop: theme.spacing(2),
            },
            display: 'flex',
            backgroundColor : 'rgb(228, 232, 240)',
            borderRadius: '20px',
            textDecoration: 'none',
            '& .MuiInput-underline:before': {
                borderBottom: 'unset',
            },
            '& .MuiInput-underline:hover:before': {
                borderBottom: 'unset',
            },
            '& .MuiInput-underline:after': {
                borderBottom: 'unset',
            },
            '& .MuiIconButton-label' : {
                display: 'none',
            },
        },
        '& .MuiSvgIcon-root' : {
                width : 0,
                 height :0,
        },

        input : {
            marginLeft: 0,
        },
        item : {
            backgroundColor: 'rgb(255, 255, 255)',
            margin: '2px 5px 2px 2px',
            padding: '0px 10px 0px 10px',
            border: '1px solid rgb(228, 232, 240)',
            height: '30px',
            fontWeight: 600,
            fontSize: 12
        },
    }),
);

export default function LongSearch( props : any ): JSX.Element {
    const classes = useStyles();

    const onClickClose =  () => {
        props.close();
    };

    return (
        <>
            <Autocomplete
                classes={{ root: classes.root, input: classes.input  }}
                multiple={true}
                size="medium"
                options={programingLanguageIconArray}
                getOptionLabel={(option) => option.name }
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
                        <>
                            <Chip
                                classes = {{ root : classes.item }}
                                key={option.name}
                                size="small"
                                {...getTagProps({ index })}
                                label={(
                                    <section className = "chip-label">
                                        <span className= "category">  CATEGORY </span>
                                        <span className = "describe"> { option.name } </span>
                                    </section>
                                )}
                            />
                        </>
                    ))
                }

                renderInput={(params )   => (
                    <div className="input">
                        <div className="back-icon" onClick = {onClickClose}>
                            <IconStart/>
                        </div>
                        <TextField {...params} className="long-text-field" placeholder= "Skill, Company, Location"/>
                    </div>
                )}
            />
        </>
    );
}
