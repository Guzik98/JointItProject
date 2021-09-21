import React from 'react';
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';
import Typography from '@material-ui/core/Typography';

import './LocationPopOver.sass';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import MediaQuery from 'react-responsive';
import { makeStyles } from '@material-ui/core/styles';
import { Collapse, Divider } from '@material-ui/core';
import CityBtnComponent from './CityBtnComponent';
import { useSettings } from '../../../../Settings';
import { Link, NavLink } from 'react-router-dom';
import { cityPoland, CityType, cityWorld, OtherPolandCities } from './CityBtn';

const useStyles = makeStyles ({
    city: {
        borderRadius: 32,
        border: '1px solid',
        color: 'rgb(119, 119, 119)',
        borderColor: 'rgb(228, 232, 240)',
        paddingLeft: 16,
        paddingRight: 16,
        margin: 6,
        height: 36
    },
    label: {
        textTransform: 'none',
        textDecoration: 'none',
        fontWeight: 500,
        fontSize: 14,
        fontFamily: 'Open Sans,sans-serif',
    },
});



const PopOverLocation = (props : any) :JSX.Element => {
    const classes = useStyles ();
    const { setCity, tech, seniority, employmentType, fromSalary, toSalary, sortBy, withSalary } = useSettings ();

    const [open, setOpen] = React.useState (false);

    const toggle = () => {
        setOpen (!open);
    };
    const handleClose = () => {
        props.click ();
    };
    const clear = () => {
        setCity ('all');
        handleClose ();
    };

    return (
        <Typography className="typography">
            <div className="typography-border">
                <div className="typography-container">
                    <MediaQuery maxWidth={1024}>
                        <div className="title">
                            <span>Location</span>
                            <div className="exit-icon-border" onClick={handleClose}>
                                <div className="exit-icon">
                                    <ClearIcon/>
                                </div>
                            </div>
                        </div>
                        <Divider className="divider" variant='fullWidth'/>
                    </MediaQuery>
                    <div className="type-work">
                        <div className="type-work-level2">
                            <NavLink
                                to={`/Offers/Remote-Poland/${tech}/${seniority}/${employmentType}/${fromSalary}/${toSalary}/${sortBy}/${withSalary}`}
                                onClick={() => setCity ('Remote Poland')}
                                activeClassName="active"
                            >
                                <Button size="small"
                                        variant="outlined"
                                        onClick={handleClose}
                                        classes={{
                                            root: classes.city,
                                            label: classes.label
                                        }}
                                >
                                    Remote Poland
                                </Button>
                            </NavLink>
                            <NavLink
                                to={`/Offers/Remote Global/${tech}/${seniority}/${employmentType}/${fromSalary}/${toSalary}/${sortBy}/${withSalary}`}
                                onClick={() => setCity ('Remote Global')}
                                activeClassName="active"
                            >
                                <Button size="small"
                                        variant="outlined"
                                        onClick={handleClose}
                                        classes={{
                                            root: classes.city,
                                            label: classes.label
                                        }}
                                >
                                    Remote Global
                                </Button>
                            </NavLink>
                        </div>
                        <MediaQuery minWidth={1024}>
                            <div className="exit-icon-border" onClick={handleClose}>
                                <div className="exit-icon">
                                    <ClearIcon/>
                                </div>
                            </div>
                        </MediaQuery>
                    </div>
                    <div className="city-container">
                        <a className="city-range-text">
                            Top Poland
                        </a>
                        <div className="city-buttons">
                            {cityPoland.map (({ city }: CityType) =>
                                <CityBtnComponent click={handleClose} city={city} key={city}/>)
                            }
                        </div>
                    </div>
                    <div className="city-container">
                        <a role="button" className="city-range-text">
                            Top World
                        </a>
                        <div className="city-buttons">
                            {cityWorld.map (({ city }: CityType) =>
                                <CityBtnComponent click={handleClose} city={city} key={city}/>)
                            }
                        </div>
                    </div>
                    <div className="city-container">
                        <a role="button" className="city-range-text" onClick={ toggle }>
                            Other locations Poland
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </a>

                        <div className="city-buttons"  >
                            <Collapse in={open}>
                                {OtherPolandCities.map (({ city }: CityType) =>
                                    <CityBtnComponent click={handleClose} city={city} key={city}/>)
                                }
                            </Collapse>
                        </div>
                    </div>
                    <Divider className="divider-pop" variant="fullWidth"/>
                    <div>
                        <Link
                            to={`/Offers/all/${tech}/${seniority}/${employmentType}/${fromSalary}/${toSalary}/${sortBy}/${withSalary}`}>
                            <Button size="small"
                                    onClick={clear}
                                    variant="outlined"
                                    classes={{
                                        root: classes.city,
                                        label: classes.label
                                    }}
                            >
                                Clear Filter
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </Typography>
    );
};

export default PopOverLocation;