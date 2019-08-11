import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withStyles } from "@material-ui/core";
import { withRouter } from "react-router-dom";

const SmallTab = withStyles({
  root: { padding: 0, minWidth: 90, textTransform: "none" }
})(Tab);

const SmallTabs = withStyles({
  root: {},
  indicator: {
    backgroundColor: "rgb(53,58,66)"
  }
})(Tabs);

const styles = () => ({
  tabs: {
    textAlign: "left"
  }
});

function CustomTabs(props) {
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  const { history } = props;
  return (
    <SmallTabs
      value={value}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleChange}
    >
      <SmallTab
        label="Overview"
        onClick={() => history.push("/dashboard/home/overview")}
        disableRipple
      />
      <SmallTab
        label="Holdings"
        onClick={() => history.push("/dashboard/home/holdings")}
        disableRipple
      />
      <SmallTab
        label="Activity"
        onClick={() => history.push("/dashboard/home/activity")}
        disableRipple
      />
      <SmallTab
        label="Performance"
        onClick={() => history.push("/dashboard/home/performance")}
        disableRipple
      />
    </SmallTabs>
  );
}

export default withRouter(withStyles(styles)(CustomTabs));
