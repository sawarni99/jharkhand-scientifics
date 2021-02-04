import React from "react";
import "./Navbar.css";
import Link from "../../components/link/Link";
import { useHistory } from "react-router-dom";
import { contactDetails } from "../../utils/contactDetails";

function Navbar() {
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
          JHARKHAND <br />
          SCIENTIFICS
        </div>
        <div className="navbar-center">
          <div>
            <Link onClick={onclickHome}>HOME</Link>
          </div>
          <div>
            <Link onClick={onclickProducts}>PRODUCTS</Link>
          </div>
          <div>
            <Link onClick={onclickCustomers}>CUSTOMERS</Link>
          </div>
          <div>
            <Link onClick={onclickContact}>CONTACT</Link>
          </div>
        </div>
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
