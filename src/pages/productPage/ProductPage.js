import React from "react";
import "./ProductPage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import products from "../../utils/products";
import ProductCard from "../../components/productCard/ProductCard";
import divider from "../../utils/divider";
import Heading from "../../components/heading/Heading";

function ProductPage() {
  const productView = products.map((data) => (
    <ProductCard
      key={data.key}
      name={data.name}
      category={data.category}
      info={data.info}
    />
  ));

  return (
    <div className="product-page">
      <div className="product-page-header">
        <Navbar />
      </div>
      <div className="product-page-body">
        {divider}
        <Heading>Our Products</Heading>
        <div className="product-page-content">{productView}</div>
      </div>
      <div className="product-page-footer">
        <Footer />
      </div>
    </div>
  );
}

export default ProductPage;
