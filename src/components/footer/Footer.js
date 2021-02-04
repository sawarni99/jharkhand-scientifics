import React from "react";
import "./Footer.css";
import { useHistory } from "react-router-dom";
import { contactDetails } from "../../utils/contactDetails";

function Footer() {
  let history = useHistory();
  const { phone, name, whatsapp } = contactDetails;
  const onClickHome = () => {
    history.push("/");
  };

  const onClickProducts = () => {
    history.push("/products");
  };

  const onClickCustomers = () => {
    history.push("/customers");
  };

  const onClickAboutUs = () => {
    //TODO: Have to implement code here...
  };

  return (
    <div className="footer">
      <div className="footer-left">
        <div className="footer-title">
          JHARKHAND <br /> SCIENTIFICS
        </div>
        <br />
        <div className="footer-tag">
          Complete science laboratory solution for CBSE Schools and Colleges
        </div>
      </div>
      <div className="footer-center">
        <div className="footer-heading">Menu</div>
        <div className="footer-link" onClick={onClickHome}>
          Home
        </div>
        <div className="footer-link" onClick={onClickProducts}>
          Products
        </div>
        <div className="footer-link" onClick={onClickCustomers}>
          Customers
        </div>
        <div className="footer-link" onClick={onClickAboutUs}>
          About Us
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-heading">Contacts</div>
        <b>{name}</b>
        <br />
        <br />
        <div className="footer-contact">
          <img src="/images/call-yellow.png" alt="" height="18px" /> {phone}
        </div>
        <br />
        <div className="footer-contact">
          <img src="/images/whatsapp.png" alt="" height="18px" /> {whatsapp}
        </div>
        <br />
        <div className="footer-contact">
          <img src="/images/mail.png" alt="" height="18px" />{" "}
          jharkhand0scientifics2018@gmail.com
        </div>
      </div>
    </div>
  );
}

export default Footer;
