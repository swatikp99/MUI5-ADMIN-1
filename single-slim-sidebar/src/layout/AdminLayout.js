import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

import SidebarRoutes from "../routes/sidebarRoutes";

import Header from "../components/Header/Header";
import MainSideBar from "../components/Sidebar/MainSideBar";

// * Pages Routes
import AddMenu from "../pages/Menu/AddMenu";

const AdminLayout = (props) => {
  return (
    <BrowserRouter>
      <Header />
      <MainSideBar {...props} routes={SidebarRoutes} />

      <Switch>
        <Route path="/menu/add" component={AddMenu} />

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
