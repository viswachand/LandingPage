import { createMuiTheme } from '@material-ui/core/styles';

const Blue ="#white";
const white = "#fafafa";
const diff  = "#e57373";

export default createMuiTheme({
    palette: {
        common:{
            main: `${diff}`,
        },
      primary: {
        main: `${white}`,
      },
      secondary: {
        main: `${Blue}`,
      },
    },
    typography:{
        tab:{
            fontFamily:"Raleway",
            textTransform: "none",
            fontWeight:"700",
        }
    }
  });