import React from "react";
import "./FrontPage.css";
import CardButton from "../../components/cardButton/CardButton";

function BrowseView() {
  return (
    <>
      <b className="front-page-heading">Explore</b>
      <div className="front-page-browse">
        <CardButton
          from="/images/flask-yellow.png"
          to="/images/flask-white.png"
        >
          Our Products
        </CardButton>
        <CardButton
          from="/images/customer-yellow.png"
          to="/images/customer-white.png"
        >
          Our Customers
        </CardButton>
        <CardButton
          from="/images/contact-yellow.png"
          to="/images/contact-white.png"
        >
          Contacts
        </CardButton>
      </div>
    </>
  );
}

export default BrowseView;
