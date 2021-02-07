import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Link from "../../components/link/Link";
import { useHistory } from "react-router-dom";
import { contactDetails } from "../../utils/contactDetails";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);

  // Checking if window is opened in phone....
  useEffect(() => {
    if (window.innerWidth < 900) {
      setShowNavbar(false);
    }
  }, []);

  let history = useHistory();
  const { phone } = contactDetails;

  const onclickHome = () => {
    history.push("/");
  };

  const onclickProducts = () => {
    history.push("/products");
  };

  const onclickCustomers = () => {
    history.push("/customers");
  };

  const onclickContact = () => {
    history.push("/contact");
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-left">
          <div
            onClick={() => setShowNavbar(!showNavbar)}
            className="navbar-phone"
          >
            <img src="/images/menu.svg" alt="" height="30px" width="30px" />
          </div>
          <span onClick={onclickHome}>
            JHARKHAND <br />
            SCIENTIFICS
          </span>
        </div>
        {showNavbar ? (
          <div className="navbar-center">
            <div>
              <Link onClick={onclickProducts}>PRODUCTS</Link>
            </div>
            <div>
              <Link onClick={onclickCustomers}>CUSTOMERS</Link>
            </div>
            <div>
              <Link onClick={onclickContact}>CONTACT</Link>
            </div>
            <div>
              <Link onClick={onclickContact}>ABOUT US</Link>
            </div>
          </div>
        ) : null}

        <div className="navbar-right">
          <img
            src="/images/call.png"
            alt=""
            style={{ height: "25px", marginRight: "10px" }}
          />
          {phone}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
