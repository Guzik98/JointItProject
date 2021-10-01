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
import { cityPoland, CityType, cityWorld, OtherPolandCities } from './CityBtn';

const useStyles = makeStyles({
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
    const classes = useStyles();
    const { setCity, city, setViewport } = useSettings();

    const [open, setOpen] = React.useState(false);

    const toggle = () => {
        setOpen(!open);
    };
    const handleClose = () => {
        props.click();
    };
    const clear = () => {
        setViewport({
            latitude: 52.237049,
            longitude: 21.017532,
            width: '100%',
            height: '98%',
            zoom: 5,
        });
        setCity('all');
        handleClose();
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
                            <div
                                onClick={() =>setCity('Remote Poland')}
                            >
                                <Button size="small"
                                        variant="outlined"
                                        className= {`${city === 'Remote Poland' ? 'active' : '' }`}
                                        onClick={handleClose}
                                        classes={{
                                            root: classes.city,
                                            label: classes.label
                                        }}
                                >
                                    Remote Poland
                                </Button>
                            </div>
                            <div
                                onClick={() =>setCity('Remote Global')}
                            >
                                <Button size="small"
                                        variant="outlined"
                                        onClick={handleClose}
                                        className= {`${city === 'Remote Global' ? 'active' : '' }`}
                                        classes={{
                                            root: classes.city,
                                            label: classes.label
                                        }}
                                >
                                    Remote Global
                                </Button>
                            </div>
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
                            {cityPoland.map(({ city, longitude, latitude }: CityType) =>
                                <CityBtnComponent click={handleClose} city={city} key={city}
                                                  longitude={longitude} latitude={latitude}
                                />)
                            }
                        </div>
                    </div>
                    <div className="city-container">
                        <a role="button" className="city-range-text">
                            Top World
                        </a>
                        <div className="city-buttons">
                            {cityWorld.map(({ city, longitude, latitude }: CityType) =>
                                <CityBtnComponent click={handleClose} city={city} key={city}
                                                  longitude={longitude} latitude={latitude}
                                />)
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
                                {OtherPolandCities.map(({ city, longitude, latitude }: CityType) =>
                                    <CityBtnComponent click={handleClose} city={city} key={city}
                                                      longitude={longitude} latitude={latitude}
                                    />)
                                }
                            </Collapse>
                        </div>
                    </div>
                    <Divider className="divider-pop" variant="fullWidth"/>
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
                </div>
            </div>
        </Typography>
    );
};

export default PopOverLocation;