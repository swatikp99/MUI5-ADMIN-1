import React from "react";

// * React Router Dom
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

// * Sidebar Routes
import SidebarRoutes from "../routes/sideBarRoutes";

// * Components
import Header from "../components/Header/Header";
import MainSideBar from "../components/Sidebar/MainSideBar";

// * Pages
import A2 from "../pages/A/A2";
import A3 from "../pages/A/A3";
import A4 from "../pages/A/A4";

import B1 from "../pages/B/B1";
import B2 from "../pages/B/B2";
import B3 from "../pages/B/B3";
import B4 from "../pages/B/B4";

const AdminLayout = (props) => {
  return (
    <BrowserRouter>
      <Header />
      <MainSideBar {...props} routes={SidebarRoutes} />

      <Switch>
        <Route path="/a/a2" component={A2} />
        <Route path="/a/a3" component={A3} />
        <Route path="/a/a4" component={A4} />

        {SidebarRoutes.map((prop, key) => {
          if (prop.redirect) {
            return <Redirect from={prop.path} to={prop.pathTo} key={key} />;
          } else {
            return (
              <Route path={prop.path} component={prop.component} key={key} />
            );
          }
        })}
      </Switch>
    </BrowserRouter>
  );
};

export default AdminLayout;
