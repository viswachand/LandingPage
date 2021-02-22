import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Grid } from "@material-ui/core";
import Controls from "../componets/controls/controls";
import SwipeableTextMobileStepper from "../componets/controls/images";
import GridList from "@material-ui/core/GridList";

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  //
  Toolbar: {
    backgroundColor: "white",
   minHeight: "5em",
   color: "black",
  
  },
//   toolbarmargin: {
//     ...theme.mixins.toolbar,
//   },
  AppBar: {
    // backgroundColor: "white",
    boxShadow: "0px 0px 0px 0px",
    
  },
  Title: {
    display: "flex",
    flex: "1",
    justifyContent: "center",
   
  },
  TitleText:{
    fontFamily: "'RocknRoll One', sans-serif;", 
    // fontFamily: "sans-serif"
    fontSize:"1.5em"
  },
  MenuIconButtons: {
   
    "&:hover": {
      background: "transparent",
    },
  },
}));

export default function ElevateAppBar(props) {
  const { color, children, onClick } = props;
  const classes = useStyles();

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar className={classes.Appbar} >
          <Toolbar disableGutters className={classes.Toolbar}>
            <Container fixed >
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <IconButton
                  size
                  color="inherit"
                  aria-label="open drawer"
                  // onClick={handleDrawerOpen}
                  edge="start"
                  className={classes.MenuIconButtons}
                  disableRipple

                  // className={clsx(classes.menuButton, open && classes.hide)}
                >
                  <MenuIcon  />
                </IconButton>
                <div className={classes.Title}>
                  <Typography  >STONERS STORIES</Typography>
                </div>
                <IconButton
                  color="inherit"
                  disableRipple
                  className={classes.MenuIconButtons}
                >
                  <InstagramIcon  />
                </IconButton>
                <IconButton
                  color="inherit"
                  disableRipple
                  className={classes.MenuIconButtons}
                >
                  <FacebookIcon />
                </IconButton>
              </Grid>
            </Container>
           
          </Toolbar>
        </AppBar>
         {/* <div className={classes.toolbarmargin} /> */}
      </ElevationScroll>
    </React.Fragment>
  );
}

{
  /* <IconButton
color="inherit"
aria-label="open drawer"
// onClick={handleDrawerOpen}
edge="start"
// className={clsx(classes.menuButton, open && classes.hide)}
>
<MenuIcon />
</IconButton>
<div className={classes.Title}>
<Typography variant="h6">STONERS STORIES</Typography>
</div>

<div className={classes.user}>
<IconButton color="inherit">
  <InstagramIcon />
</IconButton>
<IconButton color="inherit">
  <FacebookIcon />
</IconButton>
</div> */
}
