import styled from "@emotion/styled";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  InputBase,
  Badge,
  Avatar,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import MailIcon from "@mui/icons-material/Mail";
import React, { useState } from "react";
import Notifications from "@mui/icons-material/Notifications";
import imgProfile from '../../public/testimonial-2.jpg'

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "#fff",
  width: "40%",
  borderRadius: "3px",
  padding: "0 10px",
}));

const Icons = styled(Box)(({ theme }) => ({
  alignItems: "center",
  gap: "20px",
}));

const UserBox = styled(Box)(({ theme }) => ({
  alignItems: "center",
  gap: "20px",
}));

export default function Navbar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Mui
        </Typography>
        <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search..." fullWidth sx={{color: '#000'}}/>
        </Search>
        <Icons
          sx={{ display: matches ? "flex" : "none" }}
          onClick={() => setOpen(true)}
        >
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: "30px", height: "30px", objectFit: "contain" }}
            src={imgProfile}
          />
        </Icons>
        <UserBox
          sx={{ display: matches ? "none" : "flex" }}
          onClick={() => setOpen(true)}
        >
          <Avatar
            sx={{ width: "30px", height: "30px", objectFit: "contain" }}
            src={imgProfile}
          />
          <Typography variant="span">Muller</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={() => setOpen(false)}>Profile</MenuItem>
        <MenuItem onClick={() => setOpen(false)}>My account</MenuItem>
        <MenuItem onClick={() => setOpen(false)}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}
