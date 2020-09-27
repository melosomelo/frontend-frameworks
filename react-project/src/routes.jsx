import React from "react";
import { Route, Switch } from "react-router-dom";

// eslint-disable-next-line import/extensions
import Index from "./views/Index/Index.jsx";
import About from "./views/About/About";

function Routes() {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/">
        <Index />
      </Route>
    </Switch>
  );
}

export default Routes;
