import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "../LoginPage";
import App from "../App";

const MainRouter = () => {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/dashboard" component={App} />
      <Redirect exact from="/" to="/login" />
    </Switch>
  );
};

export default MainRouter;
