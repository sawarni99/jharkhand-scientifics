import React from "react";
import "./FrontPage.css";
import Navbar from "../../components/navbar/Navbar";

export default function FrontPage() {
  return (
    <div className="front-page">
      <Navbar />
      <div className="front-page-background">
        <img src="/images/background3.jpg" alt="" width="100%" height="100%" />
      </div>
    </div>
  );
}
