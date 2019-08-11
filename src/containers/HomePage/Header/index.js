import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

const styles = () => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: "80vw",
    color: "rgb(48,54,61)",
    marginBottom: "2em"
  },
  select: {
    width: 200,
    height: "2em",
    border: "rgb(57,133,239) solid 3px",
    color: "rgb(57,133,239)",
    fontSize: 15,
    fontWeight: "bold",
    paddingLeft: 12
  },
  button: {
    height: "2em",
    backgroundColor: "rgb(33,121,239)",
    color: "#ffffff",
    paddingTop: 4,
    width: 100,
    marginLeft: "1em",
    fontSize: 15,
    fontWeight: "bold",
    cursor: "pointer"
  },
  greeting: {
    fontSize: 40
  },
  spacer: {
    flexGrow: 0.75
  }
});

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleDeposit = event => {
    event.preventDefault();
  };
  render() {
    const { classes } = this.props;
    const { handleDeposit } = this;
    return (
      <div className={classes.root}>
        <h2 className={classes.greeting}>Hello, Emily</h2>
        <div className={classes.spacer} />
        <form className={classes.buttonContainer}>
          <select className={classes.select}>
            <option value="" disabled selected hidden>
              Transfer or rollover
            </option>
            <option>Transfer</option>
            <option>Rollover</option>
          </select>
          <button className={classes.button} onClick={handleDeposit}>
            Deposit
          </button>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
