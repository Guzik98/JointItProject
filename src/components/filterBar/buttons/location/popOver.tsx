import React from 'react';
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';
import Typography from '@material-ui/core/Typography';

import './popOver.sass';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import MediaQuery from 'react-responsive';
import { makeStyles } from '@material-ui/core/styles';
import { Collapse, Divider } from '@material-ui/core';
import CityBtnComponent from './CityBtnComponent';

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

type CityType = {
    city : string,
    href?: string
};

const cityPoland = [
    { city: 'Warszawa' },
    { city: 'Krakow' },
    { city: 'Wrocław' },
    { city: 'Poznań' },
    { city: 'Trójmiasto' },
    { city: 'Śląsk' }
];

const cityWorld = [
    { city: 'New York' },
    { city: 'Sydney' },
    { city: 'Berlin' },
    { city:  'San Francisco' },
    { city: 'London' },
];

const OtherPolandCities = [
    { city: 'Białystok' },
    { city: 'Bielsko-Biała' },
    { city: 'Bydgoszcz' },
    { city: 'Czestochowa' },
    { city: 'Kielce' },
    { city: 'Lublin' },
    { city: 'Łódź' },
    { city: 'Olsztyn' },
    { city: 'Opole' },
    { city: 'Rzeszów' },
    { city: 'Szecin' },
    { city: 'Toruń' },
    { city: 'Zielona Góra' }
];


const PopOverLocation = (props : any) :JSX.Element => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const toggle = () => {
        setOpen(!open);
    };
    const onClick = () => {
        props.click();
    };

    return (
        <Typography  className="typography">
            <div className = "typography-border">
                <div className="typography-container">
                    <MediaQuery maxWidth={1024}>
                        <div className='title'>
                            <span>Location</span>
                            <div className="exit-icon-border" onClick={ onClick }>
                                <div className="exit-icon">
                                    <ClearIcon/>
                                </div>
                            </div>
                        </div>
                        <Divider className="divider" variant='fullWidth'/>
                    </MediaQuery>
                    <div className="type-work">
                        <div className="type-work-level2">
                            <Button size="small"
                                    variant="outlined"
                                    classes = {{
                                        root: classes.city,
                                        label: classes.label
                                    }}>
                                Remote Poland
                            </Button>

                            <Button size="small"
                                    variant="outlined"
                                    classes = {{
                                        root: classes.city,
                                        label: classes.label
                                    }}>
                                Remote Global
                            </Button>
                        </div>
                        <MediaQuery minWidth={1024}>
                            <div className="exit-icon-border" onClick={ onClick }>
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
                            { cityPoland.map(({ city }: CityType) => <CityBtnComponent city={city} key={city}/>) }
                        </div>
                    </div>
                    <div className="city-container">
                        <a role="button"  className="city-range-text">
                            Top World
                        </a>
                        <div className="city-buttons">
                            { cityWorld.map(({ city } : CityType) =>  <CityBtnComponent city={city} key={city}/>)  }
                        </div>
                    </div>
                    <div className="city-container">
                        <a role="button" className="city-range-text" onClick={ toggle }>
                            Other locations Poland
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </a>

                        <div className="city-buttons"  >
                            <Collapse in={open}>
                                { OtherPolandCities.map(({ city }: CityType) =>
                                    <CityBtnComponent city={city} key={city}/>) }
                            </Collapse>
                        </div>
                    </div>
                    <Divider className="divider-pop" variant='fullWidth'/>
                    <div>
                        <Button size="small"
                                variant="outlined"
                                classes = {{
                                    root: classes.city,
                                    label: classes.label
                                }}>
                            Clear Filter
                        </Button>
                    </div>
                </div>
            </div>
        </Typography>
    );
};

export default PopOverLocation;