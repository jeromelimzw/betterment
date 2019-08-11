import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { green, pink } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";
import FolderIcon from "@material-ui/icons/Folder";
import PageviewIcon from "@material-ui/icons/Pageview";
import AssignmentIcon from "@material-ui/icons/Assignment";

const useStyles = makeStyles({
  avatar: {
    margin: 10,
    width: 40,
    height: 40
  },
  pinkAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: pink[500],
    width: 40,
    height: 40
  },
  greenAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: green[500]
  }
});

function FolderAvatar() {
  const classes = useStyles();
  return (
    <Avatar className={classes.avatar}>
      <FolderIcon />
    </Avatar>
  );
}

function PageViewAvatar() {
  const classes = useStyles();
  return (
    <Avatar className={classes.pinkAvatar}>
      <PageviewIcon />
    </Avatar>
  );
}

function AssignmentAvatar() {
  const classes = useStyles();
  return (
    <Avatar className={classes.greenAvatar}>
      <AssignmentIcon />
    </Avatar>
  );
}

export { AssignmentAvatar, FolderAvatar, PageViewAvatar };
