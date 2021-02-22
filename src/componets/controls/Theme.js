import { createMuiTheme } from '@material-ui/core/styles';

const Blue ="#3f51b5";
const white = "#fafafa";
const diff  = "#121858";

export default createMuiTheme({
    palette: {
        common:{
            main: `${diff}`,
        },
      primary: {
        main: `${white}`,
      },
      secondary: {
        main: `${diff}`,
       
      },
    },
    typography:{
        tab:{
           
            textTransform: "none",
            fontWeight:"700",
        },
        h5:{
        fontFamily: 'sans-serif',
          
          textTransform: "none",
          
        },
        h6:{
          fontFamily: 'Sorts Mill Goudy',
          fontweight:"18px",
          opacity:"0.9",
          textTransform: "none",
          
          
        }
    }
  });


//   font-family: 'Lato', sans-serif;
// font-family: 'RocknRoll One', sans-serif;
// font-family: 'Sorts Mill Goudy', serif;