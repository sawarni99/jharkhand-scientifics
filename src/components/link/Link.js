import React from "react";
import "./Link.css";

function Link({ children, onClick }) {
  return (
    <div className="link" onClick={onClick}>
      <b>{children}</b>
    </div>
  );
}

export default Link;
