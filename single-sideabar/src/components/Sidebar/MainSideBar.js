import React from "react";

import { NavLink } from "react-router-dom";

import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";

const drawerWidth = 110;
const MainSideBar = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      backgroundColor: "white",
    },
    sideBarIconSyle: {
      fontSize: "32px",
      padding: "2rem 0",
      cursor: "pointer",
    },
    listStyle: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem 0",
      // padding: 0,
    },
  }));
  const classes = useStyles();

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        {/* DRAWER */}
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box
            sx={{
              overflow: "auto",
              boxShadow: 1,
            }}
            style={{ marginTop: "2%" }}
          >
            <List>
              {props.routes.map((prop, index) => (
                <NavLink to={prop.path} style={{ textDecoration: 'none' }}>
                  <ListItem
                    button
                    key={index}
                    style={{ fontSize: "48px", padding: "1rem" }}
                    className={`${classes.listStyle} ${classes.sideBarIconSyle}`}
                  >
                    {/* ICONS */}
                    {prop.icon}
                    {/* ICONS */}

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "0 10px",
                      }}
                    >
                      <b
                        style={{
                          fontSize: "12px",
                          paddingTop: "10%",
                          color: "#404040",
                        }}
                      >
                        {prop.name}
                      </b>
                    </div>
                  </ListItem>
                  <Divider />
                </NavLink>
              ))}
            </List>
          </Box>
        </Drawer>
        {/* DRAWER */}
      </Box>
    </div>
  );
};

export default MainSideBar;
