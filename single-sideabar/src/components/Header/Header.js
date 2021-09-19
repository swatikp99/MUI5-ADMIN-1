import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { makeStyles } from "@mui/styles";

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
        <Toolbar>
          <Typography sx={{ mx: 4 }} variant="h6" noWrap component="div">
            ADMIN
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
