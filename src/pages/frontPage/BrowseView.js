import React from "react";
import "./FrontPage.css";
import CardButton from "../../components/cardButton/CardButton";
import Heading from "../../components/heading/Heading";
import { useHistory } from "react-router-dom";

function BrowseView() {
  let history = useHistory();

  const onClickProducts = () => {
    history.push("/products");
  };

  const onClickCustomers = () => {
    history.push("/customers");
  };

  const onClickContacts = () => {
    history.push("/contact");
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
