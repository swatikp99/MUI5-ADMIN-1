import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

import UserAccountMenu from "./UserAccountMenu";

import FontDownloadOutlinedIcon from "@mui/icons-material/FontDownloadOutlined";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1, boxShadow: 0 }}>
      <AppBar
        position="fixed"
        style={{
          color: "yellow",
          backgroundColor: "#162B32",
          padding: "0.2rem",
        }}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          boxShadow: 1,
        }}
      >
        <Toolbar sx={{ mx: 4 }}>
          <FontDownloadOutlinedIcon
            style={{ fontSize: "3rem", marginTop: "0", color: "yellow" }}
          />
          <Typography
            variant="h6"
            style={{ fontSize: "1rem", color: "yellow" }}
          >
            <strong
              style={{
                color: "#FFF5AB",
              }}
            >
              DMIN
            </strong>
          </Typography>
          <UserAccountMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
