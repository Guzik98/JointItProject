import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useSettings } from '../../../../Settings';

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
    },
    label: {

        textTransform: 'none',
        fontWeight: 500,
        fontSize: 14,
        fontFamily: 'Open Sans,sans-serif',
        textDecoration: 'none!important'
    },

});

const CityBtnComponent = (props: any): JSX.Element => {
    const classes = useStyles();
    const { setCity, city } = useSettings();

    const handleClick = () => {
        props.click();
        setCity(`${props.city}`);
    };

    return (
            <Button size="small"
                    variant="outlined"
                    onClick={handleClick}
                    className={ `${city == props.city ? 'active' : '' } `}
                    classes={{
                        root: classes.city,
                        label: classes.label,
                    }}
            >
                {props.city}
            </Button>
    );
};

export default CityBtnComponent;