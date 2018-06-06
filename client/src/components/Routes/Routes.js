import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "../Layout/Layout";
import Landing from "../Landing-page/Landing";
import NotFound from "../NotFound/NotFound";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import EmployeeDashboard from "../Employee-page/EmployeeDashboard";
import AdminDashboard from "../Admin-page/AdminDashboard";

const Routes = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/adminDashboard" component={AdminDashboard} />
          <Route path="/employeeDashboard" component={EmployeeDashboard} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Layout>
  );
};

export default Routes;
