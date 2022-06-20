import {
  AppBar,
  Tabs,
  Tab,
  Toolbar,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DrawerLeft from "./DrawerLeft";
import { useState } from "react";

export default function Header() {
  const headerStyle = {
    background: "#333",
  };

  const tabsStyle = {
    marginLeft: '25px'
  }

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
  const [value, setValue] = useState();

  const theme = useTheme();
  // check if screen is small size
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <AppBar sx={headerStyle}>
        <Toolbar>
          <h2>Workout App</h2>
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
                <Tab label="Contact" sx={tabStyle} />
                <Tab label="About" sx={tabStyle} />
              </Tabs>

              <Button sx={logInButtonStyle} variant="contained">
                Log In
              </Button>
              <Button sx={SignUpButtonStyle} variant="contained">
                Sign Up
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
