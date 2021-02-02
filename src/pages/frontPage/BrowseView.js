import React from "react";
import "./FrontPage.css";
import CardButton from "../../components/cardButton/CardButton";
import Heading from "../../components/heading/Heading";

function BrowseView() {
  const onClickProducts = () => {
    //TODO:: Have to implement here...
  };

  const onClickCustomers = () => {
    //TODO:: Have to implement here...
  };

  const onClickContacts = () => {
    //TODO:: Have to implement here...
  };

  return (
    <>
      <Heading>Explore</Heading>
      <div className="front-page-browse">
        <CardButton
          from="/images/flask-yellow.png"
          to="/images/flask-white.png"
          onClick={onClickProducts}
        >
          Our Products
        </CardButton>
        <CardButton
          from="/images/customer-yellow.png"
          to="/images/customer-white.png"
          onClick={onClickCustomers}
        >
          Our Customers
        </CardButton>
        <CardButton
          from="/images/contact-yellow.png"
          to="/images/contact-white.png"
          onClick={onClickContacts}
        >
          Contacts
        </CardButton>
      </div>
    </>
  );
}

export default BrowseView;
