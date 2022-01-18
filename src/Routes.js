import React from "react";
import { Switch } from "react-router-dom";
import RouteWithLayout from './components/routeWithLayout/RouteWithLayout';
import MainView from './layout/main/MainView';
import MinimalView from './layout/minimal/MinimalView';

// imported Screens
import OurServices from "./views/OurServices/OurServices";
import AboutUs from "./views/AboutUs/AboutUs";

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout exact path="/" component={OurServices} layout={MinimalView} />
      <RouteWithLayout exact path="/about-us" component={AboutUs} layout={MinimalView} />
    </Switch>
  );
};
export default Routes;
