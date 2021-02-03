import React, { useState } from "react";
import "./ProductCard.css";

function ProductCard({ name, category, info }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [focused, setFocus] = useState(false);
  const productInfos = info;
  let haveSize = true;
  for (let i = 0; i < productInfos.length; i++) {
    if (!productInfos[i].size) {
      haveSize = false;
      break;
    }
  }

  const getIndexBySize = (size) =>
    productInfos.findIndex((data) => data.size === size);

  const onClickSize = (event) => {
    const size = event.target.id;
    const index = getIndexBySize(size);
    setSelectedIndex(index);
  };

  return (
    <div className="product-card">
      <button onClick={() => setFocus(!focused)} className="product-card-top">
        <div className="product-card-top-left">
          <div>
            <b>{name}</b>
          </div>
          <div>
            <span>{category}</span>
          </div>
        </div>
        <div className="product-card-top-right">
          <img src="/images/menu.svg" alt="" height="20px" width="20px" />
        </div>
      </button>
      {focused ? (
        <button className="product-card-bottom">
          {haveSize ? (
            <div className="product-card-size">
              <div>
                <b>Size</b>
              </div>
              <div className="product-card-size-panel">
                {productInfos.map((data) => (
                  <div
                    className={
                      productInfos[selectedIndex].size === data.size
                        ? "product-card-size-selected"
                        : "product-card-size-common"
                    }
                    key={data.key}
                    id={data.size}
                    onClick={onClickSize}
                  >
                    {data.size}
                  </div>
                ))}
              </div>
            </div>
          ) : null}
          <div className="product-card-info">
            <div className="product-card-quantity">
              <div>
                <b>Quantity</b>
              </div>
              <div className="product-card-quant-panel">
                {productInfos[selectedIndex].quantity}
              </div>
            </div>
            <div className="product-card-price">
              Rs. {productInfos[selectedIndex].price}
            </div>
          </div>
        </button>
      ) : null}
    </div>
  );
}

export default ProductCard;
