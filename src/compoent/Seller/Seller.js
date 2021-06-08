import React from "react";
import { Link } from "react-router-dom";
import "./Seller.css";

const SellerPortal = () => {
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
                <h2>Meal post</h2>
                {/* <a href="products.html">
                  view all products <i className="fa fa-angle-right" />
                </a> */}
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
    </div>
  );
};

export default SellerPortal;
