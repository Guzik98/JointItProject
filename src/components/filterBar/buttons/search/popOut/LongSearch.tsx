import React from 'react';
import { Autocomplete, createFilterOptions } from '@material-ui/lab';
import { createStyles, makeStyles, Theme, Chip, TextField } from '@material-ui/core';
import './LongSearch.sass';
import { HandlePopOut } from '../../../../../types/shortTypes';
import IconStartLongSearch from '../../../../../assets/icons/svg/IconStartLongSearch';
import { useSettings } from '../../../../../Settings';
import { programingLanguageIconArray } from '../../../iconBar/programing-language';
import CompanyIconOffer from '../../../../../assets/icons/svg/CompanyIconOffer';
import PointerIconOffer from '../../../../../assets/icons/svg/PointerIconOffer';
import ConcatFunction from './concatFunction';

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
            backgroundColor: 'rgb(228, 232, 240)',
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
            '& .MuiIconButton-label': {
                display: 'none',
            },
        },
        '& .MuiSvgIcon-root': {
            width: 0,
            height: 0,
        },
        input: {
            marginLeft: 0,
        },
        item: {
            backgroundColor: 'rgb(255, 255, 255)',
            margin: '2px 5px 2px 2px',
            padding: '0px 10px 0px 10px',
            border: '1px solid rgb(228, 232, 240)',
            height: '30px',
            fontWeight: 400,
            fontSize: 12
        },
    }),
);

export default function LongSearch({ handleClose }: HandlePopOut): JSX.Element {
    const classes = useStyles();
    const { setLongFilterLocation, setLongFilterTech, setLongFilterCompany } = useSettings();

    const longSreachArray = ConcatFunction();

    const filterOptions = createFilterOptions({
        limit: 12,
        stringify: (option:  { name: string, category: string } ) => option.name,
    });

    return (
        <>
            <Autocomplete
                classes={{ root: classes.root, input: classes.input  }}
                multiple={true}
                limitTags={5}
                loading={true}
                size="medium"
                filterOptions = {filterOptions}
                filterSelectedOptions ={true}
                loadingText = {'It is loading'}
                noOptionsText={'No options'}
                options={longSreachArray}
                disableCloseOnSelect
                getOptionSelected={(option, value) => option.name === value.name}
                getOptionLabel={(option) => option.name }
                renderOption={(option) => {
                    if (option.name === 'All') {
                        return null;
                    } else {
                        return (
                            <>
                                {option.category === 'Skill'
                                    ?
                                    <div
                                        className="search-label"
                                        onClick={() => setLongFilterTech(setLongFilterTech => [...setLongFilterTech, {
                                            name: option.name,
                                            category: option.category
                                        }])}
                                    >
                                        {programingLanguageIconArray.map((item) => {
                                            if (option.name === item.name) {
                                                return (<span className="circle">
                                                        {item.icon}
                                                    </span>
                                                );
                                            }
                                        })}
                                        <span className="text-label">
                                                {option.name}
                                            <span className="category-label">
                                                    {option.category}
                                                </span>
                                            </span>
                                    </div>
                                    : null
                                }
                                {option.category === 'Location' && option
                                    ?
                                    <div
                                        className="search-label"
                                        onClick={() => setLongFilterLocation(longFilterLocation => [...longFilterLocation, {
                                            name: option.name,
                                            category: option.category
                                        }])}
                                    >
                                            <span className="circle">
                                                <PointerIconOffer/>
                                            </span>
                                        <span className="text-label">
                                                {option.name}
                                            <span className="category-label">
                                                    {option.category}
                                                </span>
                                            </span>
                                    </div> : null
                                }
                                {option.category === 'Company'
                                    ?
                                    <div
                                        className="search-label"
                                        onClick={() => setLongFilterCompany(longFilterCompany => [...longFilterCompany, {
                                            name: option.name,
                                            category: option.category
                                        }])}
                                    >
                                        <span className="circle">
                                            <CompanyIconOffer/>
                                        </span>
                                        <span className="text-label">
                                            {option.name}
                                            <span className="category-label">
                                                {option.category}
                                            </span>
                                        </span>
                                    </div> : null
                                }
                            </>
                        );
                    }
                }
                }
                renderTags={(value, getTagProps)=>
                    value.map((option, index) => (
                            <Chip
                                classes = {{ root : classes.item }}
                                key={option.name}
                                size="small"
                                {...getTagProps({ index })}
                                label={(
                                    <section className = "chip-label">
                                        <span className= "category">  {option.category} </span>
                                        <span className = "describe"> { option.name } </span>
                                    </section>
                                )}
                            />
                    ))
                }
                renderInput={(params )   => (
                    <div className="input">
                        <div className="back-icon" onClick = {handleClose}>
                            <IconStartLongSearch/>
                        </div>
                        <TextField {...params} className="long-text-field" placeholder= "Skill, Company, Location"/>
                    </div>
                )}
            />
        </>
    );
}
