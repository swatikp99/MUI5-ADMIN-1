import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

import UserAccountMenu from "./UserAccountMenu";

import FontDownloadOutlinedIcon from "@mui/icons-material/FontDownloadOutlined";

const Header = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      backgroundColor: "white",
    },
    appBar: {
      padding: "0",
      backgroundColor: "#ffffff",
    },
  }));
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1, boxShadow: 0 }}>
      <AppBar
        className={classes.appBar}
        position="fixed"
        style={{
          color: "#000000",
          backgroundColor: "#ffffff",
        }}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          boxShadow: 1,
        }}
      >
        <Toolbar sx={{ mx: 4 }}>
          <FontDownloadOutlinedIcon
            style={{ fontSize: "3rem", marginTop: "0", color: "blue" }}
          />
          <Typography
            variant="h6"
            style={{ fontSize: "1rem", color: "#404040" }}
          >
            <strong>DMIN</strong>
          </Typography>
          <UserAccountMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
