import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FrontPage from "./pages/frontPage/FrontPage";
import CustomerPage from "./pages/customerPage/CustomerPage";
import ProductPage from "./pages/productPage/ProductPage";
import ContactPage from "./pages/contactPage/ContactPage";
import AboutPage from "./pages/aboutPage/AboutPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/aboutus">
          <AboutPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/products">
          <ProductPage />
        </Route>
        <Route path="/customers">
          <CustomerPage />
        </Route>
        <Route path="/">
          <FrontPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
