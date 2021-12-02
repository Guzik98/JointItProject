import React, { useState } from 'react';
import axios from 'axios';
import './singup.sass';
import { Button, FormControlLabel, Radio, RadioGroup, TextField } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { RoleEnum } from '../../types/shortTypes';

interface IFormInput {
    user: string;
    password: string;
    role: RoleEnum;
}

const useStyles = makeStyles(() =>
    createStyles({
        button: {
            width: '100%',
            color: '#fff',
            backgroundColor: '#3f51b5'
        },
        link: {
            width: '100%',
            marginRight: 0,
            alignItems: 'center'
        }
    }),
);

const SignUpPage = (): JSX.Element => {
    const navigate = useNavigate();
    const classes = useStyles();

    const { register, handleSubmit } = useForm<IFormInput>();
    const [errorMessage, setErrorMessage] = useState();

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        await axios.post('http://localhost:3000/auth/signup', {
            username: data.user,
            password: data.password,
            role: data.role,
        })
            .then(() => {
                navigate('/signin');
            })
            .catch((error) => {
                setErrorMessage(error.response.data.message);
            });

    };


    return (
        <div className="sign-up-page">
            <div className="form-content">
                <h1 className="form-header">
                    Join us!
                </h1>
                <p>
                    Start looking for new future with us.
                </p>
                {
                    errorMessage &&
                    <div className="form-error">
                        {errorMessage}
                    </div>

                }
                <div className="form-control-area">
                    <TextField
                        id="outlined-name"
                        label="Username"
                        margin="dense"
                        variant="outlined"
                        {...register('user')}
                    >
                    </TextField>

                    <TextField
                        id="outlined-name"
                        type="password"
                        label="password"
                        margin="dense"
                        variant="outlined"
                        {...register('password', { required: true, maxLength: 20 })}
                    >
                    </TextField>

                    <RadioGroup className="use-radio-group" defaultValue="first">
                        <FormControlLabel value="EMPLOYEE" {...register('role')} label="Employee" control={<Radio/>}/>
                        <FormControlLabel value="EMPLOYER" {...register('role')} label="Employer" control={<Radio/>}/>
                    </RadioGroup>
                </div>


                <Button
                    onClick={handleSubmit(onSubmit)}
                    classes={{ root: classes.button }}>
                    SIGN UP
                </Button>
                <Link to="/signin">
                    <Button classes={{ root: classes.link }}>
                        SIGN IN
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default SignUpPage;