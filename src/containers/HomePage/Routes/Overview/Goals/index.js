import React from "react";
import Goal from "./Goal";
import { withStyles } from "@material-ui/core";

const styles = () => ({ root: {} });

const Goals = () => {
  return (
    <div>
      <h2>Goals</h2>
      <Goal
        details={{
          title: "Retirement",
          isOnTrack: true,
          accounts: { local: 1, external: 2 },
          amounts: { local: 100000, total: 9000000 }
        }}
      />
      <Goal />
      <Goal />
    </div>
  );
};

export default withStyles(styles)(Goals);
