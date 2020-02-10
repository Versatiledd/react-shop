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
          <label htmlFor="" className="label-style">
            Name
          </label>
          <input type="text" name="" id="" className="input-style" />
        </div>
        <div className="form-child">
          <label htmlFor="" className="label-style">
            E-mail adress
          </label>
          <input type="text" name="" id="" className="input-style" />
        </div>
        <div className="form-child">
          <label htmlFor="" className="label-style">
            Phone Number
          </label>
          <input type="text" name="" id="" className="input-style" />
        </div>
        <div className="form-child">
          <label htmlFor="" className="label-style">
            Subject
          </label>
          <input type="text" name="" id="" className="input-style" />
        </div>
      </form>
      <div className="form-child">
        <label htmlFor="" className="text-label">
          Message
        </label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="text-message"
        ></textarea>
      </div>
    </div>
  );
}
