import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from "@material-ui/core/Button";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";


// import React from "react";
import Customer from "./components/customer";
import Storeowner from "./components/storeowner";
import Storemanager from "./components/storemanager";
import Supplier from "./components/supplier";
import Superuser from "./components/superuser";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
  
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  user: {
    display: "flex",
    flex: "1",
    justifyContent: "flex-end"
  },

}));

function Landingpage() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            MYCART
          </Typography>
          <div className={classes.user}>
            <Button>viswachand</Button>
            <Button>logout</Button>
          </div>

        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>

        <List>
          {['customer', 'storeowner', 'Storemanager', 'supplier', 'superuser'].map((text, index) => (
            <ListItem button key={text} component={Link} to={"/" + text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

      </Drawer>

    </div>
  );
}

export default function Routes() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/" exact component={Landingpage} />
          <Route path="/customer" component={Customer} />
          <Route path="/storemanager" component={Storemanager} />
          <Route path="/storeowner" component={Storeowner} />
          <Route path="/superuser" component={Superuser} />
          <Route path="/supplier" component={Supplier} />
        </div>
      </Switch>
    </Router>
  );
}
