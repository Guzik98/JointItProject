import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import { SettingsContext } from '../../../../Settings';

const useStyles = makeStyles({
    city: {
        borderRadius: 32,
        border: '1px solid',
        color: 'rgb(119, 119, 119)',
        borderColor: 'rgb(228, 232, 240)',
        paddingLeft: 16,
        paddingRight: 16,
        margin: 6,
        height: 36,
        '&active': {
            backgroundColor: 'red'
        },
    },
    label: {
        textTransform: 'none',
        fontWeight: 500,
        fontSize: 14,
        fontFamily: 'Open Sans,sans-serif',
        textDecoration: 'none!important'
    },
});

const CityBtnComponent = ({ city  } : { city : string }) : JSX.Element => {
    const settingsContext = useContext(SettingsContext);
    const classes = useStyles();

    return (
        <NavLink  to={`/${city}`} onClick={() => settingsContext?.setCity(`${city}`)} activeClassName="active" >
            <Button  size="small"
                    variant="outlined"
                    classes = {{
                        root: classes.city,
                        label: classes.label,
                    }}>
                {city}
            </Button>
        </NavLink>
    );
};

export default CityBtnComponent;