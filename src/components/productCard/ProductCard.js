import React, { useState } from "react";
import "./ProductCard.css";

function ProductCard() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [focused, setFocus] = useState(false);
  const productInfos = [
    { key: "1", size: "50ml", price: "65.00", quantity: "2" },
    { key: "2", size: "100ml", price: "80.00", quantity: "4" },
    { key: "3", size: "150ml", price: "95.00", quantity: "2" },
    { key: "4", size: "250ml", price: "115.00", quantity: "9" },
    { key: "5", size: "500ml", price: "140.00", quantity: "1" },
  ];

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
            <b>Beaker</b>
          </div>
          <div>
            <span>Chemistry</span>
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
