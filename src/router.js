import React from "react";
import { Switch, Route } from "react-router-dom";
import Feed from "./feed/feed";
import FourOFour from "./general/404";

const Router = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Feed} />
      <Route path="/" component={FourOFour} />
    </Switch>
  </main>
);

export default Router;
