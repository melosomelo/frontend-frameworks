import React from "react";
import { Route, Switch } from "react-router-dom";

import Index from "./views/Index/Index";

function Routes() {
  return (
    <Switch>
      <Route to="/" exact>
        <Index />
      </Route>
    </Switch>
  );
}

export default Routes;
