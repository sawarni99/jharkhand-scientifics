import React from "react";
import "./Footer.css";
import { useHistory } from "react-router-dom";

function Footer() {
  let history = useHistory();
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
        <b>Kamal Kishore Sinha</b>
        <br />
        <br />
        <div className="footer-contact">
          <img src="/images/call-yellow.png" alt="" height="18px" />{" "}
          +91-7739568425
        </div>
        <br />
        <div className="footer-contact">
          <img src="/images/whatsapp.png" alt="" height="18px" /> +91-9835106442
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
