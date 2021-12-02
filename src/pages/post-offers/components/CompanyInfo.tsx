import React from 'react';
import { TextField } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
    createStyles({
        textField: {
            width: 'inherit',
        }
    }),
);

const CompanyInfo = ({ formData, setFormData }: any): JSX.Element => {
    const classes = useStyles();

    return (
        <>
            <TextField
                classes={{ root: classes.textField }}
                id="outlined-name"
                label="Offer title"
                margin="dense"
                variant="outlined"
                value={formData.title}
                onChange={(e) => {
                    setFormData({ ...formData, title: e.target.value });
                }}
            />
            <TextField
                classes={{ root: classes.textField }}
                id="outlined-name"
                label="Street and building number"
                margin="dense"
                variant="outlined"
                value={formData.street}
                onChange={(e) => {
                    setFormData({ ...formData, street: e.target.value });
                }}
            />
            <TextField
                classes={{ root: classes.textField }}
                id="outlined-name"
                label="City"
                margin="dense"
                variant="outlined"
                value={formData.city}
                onChange={(e) => {
                    setFormData({ ...formData, city: e.target.value });
                }}
            />
            <TextField
                classes={{ root: classes.textField }}
                id="outlined-name"
                label="Company Name"
                margin="dense"
                variant="outlined"
                value={formData.company_name}
                onChange={(e) => {
                    setFormData({ ...formData, company_name: e.target.value });
                }}
            />
            <TextField
                classes={{ root: classes.textField }}
                id="outlined-name"
                label="Company web site adress"
                type="url"
                margin="dense"
                variant="outlined"
                value={formData.company_logo_url}
                onChange={(e) => {
                    setFormData({ ...formData, company_logo_url: e.target.value });
                }}
            />
            <TextField
                classes={{ root: classes.textField }}
                id="outlined-name"
                label="Company Size"
                margin="dense"
                variant="outlined"
                value={formData.company_size}
                onChange={(e) => {
                    setFormData({ ...formData, company_size: e.target.value });
                }}
            />
        </>
    );
};

export default CompanyInfo;