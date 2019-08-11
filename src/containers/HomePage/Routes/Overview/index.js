import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Goals from "./Goals";

const styles = () => ({
  root: {}
});

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Goals />
      </div>
    );
  }
}

export default withStyles(styles)(Overview);
