import React from "react";
import NavBar from "../../components/NavBar";
import NavBarRouter from "../NavBarRouter";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import PowerIcon from "@material-ui/icons/PowerSettingsNew";
import FolderIcon from "@material-ui/icons/FolderOpen";
import GiftIcon from "@material-ui/icons/CardGiftcard";
import AddIcon from "@material-ui/icons/Add";
import SettingsIcon from "@material-ui/icons/Settings";
import WheelChairIcon from "@material-ui/icons/AccessibleForward";
import PlaneIcon from "@material-ui/icons/AirplanemodeActive";
import { withRouter } from "react-router-dom";
import MoneyIcon from "@material-ui/icons/AttachMoney";
import GraduateIcon from "@material-ui/icons/School";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    display: "flex",
    backgroundColor: "rgb(243,244,248)",
    height: "100%",
    minHeight: 1000
  }
}));

function App(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar
        navRouter={<NavBarRouter />}
        topNav={[
          { label: "Home", route: "dashboard/home", icon: <HomeIcon /> },
          {
            label: "Retirement",
            route: "dashboard/goal",
            icon: <WheelChairIcon />
          },
          {
            label: "Build wealth",
            route: "dashboard/goal",
            icon: <MoneyIcon />
          },
          { label: "Vacation", route: "dashboard/goal", icon: <PlaneIcon /> },
          {
            label: "Education",
            route: "dashboard/goal",
            icon: <GraduateIcon />
          },
          {
            label: "Add new",
            route: "dashboard/add_new_goal",
            icon: <AddIcon />
          }
        ]}
        bottomNav={[
          {
            label: "Get 1 Year Free",
            route: "dashboard/promotion",
            icon: <GiftIcon />
          },
          {
            label: "Documents",
            route: "dashboard/documents",
            icon: <FolderIcon />
          },
          {
            label: "Settings",
            route: "dashboard/settings",
            icon: <SettingsIcon />
          },
          { label: "Sign Out", route: "login", icon: <PowerIcon /> }
        ]}
      />
    </div>
  );
}

export default withRouter(App);
