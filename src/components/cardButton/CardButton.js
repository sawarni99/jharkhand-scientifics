import React, { useState } from "react";
import "./CardButton.css";

function CardButton({ children, from, to, onClick }) {
  const iconWithoutHover = <img src={from} alt="" />;
  const iconWithHover = <img src={to} alt="" />;
  const [icon, setIcon] = useState(iconWithoutHover);

  return (
    <div
      className="card-button"
      onMouseOver={() => setIcon(iconWithHover)}
      onMouseOut={() => setIcon(iconWithoutHover)}
      onClick={onClick}
    >
      <div className="card-button-left">{icon}</div>
      <div className="card-button-right">{children}</div>
    </div>
  );
}

export default CardButton;
