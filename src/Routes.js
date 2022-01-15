import React from "react";
import { Switch } from "react-router-dom";
import RouteWithLayout from './components/routeWithLayout/RouteWithLayout';
import MainView from './layout/main/MainView';
import MinimalView from './layout/minimal/MinimalView';

// imported Screens
import Auth from "./views/auth/Auth";
import Dashboard from "./views/dashboard/Dashboard";

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout exact path="/" component={Auth} layout={MinimalView} />
      <RouteWithLayout exact path="/dashboard" component={Dashboard} layout={MainView} />
    </Switch>
  );
};
export default Routes;
