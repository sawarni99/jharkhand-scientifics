import React from "react";
import "./AboutPage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import divider from "../../utils/divider";
import Heading from "../../components/heading/Heading";

function AboutPage() {
  return (
    <div className="about-page">
      <Navbar />
      <div className="about-page-body">
        {divider}
        <Heading>About Us</Heading>
        <div className="about-page-quote">
          "The light of the lights, It is said to be beyond the darkness of
          Maya. <br /> It is knowledge itself as well as the object of knowledge
          and is <br />
          also worth attaining through Knowledge. Is is specially seated in the
          hearts of all."
        </div>
        <div className="about-page-content">
          <img
            className="about-page-img1"
            src="/images/gpjamuar.jpg"
            alt="hello"
            height="200px"
          />
          <div className="about-page-info">
            <p>Late G.P. Jamuar</p>
            <span>
              A great inspiration of knowledge and simplicity. He founded
              Jharkhand Scientifics in 1968 in a small town Jharia, Dhanbad
              which became the largest supplier of scientific equipments to the
              schools and colleges of Dhanbad. He is a great person and will
              always be in our hearts.
            </span>
          </div>
        </div>
        <div className="about-page-content">
          <div className="about-page-info">
            <p>Kamal Kishore Sinha</p>
            <span>
              Took the light and inspiration of Late G.P. Jamuar to take the
              responsibility of rebuilding Jharkhand Scientifics with the motive
              of expanding it and contributing in the growth of Knowledge in our
              country.
            </span>
          </div>
          <img
            className="about-page-img2"
            src="/images/kamal.jpg"
            alt="hello"
            height="200px"
          />
        </div>
      </div>
      <div className="about-page-footer">
        <Footer />
      </div>
    </div>
  );
}

export default AboutPage;
