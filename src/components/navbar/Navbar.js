import React from "react";
import "./Navbar.css";
import Link from "../../components/link/Link";

function Navbar() {
  const phoneNumber = "+91-7739568425";

  const onclickHome = () => {
    //TODO: Have to redirect from here...
  };

  const onclickProducts = () => {
    //TODO: Have to redirect from here...
  };

  const onclickCustomers = () => {
    //TODO: Have to redirect from here...
  };

  const onclickContact = () => {
    //TODO: Have to redirect from here...
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
          {phoneNumber}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
