import React, { Component } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
// import { useDispatch } from "react-redux";
// import { incrementCart } from "../../../redux/action";
// import FetchCartData from "../../../assets/data-file";
// import LocalForAge from "localforage";

const useStyles = makeStyles((theme) => ({
  card1: {
    border: "1px solid #d0d0d0",
    heigth: "500px",
    backgroundColor: "#fff",
  },
  imagebox: {
    width: "100%",
    height: "250px",
    backgroundColor: "#f2fcff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  hoverbtn: {
    display: "none",
    width: "150px",
    border: "1px solid 94a196",
    borderRadius: "25px",
    backgroundColor: "#c1edc0",
    color: "black",
    "&:hover": {
      backgroundColor: "#359c33",
      color: "#fff",
    },
  },
  desbox: {
    backgroundColor: "#f2fcff",
    display: "flex",
    marginTop: "15px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  reviewbox: {
    display: "flex",
    // margin:"10px 0px",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff703",
  },
  buttonbox: {
    margin: "15px 0px",
    display: "flex",
    alignItems: "center",
  },
  cards: {
    minHeight: "150px",
    backgroundImage: "url(/images/img1.jpeg)",
    backgroundRepeat: "norepeat",
    backgroundSize: "cover",
  },
}));
const Reaqumended = () => {
  const classes = useStyles();
  // const dispatch = useDispatch();
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
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
        breakpoint: 768,
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
  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <h1> DEAL OF THE DAY</h1>
      <Slider {...settings}>
        {/* {FetchCartData.map((item) => { */}
        {/* return ( */}
        <div>
          {/* <Box className={classes.card1}>
                <Box className={classes.imagebox}>
                  <Link to={`/viewproduct/${item.id}`}>
                    <img
                      src={item.image}
                      style={{ width: "100%", height: "250px" }}
                    />
                  </Link>
                </Box>

                <Box className={classes.desbox}> */}
          {/* <Box className={classes.hoverbtn} id='viewbtn' > 
                <Button>Quick view</Button>
              </Box> */}
          {/* <Typography variant="h6">{item.name}</Typography>
                  <Box className={classes.reviewbox}>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />{" "}
                    <Typography style={{ color: "black" }}>
                      {" "}
                      &nbsp; &nbsp; Reviews
                    </Typography>
                  </Box>
                  <Box style={{ display: "flex" }}>
                    <Typography variant="body1" style={{ color: "black" }}>
                      Rs: &nbsp;&nbsp;
                    </Typography>
                    <Typography variant="body1" style={{ color: "#21bf21" }}>
                      {item.price}
                    </Typography>
                  </Box>
                  <Box className={classes.buttonbox}>
                    <CardActions>
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
                        size="medium"
                        variant="contained"
                        style={{
                          backgroundColor: "#fff",
                          fontSize: "1.3rem",
                          border: "1px solid #94a196",
                          borderRadius: "25px",
                          color: "#22a135",
                        }}
                        onClick={() => {
                          dispatch(incrementCart({ productId: item.id }));
                        }}
                      >
                        Add to cart
                      </Button>
                      <IconButton
                        aria-label="add to favorites"
                        style={{
                          border: "1px solid #94a196",
                          backgroundColor: "#fff",
                          color: "#22a135",
                        }}
                      >
                        <SearchIcon />
                      </IconButton>
                    </CardActions>
                  </Box>
                </Box>
              </Box> */}

          <div className="col-md-4 carditem">
            <Link to="viewproduct">
              <div className="product-item">
                <a href="#">
                  <img src="/images/gallery/02.jpg" alt />
                </a>
                <div className="down-content ">
                  <div className="cardTitle">
                    <a href="#">
                      <h4>Tittle title Tittle</h4>
                    </a>
                    <h6>$25.75</h6>
                  </div>
                  <p>
                    Lorem ipsume dolor sit amet, adipisicing elite. Itaque,
                    corporis nulla aspernatur.
                  </p>
                  <ul className="stars">
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                  </ul>
                  <span>Reviews (21)</span>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-md-4 carditem">
            <Link to="viewproduct">
              <div className="product-item">
                <a href="#">
                  <img src="/images/gallery/02.jpg" alt />
                </a>
                <div className="down-content ">
                  <div className="cardTitle">
                    <a href="#">
                      <h4>Tittle title Tittle</h4>
                    </a>
                    <h6>$25.75</h6>
                  </div>
                  <p>
                    Lorem ipsume dolor sit amet, adipisicing elite. Itaque,
                    corporis nulla aspernatur.
                  </p>
                  <ul className="stars">
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                  </ul>
                  <span>Reviews (21)</span>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-md-4 carditem">
            <Link to="viewproduct">
              <div className="product-item">
                <a href="#">
                  <img src="/images/gallery/02.jpg" alt />
                </a>
                <div className="down-content ">
                  <div className="cardTitle">
                    <a href="#">
                      <h4>Tittle title Tittle</h4>
                    </a>
                    <h6>$25.75</h6>
                  </div>
                  <p>
                    Lorem ipsume dolor sit amet, adipisicing elite. Itaque,
                    corporis nulla aspernatur.
                  </p>
                  <ul className="stars">
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                  </ul>
                  <span>Reviews (21)</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
        {/* ); */}
        {/* })} */}
      </Slider>
    </div>
  );
};

export default Reaqumended;
