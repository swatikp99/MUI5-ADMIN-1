import React, { useEffect } from "react";

// * React Router Dom
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

// * Sidebar Routes
import SidebarRoutes from "../routes/sideBarRoutes";
import SidebarRoutesRender from "../routes/sideBarRoutesRender";

// * Components
import Header from "../components/Header/Header";
import MainSideBar from "../components/Sidebar/MainSideBar";

const AdminLayout = (props) => {
  useEffect(() => {}, [SidebarRoutes]);

  return (
    <BrowserRouter>
      <Header />
      <MainSideBar {...props} routes={SidebarRoutes} />

      <Switch>
        {SidebarRoutesRender.map((prop, key) => {
          return (
            <Route path={prop.path} component={prop.component} key={key} />
          );
        })}
        {/* {SidebarRoutes.map((prop, key) => {
          console.log(prop.sub_list);

          return (
            <>
              {prop.sub_list.map((prop2, key) => {
                  console.log(prop2);
                  return (
                    <Route
                      path={prop2.path}
                      component={prop2.component}
                      key={prop2.path}
                      exact
                    />
                  );
                })}
            </>
          );
        })} */}
        {/* <Route path="/a/a2" component={A2} />
        <Route path="/a/a3" component={A3} />
        <Route path="/a/a4" component={A4} /> */}
        {/* {SidebarRoutes.map((prop, key) => {
          if (prop.redirect) {
            return <Redirect from={prop.path} to={prop.pathTo} key={key} />;
          } else {
            return (
              <>
                {prop.sub_list.map((prop2, key) => {
                  console.log(prop2);
                  return (
                    <Route
                      path={prop2.path}
                      component={prop2.component}
                      key={prop2.path}
                    />
                  );
                })}
              </>
              // <Route path={prop.path} component={prop.component} key={key} />
            );
          }
        })} */}
      </Switch>
    </BrowserRouter>
  );
};

export default AdminLayout;
