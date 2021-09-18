import React, { useState } from "react";
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

const drawerWidth = 180;

const SubSidebar = (props) => {
  const [state, setstate] = useState(true);

  console.log(state)

  return (
    <>
      {props.list ? (
        <>
          <Drawer
            open={state}
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
            <Box sx={{ overflow: "auto" }} style={{ marginTop: "5%" }}>
              <List>
                {props.list.sub_list.map((text, index) => (
                  <>
                    {props.list.sub_list ? (
                      <>
                        <ListItem
                          button
                          key={text}
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
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                ))}

                {/*  */}
                <ListItem
                  onClick={() => {
                    setstate(false);
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
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default SubSidebar;
