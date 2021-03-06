import React from "react";
import "./FrontPage.css";
import Navbar from "../../components/navbar/Navbar";
import ServiceView from "./ServiceView";
import BrowseView from "./BrowseView";
import StocksView from "./StocksView";
import Footer from "../../components/footer/Footer";
import divider from "../../utils/divider";

export default function FrontPage() {
  return (
    <div className="front-page">
      <Navbar />
      <div className="front-page-background">
        <div className="front-page-background-title">
          Get your <span>Science</span> stuffs today!
        </div>
        <div className="front-page-black" />
        <img src="/images/background3.jpg" alt="" width="100%" height="100%" />
      </div>
      <div className="front-page-body">
        {divider}
        <ServiceView />
        {divider}
        <BrowseView />
        {divider}
        <StocksView />
      </div>
      <div className="front-page-footer">
        <Footer />
      </div>
    </div>
  );
}
