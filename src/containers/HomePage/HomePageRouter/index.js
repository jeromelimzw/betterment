import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Overview from "../Routes/Overview";
import Performance from "../Routes/Performance";
import Activity from "../Routes/Activity";
import Holdings from "../Routes/Holdings";

const HomePageRouter = () => {
  return (
    <Switch>
      <Route path="/dashboard/home/overview" component={Overview} />
      <Route path="/dashboard/home/holdings" component={Holdings} />
      <Route path="/dashboard/home/activity" component={Activity} />
      <Route path="/dashboard/home/performance" component={Performance} />
      <Redirect exact from="/dashboard/home" to="/dashboard/home/overview" />
    </Switch>
  );
};

export default HomePageRouter;
