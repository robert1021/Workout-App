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

export default function DrawerLeft() {
  const iconStyle = {
    color: "white",
    marginLeft: "auto",
  };

  const [openDrawerLeft, setOpenDrawerLeft] = useState(false);

  return (
    <>
      <Drawer open={openDrawerLeft} onClose={() => setOpenDrawerLeft(false)}>
        <List>
          <ListItemButton onClick={() => setOpenDrawerLeft(false)}>
            <ListItemIcon>
              <ListItemText>Log In</ListItemText>
            </ListItemIcon>
          </ListItemButton>

          <ListItemButton onClick={() => setOpenDrawerLeft(false)}>
            <ListItemIcon>
              <ListItemText>Sign Up</ListItemText>
            </ListItemIcon>
          </ListItemButton>

          <ListItemButton onClick={() => setOpenDrawerLeft(false)}>
            <ListItemIcon>
              <ListItemText>Contact</ListItemText>
            </ListItemIcon>
          </ListItemButton>

          <ListItemButton onClick={() => setOpenDrawerLeft(false)}>
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
