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
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3650.5007240292957!2d86.44118557479352!3d23.800787186841134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s11%20-%20Bhuban%20Sandhya%20Market%2C%20Durga%20Mandir%20Road%20No.%202%2C%20Hirapur%2C%20Dhanbad!5e0!3m2!1sen!2sin!4v1736687977749!5m2!1sen!2sin"
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
