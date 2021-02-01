import React from "react";
import "./ServiceCard.css";

function ServiceCard({ children, src, heading }) {
  return (
    <div className="service-card">
      <div className="service-card-icon">
        <img src={src} alt="" height="55px" />
      </div>
      <div className="service-card-heading">{heading}</div>
      <br />
      <div className="service-card-content">{children}</div>
    </div>
  );
}

export default ServiceCard;
