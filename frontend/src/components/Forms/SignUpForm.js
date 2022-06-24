import { Container, Stack, Paper, TextField, Button, InputAdornment } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import "./Forms.css";
import "./SignUpForm.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'
import emailValidation from "./emailValidation.js"
import BasicBackdrop from "../Loading/BasicBackdrop";



export default function SignUpForm() {

  // default helpertext if nothing entered
  const usernameHelperText = 'Please enter a username'
  const emailHelperText = 'Please enter an email'
  const passwordHelperText = 'Please enter a password'

  let isValidEmail = false
  
  
  const [triggerBackDrop, setTriggerBackDrop] = useState(false)

  
  // manage state for input fields
  const [user, setUser] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // mamange state for input error
  const [userError, setUserError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [userErrorMsg, setUserErrorMsg] = useState('')
  const [emailErrorMsg, setEmailErrorMsg] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault();
    setTriggerBackDrop(false)
    // set all inputs false so red outline goes away
    setUserError(false)
    setEmailError(false)
    setPasswordError(false)
    setUserErrorMsg('')
    setEmailErrorMsg('')
    isValidEmail = true
    

    if (user === "") {
      setUserError(true)
      setUserErrorMsg(usernameHelperText)
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
    }

    // do something if all fields filled
    if (user && email && password && isValidEmail) {

      console.log(user, email, password);

      axios.post("http://localhost:4000/auth/register",
        {
          email: email,
          user: user,
          password: password
        })
        .then((res) => {
          
          if (res.data === 'Registration Complete!') {
            
            // turn on the loading backdrop
             setTriggerBackDrop(true)
            //  setTimeout(() => setBackDrop(false), 3000)
             // should redirect to a new page after fake loading done
             
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
  };

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
              helperText={passwordError ? passwordHelperText : null}
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
      </Paper>
      {triggerBackDrop && <BasicBackdrop timer={2000}/>}
    </Container>
  );
}
