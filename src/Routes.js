import React from "react";
import { Switch } from "react-router-dom";
import RouteWithLayout from "./components/routeWithLayout/RouteWithLayout";
import MainView from "./layout/main/MainView";
import MinimalView from "./layout/minimal/MinimalView";

// imported Screens
import Home from "./views/Home/Home";
import AboutUs from "./views/AboutUs/AboutUs";
import OurServices from "./views/OurServices/OurServices";
import Contact from "./views/Contact/Contact";

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout exact path="/" component={Home} layout={MinimalView} />
      <RouteWithLayout
        exact
        path="/about-us"
        component={AboutUs}
        layout={MinimalView}
      />
      <RouteWithLayout
        exact
        path="/our-services"
        component={OurServices}
        layout={MinimalView}
      />
      <RouteWithLayout
        exact
        path="/contact"
        component={Contact}
        layout={MinimalView}
      />
    </Switch>
  );
};
export default Routes;
