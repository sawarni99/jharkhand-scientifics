import React, { useState } from "react";
import "./ProductPage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import products from "../../utils/products";
import ProductCard from "../../components/productCard/ProductCard";
import divider from "../../utils/divider";
import Heading from "../../components/heading/Heading";

function ProductPage() {
  const classNameSelectedOption = "product-page-option-selected";
  const [optionState, setOptionState] = useState({
    className: "All",
    productList: products,
  });
  const { className, productList } = optionState;

  const productView = productList.map((data) => (
    <ProductCard
      key={data.key}
      name={data.name}
      category={data.category}
      info={data.info}
    />
  ));

  const getProductsByCategory = (category) => {
    const subProducts = [];
    for (let product of products) {
      if (product.category === category) {
        subProducts.push(product);
      }
    }
    return subProducts;
  };

  const onClickOptions = (event) => {
    const category = event.target.id;
    if (category === "All") {
      setOptionState({
        ...optionState,
        className: "All",
        productList: products,
      });
    } else {
      setOptionState({
        ...optionState,
        className: category,
        productList: getProductsByCategory(category),
      });
    }
  };

  return (
    <div className="product-page">
      <div className="product-page-header">
        <Navbar />
      </div>
      <div className="product-page-body">
        {divider}
        <Heading>Our Products</Heading>
        <div className="product-page-options">
          <div
            className={className === "All" ? classNameSelectedOption : null}
            id="All"
            onClick={onClickOptions}
          >
            All
          </div>
          <div
            className={
              className === "Glassware" ? classNameSelectedOption : null
            }
            id="Glassware"
            onClick={onClickOptions}
          >
            Glassware
          </div>
          <div
            className={
              className === "Neutral Glass" ? classNameSelectedOption : null
            }
            id="Neutral Glass"
            onClick={onClickOptions}
          >
            Neutral Glass
          </div>
          <div
            className={
              className === "Chemistry" ? classNameSelectedOption : null
            }
            id="Chemistry"
            onClick={onClickOptions}
          >
            Chemistry
          </div>
          <div
            className={className === "Biology" ? classNameSelectedOption : null}
            id="Biology"
            onClick={onClickOptions}
          >
            Biology
          </div>
        </div>
        <div className="product-page-content">{productView}</div>
      </div>
      <div className="product-page-footer">
        <Footer />
      </div>
    </div>
  );
}

export default ProductPage;
