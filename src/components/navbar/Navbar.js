import React from "react";
import "./Navbar.css";

function Navbar() {
  const phoneNumber = "+91-7739568425";
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-left">
          JHARKHAND <br />
          SCIENTIFICS
        </div>
        <div className="navbar-center">
          <div>HOME</div>
          <div>PRODUCTS</div>
          <div>ABOUT US</div>
          <div>CONTACTS</div>
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
