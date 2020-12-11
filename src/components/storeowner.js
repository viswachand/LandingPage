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
import PropTypes from "prop-types";


import Collapse from "@material-ui/core/Collapse";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { MemoryRouter } from "react-router";
import { Link as RouterLink } from "react-router-dom";


const drawerWidth = 200;
const breadcrumbNameMap = {

  "/orders": "orders",
  "/orders/customer orders": "customer orders",
  "/orders/Area wise orders": "Area wise orders",
  "/orders/supplier orders": "supplier orders",
  "/user management": "user management",
  "/Transcation": "Transcation",
  "/spam": "Spam",
};

function ListItemLink(props) {
  const { to, open, ...other } = props;
  const primary = breadcrumbNameMap[to];

  return (
    <li>
      <ListItem button component={RouterLink} to={to} {...other}>
        <ListItemText primary={primary} />
        {open != null ? open ? <ExpandLess /> : <ExpandMore /> : null}
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  open: PropTypes.bool,
  to: PropTypes.string.isRequired
};

const useStyles = makeStyles((theme) => ({
  // root: {
  //   display: 'flex',
  // },
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
 
  nested: {
    paddingLeft: theme.spacing(4),
  },
  
 

}));

export default function Storeowner() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [Open, SetOpen] = React.useState(true);

  const handleClick = () => {
    SetOpen((prevOpen) => !prevOpen);
  };


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

        <MemoryRouter initialEntries={["/orders"]} initialIndex={0}>
          <div className={classes.root}>
            <nav className={classes.lists} aria-label="mailbox folders">
              <ListItemLink to="/orders" open={Open} onClick={handleClick} />
              <List >
                <Collapse component="li" in={Open} timeout="auto" unmountOnExit>
                  <List disablePadding >
                    <ListItemLink
                      to="/orders/customer orders"
                      className={classes.nested}
                    />
                    <ListItemLink
                      to="/orders/Area wise orders"
                      className={classes.nested}
                    />
                    <ListItemLink
                      to="/orders/supplier orders"
                      className={classes.nested}
                    />
                  </List>
                </Collapse>
                <ListItemLink to="/user management" />
                <ListItemLink to="/Transcation" />
                <ListItemLink to="/spam" />
              </List>
            </nav>
          </div>
        </MemoryRouter>



      </Drawer>

    </div>
  );
}
