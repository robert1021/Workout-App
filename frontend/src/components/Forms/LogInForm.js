import "./Forms.css";
import "./LogInForm.css";
import { Link } from "react-router-dom";
import { Stack, TextField, Button } from "@mui/material";
import { useState } from "react";

export default function LogInForm() {
  // manage state for input fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // mamange state for input error
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // set both inputs false so red outline goes away
    setEmailError(false);
    setPasswordError(false);

    if (email === "") {
      setEmailError(true);
    }

    if (password === "") {
      setPasswordError(true);
    }

    // do something if email and password
    if (email && password) {
      console.log(email, password);
    }
  };

  return (
    <Stack alignItems="center" className="box">
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Stack alignItems="center">
          <h2>Welcome back</h2>
        </Stack>
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
    </Stack>
  );
}
