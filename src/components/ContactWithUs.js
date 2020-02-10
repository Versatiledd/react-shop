import React from "react";
import "../contact-components/contact.css";
export default function ContactWithUs() {
  return (
    <div className="contact-section">
      <span className="service-title">WRITE US A MESSAGE</span>
      <h3 className="service-main-title contact-additional">
        Get in touch with Us
      </h3>
      <form action="" className="form-container">
        <div className="form-child">
          <label htmlFor="">Name</label>
          <input type="text" name="" id="" />
        </div>
        <div className="form-child">
          <label htmlFor="">E-mail adress</label>
          <input type="text" name="" id="" />
        </div>
        <div className="form-child">
          <label htmlFor="">Phone Number</label>
          <input type="text" name="" id="" />
        </div>
        <div className="form-child">
          <label htmlFor="">Subject</label>
          <input type="text" name="" id="" />
        </div>
      </form>
      <div className="form-child">
        <label htmlFor="">Message</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
    </div>
  );
}
