
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Logo from "../images/logo.png";
import { createUser } from '../actions/posts';

const theme = createTheme();
export default function SignUp() {
  const dispatch = useDispatch();
  
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const user = new FormData(event.currentTarget);
    console.log({
      email: user.get("email"),
      password: user.get("password"),
      fullName: user.get("fullName"),
      phone: user.get("phone")
       });
      const newuser = { fullName:'', email:'', phone:'', password:''};
      newuser.fullName= user.get("fullName");
      newuser.email=user.get("email");
      newuser.password=user.get("password");
      newuser.phone=user.get("phone");
      console.log("HELLO", newuser.body);
          dispatch(createUser(newuser));
      };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              m: 1,
              bgcolor: "white",
              width: 120,
              height: 120,
              fontSize: 70,
            }}
          >
            <img src={Logo} alt="Logo" height="70" />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="fullName"
                  required
                  fullWidth
                  id="fullName"
                  label="fullName"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="phone"
                  name="phone"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>

            <Box display="flex" justifyContent="center" alignItems="center">
              <Link href="/" variant="body2" sx={{ mt: 3 }}>
                Already have an account? Sign in
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
