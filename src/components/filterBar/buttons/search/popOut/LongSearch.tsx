import React from 'react';
import { Autocomplete } from '@material-ui/lab';
import { createStyles, makeStyles, Theme, Chip, TextField } from '@material-ui/core';
import './LongSearch.sass';
import { HandlePopOut } from '../../../../../types/shortTypes';
import IconStartLongSearch from '../../../../../assets/icons/svg/IconStartLongSearch';
import { useSettings } from '../../../../../Settings';
import { OfferType } from '../../../../../types/offerType';
import PointerIconOffer from '../../../../../assets/icons/svg/PointerIconOffer';
import { programingLanguageIconArray } from '../../../iconBar/programing-language';
import CompanyIconOffer from '../../../../../assets/icons/svg/CompanyIconOffer';



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
            fontWeight: 600,
            fontSize: 12
        },
    }),
);


export default function LongSearch({ handleClose }: HandlePopOut): JSX.Element {
    const classes = useStyles();
    const { data } = useSettings();


    let category: string;

    const cityAll = data?.map((item: OfferType) => {
        return (item.city);
    });
    const companyAll = data?.map((item: OfferType) => {
        return (item.company_name);
    });

    const companyUnig = companyAll?.filter(function (item, pos, self) {
        return self.indexOf(item) == pos;
    });

    const CityUnig = cityAll?.filter(function (item, pos, self) {
        return self.indexOf(item) == pos;
    });


    const city = CityUnig?.map((item) => {
        category = 'Location';
        return ({ name: item, category: category, svg: <PointerIconOffer/> });
    });

    const company = companyUnig?.map((item) => {
        category = 'Company';
        return ({ name: item, category: category, svg: <CompanyIconOffer/> });
    });

    const skill = programingLanguageIconArray?.map((item) => {
        category = 'Skill';
        return ({ name: item.name, category: category, svg: item.icon });
    });

    if (!city || !company) {
        throw new Error('d');
    }

    const cityTechCompany = skill?.concat(city).concat(company);

    console.log(cityTechCompany);

    return (
        <>
            <Autocomplete
                classes={{ root: classes.root, input: classes.input  }}
                multiple={true}
                limitTags={5}
                loading={true}
                size="medium"
                loadingText = {'It is loading'}
                options={cityTechCompany}
                getOptionLabel={(option) => option.name }
                renderOption={(option ) => {
                     if ( option.name !== 'All') {
                        return (
                            <span className="search-label">
                            <span className="circle">
                                {option.svg}
                            </span>
                            <span className="text-label">
                               {option.name}
                                <span className="category-label">
                                    {option.category}
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
                                        <span className= "category">  {option.category} </span>
                                        <span className = "describe"> { option.name } </span>
                                    </section>
                                )}
                            />
                        </>
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
