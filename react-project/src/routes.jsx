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
      <Route path="/create-post" exact>
        <ManagePost isInCreateMode />
      </Route>
      <Route path="/edit-post/:id" exact>
        <ManagePost isInCreateMode={false} />
      </Route>
      <Route path="/">
        <Index />
      </Route>
    </Switch>
  );
}

export default Routes;
