import React from "react";
import "./ContactPage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { contactDetails } from "../../utils/contactDetails";

function ContactPage() {
  const {
    name,
    city1,
    city2,
    address1,
    address2,
    phone,
    whatsapp,
    email,
  } = contactDetails;
  return (
    <div className="contact-page">
      <Navbar />
      <div className="contact-page-background" />
      <div className="contact-page-body">
        <div className="contact-page-left">
          <div className="contact-page-content">
            <div className="contact-page-heading">Contact Us</div>
            <div className="contact-page-name">{name}</div>
            <div className="contact-page-address-container">
              <div className="contact-page-address">
                <div>
                  <img src="/images/location.png" alt="" />
                </div>
                <div>
                  <div>
                    <b>{city1}</b>
                  </div>
                  <div>
                    <span>{address1}</span>
                  </div>
                </div>
              </div>
              <div className="contact-page-address">
                <div>
                  <img src="/images/location.png" alt="" />
                </div>
                <div>
                  <div>
                    <b>{city2}</b>
                  </div>
                  <div>
                    <span>{address2}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-page-info">
              <div>
                <img src="/images/call-yellow.png" alt="" />
                <span>{phone}</span>
              </div>
              <div>
                <img src="/images/whatsapp.png" alt="" />
                <span>{whatsapp}</span>
              </div>
              <div>
                <img src="/images/mail.png" alt="" />
                <span>{email}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-page-right">
          <img src="/images/loading.svg" alt="" height="60px" />
          <iframe
            className="contact-page-map"
            title="map"
            src="https://www.google.com/maps/d/embed?mid=17eIPpL_dgBsN_oC9yjsZLRRsPAzjRPR1&hl=en"
            width="400px"
            height="320px"
          />
        </div>
      </div>
      <div className="contact-page-footer">
        <Footer />
      </div>
    </div>
  );
}

export default ContactPage;
