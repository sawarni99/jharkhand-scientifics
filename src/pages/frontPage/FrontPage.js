import React from "react";
import "./FrontPage.css";
import Navbar from "../../components/navbar/Navbar";
import ServiceCard from "../../components/serviceCard/ServiceCard";

export default function FrontPage() {
  const divider = <div className="front-page-divider" />;

  return (
    <div className="front-page">
      <Navbar />
      <div className="front-page-background">
        <div className="front-page-background-title">
          Get your <span>Science</span> stuffs today
        </div>
        <div className="front-page-black" />
        <img src="/images/background3.jpg" alt="" width="100%" height="100%" />
      </div>
      <div className="front-page-body">
        {divider}
        <b className="front-page-heading">Our Services</b>
        <div className="front-page-services">
          <ServiceCard src="/images/clock.png" heading="Since 1968">
            We are the scientific instrument dealer of Dhanbad, Jharkhand since
            1968. Our all instruments are suitable for graduation level of
            Experimental Studies. We are providing our products to all the{" "}
            <b>DAV Public Schools</b> of Dhanbad district for over{" "}
            <b>30 years</b>.
          </ServiceCard>
          <ServiceCard src="/images/school.png" heading="Schools">
            We are the main supplier of Scientific Instruments to almost all{" "}
            <b>C.B.S.E.</b> affiliated Schools of the area. We are the founder
            supplier to <b>Indian School Of Learning</b> group of Schools in
            Dhanbad, Jharkhand.
          </ServiceCard>
          <ServiceCard src="/images/flask-yellow.png" heading="Best Products">
            We adjudge ourselves as the best stocked Scientific Instruments
            establishment in Dhanbad. As we belong to a Teacher's Family you can
            get valuable suggestions in respect to your School Laboratory.
          </ServiceCard>
        </div>
      </div>
    </div>
  );
}
