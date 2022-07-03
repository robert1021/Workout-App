import { Container, Stack, Paper, TextField, Button, InputAdornment } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import "./Forms.css";
import "./SignUpForm.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'
import { emailValidation, whiteSpaceValidation } from "./formValidation"
import {BasicSnackBar} from "../Notifications/BasicSnackBar";
import { BasicBackdrop } from "../Loading/BasicBackdrop";
import React from 'react';




export const SignUpForm: React.FC = () => {

  const nav = useNavigate()

  // default helpertext if nothing entered
  const usernameHelperText = 'Please enter a username'
  const emailHelperText = 'Please enter an email'
  const passwordHelperText = 'Please enter a password'

  const [severity, setSeverity] = useState('')
  const [showSnackBar, setShowSnackBar] = useState<Boolean>(false)
  // manage state for input fields
  const [user, setUser] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // mamange state for input error
  const [userError, setUserError] = useState<boolean>(false)
  const [emailError, setEmailError] = useState<boolean>(false)
  const [passwordError, setPasswordError] = useState<boolean>(false)
  const [userErrorMsg, setUserErrorMsg] = useState('')
  const [emailErrorMsg, setEmailErrorMsg] = useState('')
  const [passErrorMsg, setPassErrorMsg] = useState('')


  const redirectSuccessfulRegister = () => {
    // show notification
    setSeverity('success')
    setShowSnackBar(true)
    // should redirect to a new page
    setTimeout(() => {
      nav('/profile')
    }, 3000)
  }


  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setShowSnackBar(false)
    // set all inputs false so red outline goes away
    setUserError(false)
    setEmailError(false)
    setPasswordError(false)
    setUserErrorMsg('')
    setEmailErrorMsg('')

    let isValidUser: boolean = true
    let isValidEmail: boolean = true
    let isValidPassword: boolean = true


    if (user === "") {
      setUserError(true)
      setUserErrorMsg(usernameHelperText)
    } else if (whiteSpaceValidation(user)) {
      setUserError(true)
      setUserErrorMsg("Please don't include spaces")
      isValidUser = false
    }

    // check if email empty and valid
    if (email === "") {
      setEmailError(true)
      setEmailErrorMsg(emailHelperText)

    } else if (!emailValidation(email)) {
      setEmailError(true)
      isValidEmail = false
      setEmailErrorMsg('Invalid email')

    }

    if (password === "") {
      setPasswordError(true)
      setPassErrorMsg(passwordHelperText)

    } else if (whiteSpaceValidation(password)) {
      setPasswordError(true)
      setPassErrorMsg("Please don't include spaces")
      isValidPassword = false
    }

    // do something if all fields filled
    if (user && email && password && isValidPassword && isValidUser && isValidEmail) {

      console.log(user, email, password);

      axios.post("http://localhost:4000/auth/register",
        {
          email: email,
          user: user,
          password: password
        })
        .then((res) => {

          if (res.data === 'Registration Complete!') {

            console.log(res.data)
            redirectSuccessfulRegister()

          }

        })
        .catch((error) => {

          if (error.response.data === 'Username already taken') {
            setUserErrorMsg(error.response.data)
            setUserError(true)
          } else if (error.response.data === 'Email already taken') {
            setEmailErrorMsg(error.response.data)
            setEmailError(true)
          }
        })

    }
  }


  return (
    <Container>
      <Paper elevation={3} className="form-box">
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Stack alignItems="center">
            <h2>Get started with Workout App</h2>
          </Stack>
          <div className="form-group">
            <TextField
              onChange={(e) => setUser(e.target.value)}
              fullWidth
              id="user"
              type="text"
              label="Username"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              required
              error={userError}
              helperText={userErrorMsg}
            />
          </div>
          <div className="form-group">
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              id="email"
              type="email"
              label="Email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              required
              error={emailError}
              helperText={emailErrorMsg}
            />
          </div>
          <div className="form-group">
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              id="password"
              type="password"
              label="Password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <KeyIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              required
              error={passwordError}
              helperText={passErrorMsg}
            />
          </div>
          <Stack alignItems="center" className="signup-button">
            <Button type="submit" variant="contained" size="large" className="form-button">
              Sign up
            </Button>

          </Stack>
          <h3>
            Already have an account?
            <Link to={"/login"}>Log In</Link>
          </h3>
        </form>

        {showSnackBar && <BasicSnackBar severity={severity} message='Registration Complete!' duration={3000} trigger={undefined} />}
        {showSnackBar && <BasicBackdrop timer={3000} />}

      </Paper>


    </Container>

  );
}
