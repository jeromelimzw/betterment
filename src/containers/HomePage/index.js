import React, { Component } from "react";
import Header from "./Header";
import CustomTabs from "./CustomTabs";
import { withStyles } from "@material-ui/core";
import HomePageRouter from "./HomePageRouter";

const styles = () => ({
  header: {
    backgroundColor: "white",
    padding: "10em 5em 0em 8em",
    margin: "-10em -5em 0em 0em"
  },
  content: {
    paddingLeft: "8em",
    marginLeft: "0em"
  }
});

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.header}>
          <Header />
          <CustomTabs />
        </div>
        <div className={classes.content}>
          <HomePageRouter />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);
