import React from "react";
import "./CustomerPage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import divider from "../../utils/divider";
import Heading from "../../components/heading/Heading";
import customers from "../../utils/customers";

function CustomerPage() {
  const customerRows = customers.map((customer) => (
    <tr key={customer.key}>
      <td className="td-data">{customer.school}</td>
      <td className="td-data">{customer.place}</td>
      <td className="td-data">{customer.year}</td>
    </tr>
  ));

  return (
    <div className="customer-page">
      <Navbar />
      <div className="customer-page-body">
        {divider}
        <Heading>Our Customers</Heading>
        <div className="customer-page-content">
          <table>
            <tbody>
              <tr>
                <td className="td-heading">
                  <b>School</b>
                </td>
                <td className="td-heading">
                  <b>Place</b>
                </td>
                <td className="td-heading">
                  <b>Year</b>
                </td>
              </tr>
              {customerRows}
            </tbody>
          </table>
        </div>
      </div>
      <div className="customer-page-footer">
        <Footer />
      </div>
    </div>
  );
}

export default CustomerPage;
