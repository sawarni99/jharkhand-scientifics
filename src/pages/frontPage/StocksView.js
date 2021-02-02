import React from "react";
import "./FrontPage.css";
import Heading from "../../components/heading/Heading";

function StocksView() {
  return (
    <>
      <Heading>Stocks</Heading>
      <div className="front-page-stock">
        We deal in Scientific, Instruments, Chemicals, Maps, Charts, Globe and
        <br />
        all other requirements of school and colleges.
        <h1>...</h1>
        We have stockist of
        <br /> Omega, Jainco, To-Day Tech, <br /> N.C. Kansil, Blocraft,
        Brosilicate, Nice, Merk, Loba
      </div>
    </>
  );
}

export default StocksView;
