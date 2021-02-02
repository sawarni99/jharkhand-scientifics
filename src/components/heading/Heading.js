import React from "react";
import "./Heading.css";

function Heading({ children }) {
  return <b className="heading">{children}</b>;
}

export default Heading;
