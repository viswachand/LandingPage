import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
// import tileData from "../controls/framedata";
import Grid from "@material-ui/core/Grid";
import Img1 from "../../Assests/frame1.jpg";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // flexWrap: 'wrap',
    justifyContent: "space-around",
    // overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imgcontainer: {
    width: 618,

    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    // transform: 'translateZ(0)',
  },
  titleBar: {
    // background:
    //   // "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
    //   // "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    //   "black"
  },
  icon: {
    color: "white",
  },
}));

export default function AdvancedGridList() {
  const classes = useStyles();
  const theme = useTheme();
  const ImageFrame = useMediaQuery(theme.breakpoints.down("xs"));
  const tileData = [
    {
      img: "https://media.vogue.in/wp-content/uploads/2020/10/0001-600x777.jpg",
      title: "Breakfast",
      author: "jill111",
    },
    {
      img: "https://media.vogue.in/wp-content/uploads/2020/12/0001-600x777.jpg",
      title: "Tasty burger",
      author: "director90",
    },
    {
      img: "https://media.vogue.in/wp-content/uploads/2021/02/0001-600x777.jpg",
      title: "Camera",
      author: "Danson67",
    },
    {
      img: "https://media.vogue.in/wp-content/uploads/2021/01/0001-600x777.jpg",
      title: "Morning",
      author: "fancycrave1",
    },
    {
      img: "https://media.vogue.in/wp-content/uploads/2020/10/0001-600x777.jpg",
      title: "Hats",
      author: "Hans",
    },
    {
      img: "https://media.vogue.in/wp-content/uploads/2021/02/0001-600x777.jpg",
      title: "Honey",
      author: "fancycravel",
    },
    {
      img: "https://media.vogue.in/wp-content/uploads/2021/01/0001-600x777.jpg",
      title: "Vegetables",
      author: "jill111",
      cols: 2,
    },
    {
      img: "https://media.vogue.in/wp-content/uploads/2020/07/0001-600x777.jpg",
      title: "Water plant",
      author: "BkrmadtyaKarki",
    },
  ];

  const imageFramePc = (
    <div className={classes.root}>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.imgcontainer}
      >
        <GridList cellHeight={320} spacing={23}>
          {tileData.map((tile) => (
            <GridListTile
              key={tile.img}
              cols={tile.featured ? 2 : 1}
              rows={tile.featured ? 2 : 1}
            >
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar title={tile.title} titlePosition="bottom" />
            </GridListTile>
          ))}
        </GridList>
      </Grid>
    </div>
  );

  const imageFrameMobile = (
    <div className={classes.root}>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.imgcontainer}
      >
        <GridList cellHeight={200} spacing={15}>
          {tileData.map((tile) => (
            <GridListTile
              key={tile.img}
              cols={tile.featured ? 2 : 1}
              rows={tile.featured ? 2 : 1}
            >
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar title={tile.title} titlePosition="bottom" />
            </GridListTile>
          ))}
        </GridList>
      </Grid>
    </div>
  );

  return <div>{ImageFrame ? imageFrameMobile : imageFramePc}</div>;
}
