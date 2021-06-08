import React from "react";
import { Link } from "react-router-dom";
import "./Landingpage.css";
import RefrelsDish from "./refreldishs/RefralDish";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LandingPage = () => {
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
  return (
    <div>
      {/* Banner Starts Here */}
      <div className="banner header-text">
        <div className="owl-banner owl-carousel">
          <div className="banner-item-01">
            <div className="text-content">
              <h4>Best Offer</h4>
              <h2>New Arrivals On Sale</h2>
            </div>
          </div>
          <div className="banner-item-02">
            <div className="text-content">
              <h4>Flash Deals</h4>
              <h2>Get your best products</h2>
            </div>
          </div>
          <div className="banner-item-03">
            <div className="text-content">
              <h4>Last Minute</h4>
              <h2>Grab last minute deals</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Banner Ends Here */}
      {/* Display Card start */}
      <div className="cardcontainer">
        <div className="latest-products">
          <div className="container">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Latest Meal</h2>
                <a href="products.html">
                  view all products <i className="fa fa-angle-right" />
                </a>
              </div>
            </div>
            <div
              className="row mainbox"
              style={{ display: "flex", flexWrap: "wrap" }}
            >
              <div className="col-md-4 carditem">
                <Link to="viewproduct">
                  <div className="product-item">
                    <a href="#">
                      <img src="/images/gallery/01.jpg" alt />
                    </a>
                    <div className="down-content">
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
                      <span>Reviews (24)</span>
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
                      <img src="/images/gallery/03.jpg" alt />
                    </a>
                    <div className="down-content">
                      <div className="cardTitle">
                        <a href="#">
                          <h4>Tittle title Tittle</h4>
                        </a>
                        <h6>$25.75</h6>
                      </div>
                      <p>
                        Sixteen Clothing is free CSS template provided by
                        TemplateMo.
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
                      <span>Reviews (36)</span>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 carditem">
                <Link to="viewproduct">
                  <div className="product-item">
                    <a href="#">
                      <img src="/images/gallery/04.jpg" alt />
                    </a>
                    <div className="down-content">
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
                      <span>Reviews (48)</span>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 carditem">
                <Link to="viewproduct">
                  <div className="product-item">
                    <a href="#">
                      <img src="/images/gallery/05.jpg" alt />
                    </a>
                    <div className="down-content">
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
                      <span>Reviews (16)</span>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 carditem">
                <Link to="viewproduct">
                  <div className="product-item">
                    <a href="#">
                      <img src="/images/gallery/06.jpg" alt />
                    </a>
                    <div className="down-content">
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
                      <span>Reviews (32)</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Display Card end */}
      {/* slider for  refrals products */}
      {/* <RefrelsDish /> */}

      {/* About Food Start */}
      <div className="aboutcontainer">
        <div className="best-features">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <h2>Best Food Dish</h2>
                </div>
              </div>
              <div className="BestProductContainer">
                <div className="leftcontainer">
                  <div className="left-content ">
                    <h4>Looking for the best products?</h4>
                    <p>
                      <a
                        rel="nofollow"
                        href="https://templatemo.com/tm-546-sixteen-clothing"
                        target="_parent"
                      >
                        This template
                      </a>{" "}
                      is free to use for your business websites. However, you
                      have no permission to redistribute the downloadable ZIP
                      file on any template collection website.{" "}
                      <a rel="nofollow" href="https://templatemo.com/contact">
                        Contact us
                      </a>{" "}
                      for more info.
                    </p>
                    <ul className="featured-list">
                      <li>
                        <a href="#">Lorem ipsum dolor sit amet</a>
                      </li>
                      <li>
                        <a href="#">Consectetur an adipisicing elit</a>
                      </li>
                      <li>
                        <a href="#">It aquecorporis nulla aspernatur</a>
                      </li>
                      <li>
                        <a href="#">Corporis, omnis doloremque</a>
                      </li>
                      <li>
                        <a href="#">Non cum id reprehenderit</a>
                      </li>
                    </ul>
                    <a href="about.html" className="filled-button">
                      Read More
                    </a>
                  </div>
                </div>
                <div className="rightcotainer">
                  <div className="right-image">
                    <img src="/images/gallery/07.jpg" alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Food end */}
      <div className="uniquecontent inner-content">
        <div className="uniqueinercontent">
          <div className="uniqueleftcontainer">
            <h4>
              Creative &amp; Unique <em>Sixteen</em> Products
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              corporis amet elite author nulla.
            </p>
          </div>
          <div className="uniquerightcontainer">
            <a href="#" className="filled-button">
              Purchase Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
