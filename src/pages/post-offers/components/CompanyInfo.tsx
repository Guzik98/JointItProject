import React, { Dispatch, SetStateAction } from 'react';
import { TextField } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { OfferType } from '../../../types/offerType';

const useStyles = makeStyles(() =>
    createStyles({
        textField: {
            width: 'inherit',
        }
    }),
);


type FormDataType = {
    formData: OfferType;
    setFormData: Dispatch<SetStateAction<OfferType>>;
};

const CompanyInfo = ({ formData, setFormData }: FormDataType): JSX.Element => {
    const classes = useStyles();

    return (
        <>
            <TextField
                required
                classes={{ root: classes.textField }}
                id="outlined-name"
                label="Offer title"
                margin="dense"
                name="offerTitle"
                variant="outlined"
                value={formData.title}
                helperText={formData.title.trim().length < 4 &&  'Title need a least 3 characters' }
                onChange={(e) => {
                    setFormData({ ...formData, title: e.target.value });
                }}
            />
            <TextField
                classes={{ root: classes.textField }}
                required
                id="outlined-name"
                label="Street and building number"
                margin="dense"
                variant="outlined"
                value={formData.street}
                helperText={formData.street.trim().length < 3  &&  'Street need a least 3 characters' }
                onChange={(e) => {
                    setFormData({ ...formData, street: e.target.value });
                }}

            />
            <TextField
                classes={{ root: classes.textField }}
                required
                id="outlined-name"
                label="City"
                margin="dense"
                variant="outlined"
                value={formData.city}
                helperText={formData.city.trim().length < 3  &&  'Street need a least 4 characters' }
                onChange={(e) => {
                    setFormData({ ...formData, city: e.target.value });
                }}
            />
            <TextField
                classes={{ root: classes.textField }}
                required
                id="outlined-name"
                label="Company Name"
                margin="dense"
                variant="outlined"
                value={formData.company_name}
                helperText={formData.company_name.trim().length < 4  &&  'Company need a least 4 characters' }
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
                value={formData.company_url}
                onChange={(e) => {
                    setFormData({ ...formData, company_url: e.target.value });
                }}
            />
            <TextField
                classes={{ root: classes.textField }}
                required
                id="outlined-name"
                label="Company Size"
                margin="dense"
                variant="outlined"
                type="number"
                value={formData.company_size}
                helperText={formData.company_size.trim().length > 1  &&  'Field is required.' }
                onChange={(e) => {
                    setFormData({ ...formData, company_size: e.target.value as string });
                }}
            />
        </>
    );
};

export default CompanyInfo;