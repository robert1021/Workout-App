import {
  AppBar,
  Tabs,
  Tab,
  Toolbar,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DrawerLeft from "./DrawerLeft";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const headerStyle = {
    background: "#333",
  };

  const logoStyle = {
    textDecoration: "none",
    color: "white"
  }

  const tabsStyle = {
    marginLeft: "25px",
  };

  const tabStyle = {
    color: "#FFFFFF",
  };

  const logInButtonStyle = {
    marginLeft: "auto",
  };

  const SignUpButtonStyle = {
    marginLeft: "10px",
  };

  // manage state for tabs
  const [value, setValue] = useState(false);

  const theme = useTheme();
  // check if screen is small size
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <AppBar sx={headerStyle}>
        <Toolbar>
          <Typography 
            sx={logoStyle}
            variant="h4"
            component={Link} to="/"
            onClick={() => setValue(false)}>
            Workout App
          </Typography>
          <FitnessCenterIcon />

          {isSmallScreen ? (
            <DrawerLeft />
          ) : (
            <>
              <Tabs
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="primary"
                sx={tabsStyle}
              >
                <Tab
                  label="Contact"
                  sx={tabStyle}
                  component={Link}
                  to="/contact"
                />
                <Tab label="About" sx={tabStyle} component={Link} to="/about" />
              </Tabs>

              <Button sx={logInButtonStyle} variant="contained" component={Link} to="/login" onClick={() => setValue(false)}>
                Log In
              </Button>
              <Button sx={SignUpButtonStyle} variant="contained" component={Link} to="/signup" onClick={() => setValue(false)}>
                Sign Up
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
