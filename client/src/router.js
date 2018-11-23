import React from "react";
import { Switch, Route } from "react-router-dom";
import Feed from "./feed/feed";
import Login from "./login/login";
import Signup from "./signup/signup";
import FourOFour from "./general/404";

const Router = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Feed} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route path="/" component={FourOFour} />
    </Switch>
  </main>
);

export default Router;
