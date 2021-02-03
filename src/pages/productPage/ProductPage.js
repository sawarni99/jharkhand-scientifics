import React from "react";
import "./ProductPage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

function ProductPage() {
  return (
    <div className="product-page">
      <div className="product-page-header">
        <Navbar />
      </div>
      <div className="product-page-body"></div>
      <div className="product-page-footer">
        <Footer />
      </div>
    </div>
  );
}

export default ProductPage;
