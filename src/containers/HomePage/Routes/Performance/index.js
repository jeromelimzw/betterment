import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

const styles = () => ({
  root: {}
});

class Performance extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <h1>This is the Performance Page</h1>;
  }
}

export default withStyles(styles)(Performance);
