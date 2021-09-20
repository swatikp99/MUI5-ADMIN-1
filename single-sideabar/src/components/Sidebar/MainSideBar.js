import React from "react";

import { NavLink, useLocation } from "react-router-dom";

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
    listStyle: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "48px",
    },
    listStyleActive: {
      display: "flex",
      background: "#d4dbff",
    },
  }));
  const classes = useStyles();

  const location = useLocation();

  console.log(location.pathname);

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
          >
            <List>
              {props.routes.map((prop, index) => (
                <NavLink
                  to={prop.path}
                  style={{ textDecoration: "none" }}
                  key={index}
                  activeClassName={classes.listStyleActive}
                >
                  <ListItem
                    button
                    key={index}
                    style={{
                      padding: "1rem",
                    }}
                    className={classes.listStyle}
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
