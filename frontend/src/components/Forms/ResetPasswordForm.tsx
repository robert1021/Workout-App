import "./Forms.css";
import { Container, Stack, Paper, TextField, Button, InputAdornment } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import { useState } from "react";
import React from "react";

export default function ResetPasswordForm() {
  // manage state for input fields
  const [email, setEmail] = useState("");

  // mamange state for input error
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // set both inputs false so red outline goes away
    setEmailError(false);

    if (email === "") {
      setEmailError(true);
    }

    // do something if email and password
    if (email) {
      console.log(email);
    }
  };

  return (
    <Container>
      <Paper elevation={3} className="form-box">
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Stack alignItems="center">
            <h2>Reset your password</h2>
          </Stack>
          <h3>
            Enter the email address associated with your account to reset your
            password.
          </h3>

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
            />
          </div>
          <Stack alignItems="center">
            <Button
              type="submit"
              variant="contained"
              size="large"
              className="form-button"
            >
              Continue
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>

  );
}
