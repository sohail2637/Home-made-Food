import React from "react";
import Footer from "../Footer/Footer";
import NaveBar from "../NaveBar/NaveBar";
import About from "./About/About";
import LandingPage from "./LandingPage/LandingPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ContactUs from "./ContactUs/ContactUs";
import LoginPage from "../Authentication/Login/LoginPage";
import SignupPage from "../Authentication/Signup/SignupPage";
import DetailViewProduct from "./Products/DetailviewProduct";
import ShippingOrder from "./Products/ShippingOrder";
import { PreloadedState } from "@reduxjs/toolkit";
import Store from "../redux/Store";
import { Provider } from "react-redux";
import Seller from "./Seller/Seller";
import AddProducts from "./Seller/Addprodust/AddProduct";
import CartItems from "./cartItems/CartItems";
import AdminPanal from "../AdminPanal/AdminPanal";
import DetailsSeller from "../AdminPanal/DetailsSeller";
import DetailDeliveryBoy from "../AdminPanal/DetailDeliveryBoy";
const Main = () => {
  return (
    <div>
      <Provider store={Store}>
        <Router>
          <NaveBar />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/" exact component={LandingPage} />
          <Route path="/about" component={About} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/viewproduct" exact component={DetailViewProduct} />
          <Route
            path="/viewproduct/shippingaddres"
            exact
            component={ShippingOrder}
          />
          {/* seller dashboard....... */}
          <Route path="/seller" component={Seller} />
          <Route path="/addproduct" component={AddProducts} />
          <Route path="/cartproducts" component={CartItems} />
          <Route path="/admin" component={AdminPanal} />
          <Route path="/aboutseller" component={DetailsSeller} />
          <Route path="/delaveryboy" component={DetailDeliveryBoy} />

          <Footer />
        </Router>
      </Provider>
    </div>
  );
};

export default Main;
