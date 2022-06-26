import "./Forms.css";
import "./LogInForm.css";
import { Link, useNavigate } from "react-router-dom";
import { Container, Stack, Paper, TextField, Button, InputAdornment } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import { useState } from "react";
import axios from "axios";
import BasicSnackBar from "../Notifications/BasicSnackBar";
import BasicBackdrop from "../Loading/BasicBackdrop";
import { createGlobalState } from 'react-hooks-global-state';

export const { setGlobalState, useGlobalState } = createGlobalState({ jwtToken: null });

export default function LogInForm() {

  const nav = useNavigate()

  const [severity, setSeverity] = useState('')
  const [showSnackBar, setShowSnackBar] = useState(false)

  // manage state for input fields
  const [emailUser, setEmailUser] = useState("");
  const [password, setPassword] = useState("");
  // mamange state for input error
  const [emailUserError, setEmailUserError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailUserErrorMsg, setEmailUserErrorMsg] = useState('');
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('');


  const redirectSuccessfulRegister = () => {
    // show notification
    setSeverity('success')
    setShowSnackBar(true)
    // should redirect to a new page
    setTimeout(() => {
      nav('/profile')
    }, 3000)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSnackBar(false)
    // set both inputs false so red outline goes away
    setEmailUserError(false);
    setPasswordError(false);
    setEmailUserErrorMsg('')
    setPasswordErrorMsg('')

    if (emailUser === "") {
      setEmailUserError(true);
      setEmailUserErrorMsg('Please enter a username or password')
    }

    if (password === "") {
      setPasswordError(true);
      setPasswordErrorMsg('Please enter a password')
    }

    // do something if email and password
    if (emailUser && password) {
      console.log(emailUser, password);
      axios.post("http://localhost:4000/auth/login",
        {
          emailOrUser: emailUser,
          password: password
        }
      ).then(res => {
        setGlobalState("jwtToken", res.data.token)
        redirectSuccessfulRegister()

      })
        .catch(error => {

          if (error.response.data === 'User not found') {
            setEmailUserErrorMsg(error.response.data)
            setEmailUserError(true)

          } else if (error.response.data === 'Wrong combination of username and password') {
            setEmailUserErrorMsg(error.response.data)
            setPasswordErrorMsg(error.response.data)
            setEmailUserError(true)
            setPasswordError(true)
          }

        })
    }
  };

  return (
    <Container>
      <Paper elevation={3} className="form-box">
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Stack alignItems="center">
            <h2>Welcome back</h2>
          </Stack>
          <div className="form-group">
            <TextField
              onChange={(e) => setEmailUser(e.target.value)}
              fullWidth
              id="email-user"
              type="text"
              label="Email or Username"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              required
              error={emailUserError}
              helperText={emailUserErrorMsg}
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
              helperText={passwordErrorMsg}
            />
          </div>
          <h4 className="forgot-password">
            <Link to={"/password-reset"}>Forgot password?</Link>
          </h4>

          <Stack alignItems="center" className="login-button">
            <Button type="submit" variant="contained" size="large" className="form-button">
              Log in
            </Button>
          </Stack>

          <h3>
            Don't have an account?
            <Link to={"/signup"}>Sign up</Link>
          </h3>
        </form>

        {showSnackBar && <BasicSnackBar severity={severity} message='Login successful!' duration={3000} />}
        {showSnackBar && <BasicBackdrop timer={3000} />}

      </Paper>
    </Container>
  );
}
