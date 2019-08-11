import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "../HomePage";
import PromotionsPage from "../PromotionsPage";
import AddNewGoalPage from "../AddNewGoalPage";
import GoalPage from "../GoalPage";

const NavBarRouter = () => {
  return (
    <Switch>
      <Route path="/dashboard/home" component={HomePage} />
      <Route path="/dashboard/add_new_goal" component={AddNewGoalPage} />
      <Route path="/dashboard/promotion" component={PromotionsPage} />
      <Route path="/dashboard/goal" component={GoalPage} />
      <Redirect exact from="/dashboard" to="/dashboard/home" />
    </Switch>
  );
};

export default NavBarRouter;
