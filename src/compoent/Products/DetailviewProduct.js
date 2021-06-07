import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Grid, Box, Divider, Icon, Button } from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Link, useParams, useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
// .......redux.....//
import { useDispatch } from 'react-redux';
import {addtocart } from '../../redux/reducers/action' ;

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
  mainGrid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  mainGrid2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
  },
  desBox: {
    textAlign: "left",
    margin: "10px 10px",
  },

  reviewBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
    margin: "10px 0px",
  },
  reltedSlider: {
    // backgroundColor: "#edf5f2",
    maxWidth: "100%",
    minHeight: "160px",
    display: "flex",
    overflow: "scroll",
  },
  relateinerbox: {
    width: "200px",
    hetght: "250px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-Start",
  },
  backbtnbox: {
    width: "100px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function DetailViewProduct() {
  const classes = useStyles();
  const history = useHistory();

  const { productId } = useParams();

  const [expanded, setExpanded] = React.useState(false);
    const dispatch = useDispatch();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  //   const viewItem = FetchCartData.filter((item) => item.id === +productId);
  //   console.log(viewItem);
  return (
    <div style={{ overflow: "hidden", marginTop: "10%" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6} className={classes.mainGrid}>
          <Box mt={2}>
            <Card className={classes.root}>
              <CardHeader />
              <CardMedia
                className={classes.media}
                image="/images/gallery/05.jpg"
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions
                disableSpacing
                style={{ justifyContent: "space-between" }}
              >
                <IconButton
                  aria-label="add to favorites"
                  style={{
                    border: "1px solid #94a196",
                    backgroundColor: "#fff",
                  }}
                >
                  <FavoriteIcon style={{ color: "#eb2636" }} />
                </IconButton>
                <Button
                  variant="outlined"
                  aria-expanded={expanded}
                  style={{
                    backgroundColor: "#232323",
                    color: "#f33f3f",
                    borderRadius: "25px",
                  }}
                  className={classes.button}
                  onClick={() => dispatch(addtocart())}
                >
                  <Link to="/viewproduct/shippingaddres">Add to Cart</Link>
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Grid>
        <Grid item md={6} sm={6} xs={12} className={classes.mainGrid2}>
          <Box className={classes.desBox}>
            <Box className={classes.backbtnbox} onClick={history.goBack}>
              <ArrowBackIosIcon /> <Typography variant="h5"> Back</Typography>
            </Box>
            <Typography variant="h4">Dishes</Typography>
            <Divider style={{ backgroundColor: "#ddd", margin: "10px 0px" }} />
            <Box className={classes.reviewBox}>
              <StarBorderIcon style={{ color: "#32db23" }} />
              <StarBorderIcon style={{ color: "#32db23" }} />
              <StarBorderIcon style={{ color: "#32db23" }} />
              <StarBorderIcon style={{ color: "#32db23" }} />
              <StarBorderIcon style={{ color: "#32db23" }} />
              <Typography variant="h6">reviews</Typography>
            </Box>
            <Typography variant="h5" className={classes.reviewBox}>
              {" "}
              Price Rs:&nbsp;&nbsp;12333
            </Typography>
            <Divider
              style={{
                backgroundColor: "#48ba3d",
                height: "3px",
                margin: "10px 0px",
              }}
            />
            <Typography variant="h6">Brand:Orgaic</Typography>
            <Typography variant="h6">Avalibel:09</Typography>
            <Typography variant="h5">Descraption</Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then
              serve.
            </Typography>
          </Box>
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <Box className={classes.reltedSlider}>
            <Box className={classes.relateinerbox}>
              <img
                src="/images/gallery/01.jpg"
                style={{ width: "150px", heigth: "150px" }}
              />
              <Typography variant="h6"> Product</Typography>
              <Typography variant="body1"> Price:123</Typography>
            </Box>
            <Box className={classes.relateinerbox}>
              <img
                src="/images/gallery/02.jpg"
                style={{ width: "150px", heigth: "150px" }}
              />
              <Typography variant="h6"> Product</Typography>
              <Typography variant="body1"> Price:123</Typography>
            </Box>
            <Box className={classes.relateinerbox}>
              <img
                src="/images/gallery/03.jpg"
                style={{ width: "150px", heigth: "150px" }}
              />
              <Typography variant="h6"> Product</Typography>
              <Typography variant="body1"> Price:123</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
