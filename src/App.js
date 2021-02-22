import React from "react";
import "./App.css";
import ElevateAppBar from "./componets/Header";
import {
  makeStyles,
  CssBaseline,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";
import SwipeableTextMobileStepper from "./componets/controls/images";
import Container from "@material-ui/core/Container";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./componets/controls/Theme";
import { Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";

import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

import GridList from "@material-ui/core/GridList";

const useStyles = makeStyles({
  appMain: {
    backgroundColor: "white",
  },
  
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.appMain}>
        <BrowserRouter>
          <ElevateAppBar />


          <Switch>
            <Route exact path="/" component={() => <div>Home</div>} />
            <Route
              exact
              path="/services"
              component={() => <div>services</div>}
            />
            <Route
              exact
              path="/TheResoulution"
              component={() => <div>TheResoulution</div>}
            />
            <Route exact path="/AboutUS" component={() => <div>AboutUs</div>} />
            <Route
              exact
              path="/ContactUS"
              component={() => <div>ContactUs</div>}
            />
            {/* <Route exact path="/BooksUs" component = {Bookus}/> */}
            {/* <Route exact path="/" component = {() => <div>Home</div>}/>  */}
          </Switch>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
