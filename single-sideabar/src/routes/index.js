// * Admin Views
import Dashboard from "../pages/Dashboard/Dashboard";
import Category from "../pages/Category/Category";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Design from "../pages/Design/Design";
import Settings from "../pages/Settings/Settings";
import Stats from "../pages/Stats/Stats";

// * ICONS

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import RestaurantMenuOutlinedIcon from "@mui/icons-material/RestaurantMenuOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import StreetviewOutlinedIcon from "@mui/icons-material/StreetviewOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";

// * icon Color

const iconColor = "primary.main";
const iconSize = "2rem";

var IndexRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: (
      <DashboardOutlinedIcon
        sx={{ color: iconColor }}
        style={{ fontSize: iconSize }}
      />
    ),
    component: Dashboard,
  },
  {
    path: "/category",
    name: "Category",
    icon: (
      <FormatListBulletedOutlinedIcon
        sx={{ color: iconColor }}
        style={{ fontSize: iconSize }}
      />
    ),
    component: Category,
  },
  {
    path: "/menu",
    name: "Menu",
    icon: (
      <RestaurantMenuOutlinedIcon
        sx={{ color: iconColor }}
        style={{ fontSize: iconSize }}
      />
    ),
    component: Menu,
  },
  {
    path: "/order",
    name: "Order",
    icon: (
      <NotificationsActiveOutlinedIcon
        sx={{ color: iconColor }}
        style={{ fontSize: iconSize }}
      />
    ),
    component: Order,
  },
  {
    path: "/design",
    name: "Design",
    icon: (
      <StreetviewOutlinedIcon
        sx={{ color: iconColor }}
        style={{ fontSize: iconSize }}
      />
    ),
    component: Design,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: (
      <SettingsOutlinedIcon
        sx={{ color: iconColor }}
        style={{ fontSize: iconSize }}
      />
    ),
    component: Settings,
  },
  {
    path: "/stats",
    name: "Stats",
    icon: (
      <PieChartOutlineOutlinedIcon
        sx={{ color: iconColor }}
        style={{ fontSize: iconSize }}
      />
    ),
    component: Stats,
  },
  { path: "/", pathTo: "/dashboard", name: "Dashboard", redirect: true },
];
export default IndexRoutes;
