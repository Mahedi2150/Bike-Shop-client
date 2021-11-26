import { Container, Grid, TextField, Typography, Button, Alert, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';


import login from '../../../images/login.jpg'
import Expire from '../Expire/Expire';
import useAuth from './../../../hooks/useAuth';
const Login = () => {
    const [loginData, setLoginData] = useState({})

    const { user, logInUser, isLoading, signInUsingGoogle, authError } = useAuth()

    const location = useLocation()
    const history = useHistory()


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        logInUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInUsingGoogle(location, history)
    }
    return (
        <Container sx={{ mt: 8 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: "100%" }} src={login} alt="" />
                </Grid>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography sx={{ borderBottom: 1 }} variant="h4" gutterBottom>
                        LOGIN
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField sx={{ width: "75%", m: 1 }} id="standard-basic"
                            label="Your Email"
                            type="email"
                            variant="standard"
                            name="email"
                            onChange={handleOnChange}
                        />
                        <TextField sx={{ width: "75%", m: 1 }} id="standard-basic"
                            label="Your Password"
                            type="password"
                            variant="standard"
                            name="password"
                            onChange={handleOnChange}
                        />
                        <Button sx={{ width: "75%", m: 1 }}
                            variant='contained' type="submit"
                            style={{
                                borderRadius: 35,
                                backgroundColor: "#43a047",
                                padding: "8px ",
                                fontSize: "18px"
                            }}
                        >
                            Login
                        </Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to='/register'>
                            <Button variant="text">New user? Please Register</Button>
                        </NavLink>
                    </form>

                    <button onClick={handleGoogleSignIn} type="button" className="btn btn-light">
                        <img src="https://img.icons8.com/color/24/000000/google-logo.png" />
                        oogle sign in</button>
                    <br />

                    {
                        isLoading && <CircularProgress />
                    }
                    {
                        user?.email && <Alert severity="success">User Login Successfully!!!</Alert>
                    }
                    {
                        authError && <Expire delay="5000">
                            <Alert severity="error">{authError}</Alert>
                        </Expire>
                    }
                </Grid>


            </Grid>
        </Container>
    );
};

export default Login;