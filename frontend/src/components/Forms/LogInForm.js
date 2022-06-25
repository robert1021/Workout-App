import "./Forms.css";
import "./LogInForm.css";
import { Link } from "react-router-dom";
import { Container, Stack, Paper, TextField, Button, InputAdornment } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import { useState } from "react";
import axios from "axios";

export default function LogInForm() {
  // manage state for input fields
  const [emailUser, setEmailUser] = useState("");
  const [password, setPassword] = useState("");
  // mamange state for input error
  const [emailUserError, setEmailUserError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // set both inputs false so red outline goes away
    setEmailUserError(false);
    setPasswordError(false);

    if (emailUser === "") {
      setEmailUserError(true);
    }

    if (password === "") {
      setPasswordError(true);
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
        alert(res.data)
      })
      .catch(error => {
        alert(error.response.data)
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
      </Paper>
    </Container>
  );
}
