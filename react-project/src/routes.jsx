import React from "react";
import { Route, Switch } from "react-router-dom";

// eslint-disable-next-line import/extensions
import Index from "./views/Index/Index.jsx";
import About from "./views/About/About";
import ManagePost from "./views/ManagePost/ManagePost";

function Routes() {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/create-post">
        <ManagePost isInCreateMode />
      </Route>
      <Route path="/">
        <Index />
      </Route>
    </Switch>
  );
}

export default Routes;
