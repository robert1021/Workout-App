import { Stack } from "@mui/material";

export default function ResetPasswordForm() {
  return (
    <Stack alignItems="center" className="box">
      <form>
        <h2>Reset your password</h2>
        <p>
          Enter the email address associated with your account to reset your
          password.
        </p>

        <div className="form-group">
          <input type="email" name="email" id="email" placeholder="Email" />
        </div>

        <input type="submit" value={"Continue"} />
      </form>
    </Stack>
  );
}
