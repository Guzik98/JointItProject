import React, { useState } from 'react';
import axios from 'axios';
import '../signup/singup.sass';
import { Button, TextField } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthSettings } from '../../AuthContext';
import { parseJwt } from '../../helpfuntions/accesToken/decodeAccessToken';

interface IFormInput {
    username: string;
    password: string;
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
    const  { setUsername, setRole } = useAuthSettings();
    const { register, handleSubmit } = useForm<IFormInput>();
    const [errorMessage, setErrorMessage] = useState<string>();

    const token = localStorage.getItem('accessToken');
    console.log(token);

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        await axios.post('http://localhost:3000/auth/signin', {
            username: data.username,
            password: data.password,
        })
            .then((response) => {
                setUsername(data.username);
                setRole(parseJwt(response.data.accessToken).role);
                localStorage.removeItem('accessToken');
                localStorage.setItem('accessToken', JSON.stringify(response.data.accessToken));

                navigate('/mainpage');
            })
            .catch((err) => {
                setErrorMessage(err.response.data.message);
            });
    };

    return (
        <div className="sign-up-page">
            <div className="form-content">
                <h1 className="form-header">
                    Join us!
                </h1>
                <p>
                    Fill in your user and password sign in.
                </p>
                {errorMessage &&
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
                        {...register('username')}
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

                </div>
                <Button
                    onClick={handleSubmit(onSubmit)}
                    classes={{ root: classes.button }}>
                    SIGN UP
                </Button>
                <Link to="/signup">
                    <Button classes={{ root: classes.link }}>
                        DON &apos; T HAVE AN ACCOUNT? SIGN UP NOW!
                    </Button>
                </Link>

            </div>
        </div>
    );
};

export default SignUpPage;