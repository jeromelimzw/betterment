import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import BettermentLogo from "../../assets/betterment_logo_text.png";

const styles = () => ({
  root: {
    color: "navy",
    // backgroundColor: "#dddddd",
    background: "url(https://i.ytimg.com/vi/SMkU5shoDws/maxresdefault.jpg)",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflowY: "hidden"
  },

  formBox: {
    // filter: "blur(1px)",
    backgroundColor: "rgba(255,255,255,0.15)",
    boxShadow: "0 0 5px 10px rgba(255,255,255,0.15)",
    marginTop: "20vh",
    paddingTop: "0%",
    // paddingBottom: "1%",
    textAlign: "center",
    display: "flex",
    flexDirection: "column"
  },
  inputField: {
    width: "80%",
    marginLeft: "2em",
    marginBottom: "1em"
  },
  createAccount: {
    color: "purple",
    textDecoration: "underline",
    cursor: "pointer",
    marginTop: "1em"
  }
});

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "admin",
      pwd: "password",
      username: null,
      password: null
    };
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleValidation = () => {
    const { user, pwd, username, password } = this.state;
    if (user === username && pwd === password) {
      return true;
    }
    return false;
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <form className={classes.formBox}>
          <img src={BettermentLogo} width="300" alt="icon" />
          <TextField
            autoComplete="off"
            id="username"
            label="Username"
            margin="dense"
            className={classes.inputField}
            variant="outlined"
            onChange={this.handleChange}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            margin="dense"
            className={classes.inputField}
            variant="outlined"
            onChange={this.handleChange}
          />
          <Button
            onClick={() => {
              if (this.handleValidation()) {
                this.props.history.push("/dashboard");
              }
            }}
          >
            Login
          </Button>
          <small>
            Not registered?{" "}
            <span className={classes.createAccount}>Create an account</span>
          </small>
        </form>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(LoginPage));
