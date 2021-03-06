import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "../Landing-page/Landing";
import NotFound from "../NotFound/NotFound";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import EmployeeDashboard from "../Employee-page/Container/EmployeeDashboard";
import AdminDashboard from "../Admin-page/Container/AdminDashboard";
import StandardLayout from "../Layout/StandardLayout";
import HomeLayout from "../Layout/HomeLayout";
import Feedback from "../Feedback-page/Container/Feedback";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";

//This will pass layout prop to routes in order to render different layout for different pages
const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

const Routes = () => {
  return (
    <Switch>
      <AppRoute exact path="/" layout={HomeLayout} component={Landing} />
      <AppRoute path="/login" layout={StandardLayout} component={Login} />
      <AppRoute path="/register" layout={StandardLayout} component={Register} />
      <AdminRoute
        path="/dashboard"
        layout={StandardLayout}
        component={AdminDashboard}
      />
      <PrivateRoute
        exact
        path="/review"
        layout={StandardLayout}
        component={EmployeeDashboard}
      />
      <PrivateRoute
        exact
        path="/review/:id"
        layout={StandardLayout}
        component={Feedback}
      />
      <AppRoute layout={StandardLayout} component={NotFound} />
    </Switch>
  );
};

export default Routes;
