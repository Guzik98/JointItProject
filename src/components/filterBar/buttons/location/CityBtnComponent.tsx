import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
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
    const classes = useStyles ();
    const { setCity, tech, seniority, employmentType, fromSalary, toSalary, sortBy, withSalary } = useSettings ();

    const handleClose = () => {
        props.click ();
    };
    return (
        <NavLink
            to={`/Offers/${props.city}/${tech}/${seniority}/${employmentType}/${fromSalary}/${toSalary}/${sortBy}/${withSalary}`}
            onClick={() => setCity (`${props.city}`)}
            activeClassName="active"
        >
            <Button size="small"
                    variant="outlined"
                    onClick={handleClose}
                    classes={{
                        root: classes.city,
                        label: classes.label,
                    }}
            >
                {props.city}
            </Button>
        </NavLink>
    );
};

export default CityBtnComponent;