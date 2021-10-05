// * Admin Views
import Dashboard from "../pages/Dashboard/Dashboard";
import Category from "../pages/Category/Category";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Design from "../pages/Design/Design";
import Settings from "../pages/Settings/Settings";
import Stats from "../pages/Stats/Stats";

// * ICONS

import MenuSvg from "./icons/menu.svg";
import CategorySvg from "./icons/category.svg";
import DashboardSvg from "./icons/dashboard.svg";
import OrderSvg from "./icons/order.svg";
import SettingsSvg from "./icons/settings.svg";
import StatsSvg from "./icons/stats.svg";
import DesignSvg from "./icons/design.svg";

// * icon Color

// const iconColor = "primary.main";
const iconColor = "#162B32";
const iconSize = "2rem";

var SidebarRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <img src={DashboardSvg} loading="lazy" width="50" />,
    component: Dashboard,
  },
  {
    path: "/category",
    name: "Category",
    icon: <img src={CategorySvg} loading="lazy" width="50" />,
    component: Category,
  },
  {
    path: "/menu",
    name: "Menu",
    icon: <img src={MenuSvg} loading="lazy" width="50" />,
    component: Menu,
  },
  {
    path: "/order",
    name: "Order",
    icon: <img src={OrderSvg} loading="lazy" width="50" />,
    component: Order,
  },
  {
    path: "/design",
    name: "Design",
    icon: <img src={DesignSvg} loading="lazy" width="50" />,
    component: Design,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <img src={SettingsSvg} loading="lazy" width="50" />,
    component: Settings,
  },
  {
    path: "/stats",
    name: "Stats",
    icon: <img src={StatsSvg} loading="lazy" width="50" />,
    component: Stats,
  },
  { path: "/", pathTo: "/dashboard", name: "", redirect: true },
];
export default SidebarRoutes;
