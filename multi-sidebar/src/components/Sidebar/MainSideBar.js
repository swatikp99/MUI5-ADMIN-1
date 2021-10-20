import React, { useState, useEffect } from "react";
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

import SubSidebar from "./SubSidebar";

const drawerWidth = 110;
const MainSideBar = () => {
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

  const [listIndex, setlistIndex] = useState(0);
  const [openSubSideBar, setOpenSubSideBar] = useState(false);

  console.log(listIndex.name);

  useEffect(() => {}, [listIndex, openSubSideBar]);

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
              {[
                {
                  name: "A",
                  sub_list: [
                    { name: "A 1" },
                    { name: "A 2" },
                    { name: "A 3" },
                    { name: "A 4" },
                    { name: "A 5" },
                    { name: "A 6" },
                    { name: "A 7" },
                    { name: "A 8" },
                  ],
                },
                {
                  name: "B",
                  sub_list: [
                    { name: "B 1" },
                    { name: "B 2" },
                    { name: "B 3" },
                    { name: "B 4" },
                    { name: "B 5" },
                    { name: "B 6" },
                    { name: "B 7" },
                    { name: "B 8" },
                    { name: "B 9" },
                  ],
                },
                {
                  name: "C",
                  sub_list: [
                    { name: "C 1" },
                    { name: "C 2" },
                    { name: "C 3" },
                    { name: "C 4" },
                    { name: "C 5" },
                    { name: "C 6" },
                    { name: "C 7" },
                    { name: "C 8" },
                    { name: "C 9" },
                  ],
                },
                {
                  name: "D",
                  sub_list: [
                    { name: "D 1" },
                    { name: "D 2" },
                    { name: "D 3" },
                    { name: "D 4" },
                    { name: "D 5" },
                    { name: "D 6" },
                    { name: "D 7" },
                    { name: "D 8" },
                    { name: "D 9" },
                  ],
                },
                {
                  name: "E",
                  sub_list: [
                    { name: "E 1" },
                    { name: "E 2" },
                    { name: "E 3" },
                    { name: "E 4" },
                    { name: "E 5" },
                    { name: "E 6" },
                  ],
                },
                {
                  name: "F",
                  sub_list: [
                    { name: "F 1" },
                    { name: "F 2" },
                    { name: "F 3" },
                    { name: "F 4" },
                    { name: "F 5" },
                    { name: "F 6" },
                    { name: "F 7" },
                    { name: "F 8" },
                    { name: "F 9" },
                  ],
                },
                {
                  name: "G",
                  sub_list: [
                    { name: "G 1" },
                    { name: "G 2" },
                    { name: "G 3" },
                    { name: "G 4" },
                    { name: "G 5" },
                    { name: "G 6" },
                    { name: "G 7" },
                    { name: "G 8" },
                    { name: "G 9" },
                  ],
                },
                {
                  name: "H",
                  sub_list: [
                    { name: "H 1" },
                    { name: "H 2" },
                    { name: "H 3" },
                    { name: "H 4" },
                    { name: "H 5" },
                    { name: "H 6" },
                    { name: "H 7" },
                    { name: "H 8" },
                    { name: "H 9" },
                  ],
                },
              ].map((data, index) => (
                <>
                  <ListItem
                    button
                    key={index}
                    onClick={() => {
                      setlistIndex(data);

                      if (openSubSideBar === false) {
                        setOpenSubSideBar(true);
                      } else if (data.name != listIndex.name) {
                        setOpenSubSideBar(true);
                      } else {
                        setOpenSubSideBar(false);
                      }
                    }}
                    style={{ fontSize: "48px", padding: "1rem" }}
                    className={`${classes.listStyle} ${classes.sideBarIconSyle}`}
                  >
                    <DashboardOutlinedIcon
                      sx={{ color: "primary.main" }}
                      style={{ fontSize: "2rem" }}
                    />
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
                  <Divider />
                </>
              ))}
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

        {/*  */}

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
            rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
            sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
            integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
            eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
            quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
            vivamus at augue. At augue eget arcu dictum varius duis at
            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
          </Typography>
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
            ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
            elementum integer enim neque volutpat ac tincidunt. Ornare
            suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
            volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
            Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
            ornare massa eget egestas purus viverra accumsan in. In hendrerit
            gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
            aliquam sem et tortor. Habitant morbi tristique senectus et.
            Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean
            euismod elementum nisi quis eleifend. Commodo viverra maecenas
            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
            ultrices sagittis orci a.
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default MainSideBar;
