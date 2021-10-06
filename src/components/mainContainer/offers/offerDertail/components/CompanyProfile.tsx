import React from 'react';
import { useSettings } from '../../../../../Settings';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
    createStyles({
        root : {
            borderRadius: '20px',
            height: 35,
            lineHeight: 35,
            fontSize: '0.8rem',
            fontWeight: 400,
            display: 'flex',
            alignItems: 'center',
            border: '1px solid rgb(228, 232, 240)',
            background: 'rgb(255, 255, 255)',
            marginLeft: '20px',
            padding: '0px 20px',
        },
        label: {
            height: 35,
            width: 80,
            textDecoration: 'none',
            textTransform: 'none',
            fontWeight: 500,
            fontSize: 14,
            color: 'rgb(119, 119, 119)',
            fontFamily: 'Open Sans,sans-serif',
        },
    }),
);

const CompanyProfile = () : JSX.Element=> {
    const { dataDetail } = useSettings();
    const styles = useStyles();
    return (
        <div className="company-profile">
            <img className="company-picture"
                 src={`${dataDetail?.company_profile.cover_photo_url}`}
                 alt="company logo"/>
            <div className="company-text">
                {dataDetail?.company_profile.short_description.substring(0, 248) + '...'}
            </div>
            <Link to={`${dataDetail?.company_profile.url}`}>
                <Button size="small" variant="outlined" classes ={{
                    root : styles.root,
                    label : styles.label }}
                >
                    Brand Story
                </Button>
            </Link>
        </div>
    );
};

export default CompanyProfile;