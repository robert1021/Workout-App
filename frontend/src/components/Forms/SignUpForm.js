import { Stack, TextField, Button } from "@mui/material";
import "./Forms.css";
import "./SignUpForm.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'

export default function SignUpForm() {
  // manage state for input fields
  const [user, setUser] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // mamange state for input error
  const [userError, setUserError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault();
    // set all inputs false so red outline goes away
    setUserError(false)
    setEmailError(false)
    setPasswordError(false)

    if (user === "") {
      setUserError(true)
    } 

    if (email === "") {
      setEmailError(true)
    }

    if (password === "") {
      setPasswordError(true)
    }

    // do something if all fields filled
    if (user && email && password) {
      console.log(user, email, password);

      axios.post("http://localhost:4000/auth/register",
        {
          email: email,
          // username: username,
          password: password
        })
        .then(() => {
          console.log("this works")
        })
        .catch((e) => {
          console.log("Error with backend", e)
        })





    }
  };

  return (
    <Stack alignItems="center" className="box">
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
            variant="outlined"
            required
            error={userError}
          />
        </div>
        <div className="form-group">
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            id="email"
            type="email"
            label="Email"
            variant="outlined"
            required
            error={emailError}
          />
        </div>
        <div className="form-group">
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            id="password"
            type="password"
            label="Password"
            variant="outlined"
            required
            error={passwordError}
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
    </Stack>
  );
}
