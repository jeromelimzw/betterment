import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { withRouter } from "react-router-dom";
import LockIcon from "@material-ui/icons/Lock";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import Logo from "@material-ui/icons/FormatBold";

const drawerWidth = 200;
const useStyles = makeStyles(theme => ({
  textLogo: {
    textAlign: "left",
    cursor: "pointer",
    color: "white"
  },
  logo: {
    marginTop: 10,
    fontSize: 50,
    color: "white",
    marginLeft: -10
  },
  root: {
    position: "relative",
    display: "flex",
    backgroundColor: "rgb(243,244,248)",
    height: "100vh",
    overflowX: "hidden"
  },
  drawer: {
    zIndex: 0,
    display: "flex",
    justifyContent: "space-between",
    transition: "width 1.3s",
    backgroundColor: "rgba(48,54,61,0.9)",
    color: "rgb(164,168,175)",
    overflowX: "hidden",
    overflowY: "hidden"
  },

  drawerPaperOpen: {
    width: drawerWidth
  },
  drawerPaperClose: {
    width: drawerWidth * 0.4,
    textAlign: "center"
  },

  drawerHeader: {
    display: "flex",

    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginLeft: drawerWidth * 0.6,
    width: "100vw",
    transition: "margin-left 2.5s",
    overflowX: "hidden"
  },
  contentShift: {
    marginLeft: drawerWidth * 0.1
  },
  icon: {
    color: "rgb(164,168,175)",
    alignText: "center",
    marginLeft: 15
  },
  hide: {
    display: "none"
  },

  largeIcon: {
    fontSize: 30,
    marginLeft: 20,
    transition: "all 2s"
  },
  divider: {
    color: "rgba(164,168,180,0.8)",
    borderWidth: 0.5
  },
  itemText: {
    marginRight: 40
  },
  lockIcon: {
    width: 20,
    cursor: "pointer",
    marginRight: 10,
    marginTop: 10
  },
  selected: {
    backgroundColor: "black",
    "&:hover": {
      backgroundColor: "black"
    }
  }
}));

function NavBar(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [isPinned, setIsPinned] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState("home");
  const { history, navRouter, topNav, bottomNav } = props;
  function togglePin() {
    setIsPinned(!isPinned);
  }
  return (
    <div className={classes.root}>
      <CssBaseline />

      <Drawer
        variant="persistent"
        anchor="left"
        open={true}
        classes={{
          paper: clsx(classes.drawer, {
            [classes.drawerPaperClose]: !open,
            [classes.drawerPaperOpen]: open
          })
        }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => (isPinned ? setOpen(true) : setOpen(false))}
      >
        <div>
          {open ? (
            <React.Fragment>
              <div className={classes.drawerHeader}>
                <h1
                  className={classes.textLogo}
                  onClick={() => history.push("/")}
                >
                  Betterment
                </h1>
                {isPinned ? (
                  <LockIcon onClick={togglePin} className={classes.lockIcon} />
                ) : (
                  <LockOpenIcon
                    onClick={togglePin}
                    className={classes.lockIcon}
                  />
                )}
              </div>
              {/* <hr className={classes.divider} /> */}
            </React.Fragment>
          ) : (
            <Logo className={classes.logo} />
          )}
          <List>
            {topNav.map((a, index) => (
              <ListItem
                className={clsx({
                  [classes.selected]: currentPage === a.route
                })}
                button
                key={a.label}
                onClick={() => {
                  history.push(`/${a.route}`);
                  setCurrentPage(a.route);
                }}
                disableGutters
              >
                <ListItemIcon>
                  {React.cloneElement(a.icon, {
                    className: clsx(classes.icon, {
                      [classes.largeIcon]: !open
                    })
                  })}
                </ListItemIcon>
                <ListItemText
                  primary={a.label}
                  className={open ? classes.itemText : classes.hide}
                />
              </ListItem>
            ))}
          </List>
        </div>
        <div>
          <hr className={classes.divider} />
          <List>
            {bottomNav.map((a, index) => (
              <ListItem
                className={clsx({
                  [classes.selected]: currentPage === a.route
                })}
                button
                key={a.label}
                onClick={() => {
                  history.push(`/${a.route}`);
                  setCurrentPage(a.route);
                }}
                disableGutters
              >
                <ListItemIcon>
                  {React.cloneElement(a.icon, {
                    className: clsx(classes.icon, {
                      [classes.largeIcon]: !open
                    })
                  })}
                </ListItemIcon>
                <ListItemText
                  primary={a.label}
                  className={open ? classes.itemText : classes.hide}
                />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: !open
        })}
      >
        {navRouter}
      </main>
    </div>
  );
}

export default withRouter(NavBar);
