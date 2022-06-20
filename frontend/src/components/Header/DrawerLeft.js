import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function DrawerLeft() {
  const iconStyle = {
    color: "white",
    marginLeft: "auto",
  };

  const drawerStyle = {
    width: "40%"
  }

  const [openDrawerLeft, setOpenDrawerLeft] = useState(false);

  return (
    <>
      <Drawer open={openDrawerLeft} onClose={() => setOpenDrawerLeft(false)} PaperProps={{sx: drawerStyle}}>
        <List>
          <ListItemButton onClick={() => setOpenDrawerLeft(false)} component={Link} to="/login">
            <ListItemIcon>
              <ListItemText>Log In</ListItemText>
            </ListItemIcon>
          </ListItemButton>

          <ListItemButton onClick={() => setOpenDrawerLeft(false)} component={Link} to="/signup">
            <ListItemIcon>
              <ListItemText>Sign Up</ListItemText>
            </ListItemIcon>
          </ListItemButton>

          <ListItemButton onClick={() => setOpenDrawerLeft(false)} component={Link} to="/contact">
            <ListItemIcon>
              <ListItemText>Contact</ListItemText>
            </ListItemIcon>
          </ListItemButton>

          <ListItemButton onClick={() => setOpenDrawerLeft(false)} component={Link} to="/about">
            <ListItemIcon>
              <ListItemText>About</ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        sx={iconStyle}
        onClick={() => setOpenDrawerLeft(!openDrawerLeft)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}
