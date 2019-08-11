import React from "react";
import { withStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import * as Avatar from "../../../../../../components/Avatar";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const CustomPaper = withStyles({
  root: {
    height: "9em",
    paddingLeft: "1em",
    marginBottom: "1em",
    marginRight: "1em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "0 0 0 0",
    "&:hover": {
      boxShadow: "5px 5px 0px 0px #dddddd",
      cursor: "pointer",
      transform: "scale(1.03)",
      transition: "all 0.5s "
    }
  }
})(Paper);

const styles = () => ({
  topHalf: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  titleBlock: {
    marginLeft: "1em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  avatarWithTitle: {
    display: "flex",
    alignItems: "center"
  },
  cashBlock: {
    marginRight: "3em"
  },
  moneyWithChevron: {
    display: "flex",
    alignItems: "center",
    marginRight: "1em"
  },
  bottomHalf: {
    display: "flex",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10
  }
});

const Goal = props => {
  const { classes } = props;
  return (
    <CustomPaper>
      <div className={classes.topHalf}>
        <div className={classes.avatarWithTitle}>
          {Avatar.FolderAvatar()}
          <div className={classes.titleBlock}>
            <h3>
              Retirement
              <br />
              <small>On Track</small>
            </h3>
          </div>
        </div>
        <div className={classes.moneyWithChevron}>
          <div className={classes.cashBlock}>
            <h3>
              $152,367.99
              <br />
              <small>Betterment:$1,000.34</small>
            </h3>
          </div>
          <ChevronRightIcon fontSize="large" />
        </div>
      </div>
      <div>
        <Divider />

        <h5 className={classes.bottomHalf}>
          <ChevronRightIcon /> 1 Betterment Account, 1 External Account
        </h5>
      </div>
    </CustomPaper>
  );
};

export default withStyles(styles)(Goal);
