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
      color: "#000000",
    },
  }));
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        className={classes.appBar}
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        style={{ backgroundColor: "#ffffff" }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
