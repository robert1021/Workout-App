import { AppBar, Tabs, Tab, Toolbar, Typography, Button } from "@mui/material";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

export default function Header() {

    const headerStyle = {
        background: '#333'
    }


  return (
    <>
      <AppBar sx={headerStyle}>
        <Toolbar>
            <h2>Workout App</h2>
            <FitnessCenterIcon />

            <Tabs>
                <Tab label="Contact Us"/>
                <Tab label="About Us"/>



            </Tabs>

            <Button variant="contained">Log In</Button>
            <Button variant="contained">Sign Up</Button>



        </Toolbar>
      </AppBar>
    </>
  );
}
