import React from "react";
import "./CustomerPage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import divider from "../../utils/divider";
import Heading from "../../components/heading/Heading";

function CustomerPage() {
  return (
    <div className="customer-page">
      <Navbar />
      <div className="customer-page-body">
        {divider}
        <Heading>Customers</Heading>
      </div>
      <div className="customer-page-footer">
        <Footer />
      </div>
    </div>
  );
}

export default CustomerPage;
