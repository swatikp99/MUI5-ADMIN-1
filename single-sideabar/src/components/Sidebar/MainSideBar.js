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

// * ICONS

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import RestaurantMenuOutlinedIcon from "@mui/icons-material/RestaurantMenuOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import StreetviewOutlinedIcon from "@mui/icons-material/StreetviewOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";

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

  useEffect(() => {}, [listIndex]);

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
                  name: "DASHBOARD",
                  icon: (
                    <DashboardOutlinedIcon
                      sx={{ color: "primary.main" }}
                      style={{ fontSize: "2rem" }}
                    />
                  ),
                },
                {
                  name: "CATEGORY",
                  icon: (
                    <FormatListBulletedOutlinedIcon
                      sx={{ color: "primary.main" }}
                      style={{ fontSize: "2rem" }}
                    />
                  ),
                },
                {
                  name: "MENU",
                  icon: (
                    <RestaurantMenuOutlinedIcon
                      sx={{ color: "primary.main" }}
                      style={{ fontSize: "2rem" }}
                    />
                  ),
                },
                {
                  name: "ORDERS",
                  icon: (
                    <NotificationsActiveOutlinedIcon
                      sx={{ color: "primary.main" }}
                      style={{ fontSize: "2rem" }}
                    />
                  ),
                },
                {
                  name: "DESIGN",
                  icon: (
                    <StreetviewOutlinedIcon
                      sx={{ color: "primary.main" }}
                      style={{ fontSize: "2rem" }}
                    />
                  ),
                },
                {
                  name: "SETTINGS",
                  icon: (
                    <SettingsOutlinedIcon
                      sx={{ color: "primary.main" }}
                      style={{ fontSize: "2rem" }}
                    />
                  ),
                },
                {
                  name: "STATS",
                  icon: (
                    <PieChartOutlineOutlinedIcon
                      sx={{ color: "primary.main" }}
                      style={{ fontSize: "2rem" }}
                    />
                  ),
                },
              ].map((data, index) => (
                <>
                  <ListItem
                    button
                    key={index}
                    onClick={() => {
                      setlistIndex(data);
                    }}
                    style={{ fontSize: "48px", padding: "1rem" }}
                    className={`${classes.listStyle} ${classes.sideBarIconSyle}`}
                  >
                    {/* ICONS */}
                    {data.icon}
                    {/* ICONS */}

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "0 10px",
                      }}
                    >
                      <b style={{ fontSize: "12px", paddingTop: "10%" }}>
                        {data.name}
                      </b>
                    </div>
                  </ListItem>
                  <Divider />
                </>
              ))}
            </List>
          </Box>
        </Drawer>
        {/* DRAWER */}

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
