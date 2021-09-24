import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import UserAccountMenu from "./UserAccountMenu";

import FontDownloadOutlinedIcon from "@mui/icons-material/FontDownloadOutlined";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1  }}>
      <AppBar
        position="fixed"
        style={{
          color: "#F7F7F7",
          backgroundColor: "#ffffff",
          padding: "0.1rem",
        }}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          boxShadow: "6px 0px 11px 0px rgba(179,179,179,1)",
        }}
      >
        <Toolbar sx={{ mx: 4 }}>
          <FontDownloadOutlinedIcon
            style={{ fontSize: "3rem", marginTop: "0", color: "#ef9273" }}
          />
          <Typography
            variant="h6"
            style={{  }}
          >
            <strong
              style={{
                color: "#ef9273",
                fontSize: "1rem"
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
