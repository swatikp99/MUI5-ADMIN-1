import React, { useState, useEffect } from "react";

// * Mui
import { makeStyles } from "@mui/styles";
import Header from "../../components/Header/Header";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
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
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";

// * React router dom
import { NavLink, useLocation } from "react-router-dom";

// * Components
import SubSidebar from "./SubSidebar";

const drawerWidth = 110;
const MainSideBar = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    sideBarIconSyle: {
      fontSize: "32px",
      padding: "2rem 0",
      cursor: "pointer",
    },
    listStyle: {
      borderTop: "5px solid white",
      borderRight: "5px solid white",
      borderLeft: "5px solid white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "48px",
    },
  }));

  const classes = useStyles();

  const [listIndex, setlistIndex] = useState(0);
  const [openSubSideBar, setOpenSubSideBar] = useState(false);
  const [openOrCLoseDrawer, setOpenOrCLoseDrawer] = useState("permanent");

  useEffect(() => {}, [listIndex, openSubSideBar]);

  const location = useLocation();

  console.log("Location path => ", location.pathname);

  const firstPath = location.pathname.split("/")[1];

  console.log("NEW PATH +> ", firstPath);

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {/* HEADER */}
        <Header />
        {/* HEADER */}

        {/* DRAWER */}
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              zIndex: "999",
              boxShadow: "0px 7px 29px 0px rgba(100, 100, 111, 0.2)",
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
              {props.routes.map((data, index) => (
                <div key={data.name}>
                  <NavLink to={data.path} style={{ textDecoration: "none" }}>
                    <ListItem
                      button
                      onClick={() => {
                        setlistIndex(data);
                        if (openSubSideBar === false) {
                          setOpenSubSideBar(true);
                        } else if (data.name !== listIndex.name) {
                          setOpenSubSideBar(true);
                        } else {
                          setOpenSubSideBar(false);
                        }
                      }}
                      style={{
                        fontSize: "48px",
                        padding: "1rem",
                        backgroundColor: "#fffcdb",
                        // marginBottom: "5px",
                      }}
                      className={`${classes.listStyle} ${classes.sideBarIconSyle}`}
                    >
                      {/* ICONS */}
                      {data.icon}
                      {/* ===== */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          padding: "0 10px",
                        }}
                      >
                        <span style={{ fontSize: "15px" }}>{data.name}</span>
                      </div>
                    </ListItem>
                  </NavLink>

                  {/* <Divider /> */}
                </div>
              ))}
              <Button
                onClick={() => {
                  if (openOrCLoseDrawer === "permanent") {
                    setOpenOrCLoseDrawer("permanent");
                  } else {
                    setOpenOrCLoseDrawer("permanent");
                  }
                }}
              >
                <ListItem>CLOSE</ListItem>
              </Button>
            </List>
          </Box>
        </Drawer>
        {/* DRAWER */}

        {/*  */}
        {openSubSideBar && (
          <SubSidebar
            list={listIndex}
            openSideBar={openSubSideBar}
            openCloseBar={() => setOpenSubSideBar(false)}
          />
        )}
      </Box>
    </div>
  );
};

export default MainSideBar;
