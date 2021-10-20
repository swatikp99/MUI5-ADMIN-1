import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Header from "../Header/Header";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

// * React router dom
import { NavLink } from "react-router-dom";

const drawerWidth = 180;

const SubSidebar = (props) => {
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
      fontSize: "48px",
    },
    listStyleActive: {
      display: "flex",
      background: "#e6e6e6",
    },
  }));

  const classes = useStyles();

  useEffect(() => {}, [props]);

  return (
    <>
      {props.list ? (
        <div>
          <Drawer
            open={props.openSideBar}
            variant="persistent"
            key={props.name}
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                boxSizing: "border-box",
                marginLeft: "110px",
                zIndex: "999",
              },
            }}
          >
            <Toolbar />
            <Box sx={{ overflow: "auto" }} style={{ marginTop: "1%" }}>
              <List>
                {props.list.sub_list.map((text, index) => (
                  <>
                    {props.list.sub_list ? (
                      <div key={text.name}>
                        <NavLink
                          to={text.path}
                          style={{ textDecoration: "none" }}
                          activeClassName={classes.listStyleActive}
                        >
                          <ListItem
                            button
                            sy={{ boxShadow: 2 }}
                            style={{ fontSize: "48px" }}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                padding: "0 0.3rem",
                              }}
                            >
                              <ListItemIcon>
                                <MailIcon />
                              </ListItemIcon>
                              <ListItemText style={{ fontSize: "10px" }}>
                                {text.name}
                              </ListItemText>
                            </div>
                          </ListItem>
                        </NavLink>
                      </div>
                    ) : (
                      <></>
                    )}
                  </>
                ))}

                {/*  */}
                <ListItem
                  onClick={() => {
                    props.openCloseBar();
                  }}
                  button
                  sy={{ boxShadow: 2 }}
                  style={{ fontSize: "48px" }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "0 0.3rem",
                    }}
                  >
                    <ListItemIcon>
                      <MailIcon />
                    </ListItemIcon>
                    <ListItemText>CLOSE</ListItemText>
                  </div>
                </ListItem>
                {/*  */}
              </List>
            </Box>
          </Drawer>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default SubSidebar;
