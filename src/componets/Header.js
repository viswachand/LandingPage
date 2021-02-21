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

const useStyles = makeStyles({});

export default function ElevateAppBar(props) {
  const { color, children, onClick } = props;
  const classes = useStyles();

  return (
    <React.Fragment>
    
        
      
        <Container>
        <ElevationScroll {...props}>
          <AppBar className={classes.header}>
            <Toolbar className={classes.toolbar}>
              <Grid
                
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    // onClick={handleDrawerOpen}
                    edge="start"
                    // className={clsx(classes.menuButton, open && classes.hide)}
                  >
                    <MenuIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <div className={classes.Title}>
                    <Typography variant="h6">STONERS STORIES</Typography>
                  </div>
                </Grid>
                <Grid item>
                  <div className={classes.user}>
                    <IconButton color="inherit">
                      <InstagramIcon />
                    </IconButton>
                    <IconButton color="inherit">
                      <FacebookIcon />
                    </IconButton>
                  </div>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <Toolbar />

        <SwipeableTextMobileStepper />

        <Grid item xs={12}>
          <div className={classes.text}>
            <h2>
              Featured in Vogue, Grazia, Harper's, People magazine and more. And
              yes, <br></br>
              <Typography align="center">on every bride's wishlist</Typography>
            </h2>
          </div>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
