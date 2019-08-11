import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

const styles = () => ({
  root: {}
});

class Holdings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <h1>This is the Holdings Page</h1>;
  }
}

export default withStyles(styles)(Holdings);
