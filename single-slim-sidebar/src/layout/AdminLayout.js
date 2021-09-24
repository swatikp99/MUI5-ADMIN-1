import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

import IndexRoutes from "../routes/index";

import Header from "../components/Header/Header";
import MainSideBar from "../components/Sidebar/MainSideBar";

const AdminLayout = (props) => {
  return (
    <BrowserRouter>
      <Header />
      <MainSideBar {...props} routes={IndexRoutes} />

      <Switch>
        {IndexRoutes.map((prop, key) => {
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
