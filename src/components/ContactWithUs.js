import React from "react";
import { ProductConsumer } from "../context/context";
import "../contact-components/contact.css";
export default function ContactWithUs() {
  return (
    <ProductConsumer>
      {value => {
        const {
          formName,
          formEmail,
          formNumber,
          formSubject,
          formMessage,
          handleChangeForm,
          handleSubmitForm
        } = value;
        return (
          <div className="contact-section">
            <span className="service-title">WRITE US A MESSAGE</span>
            <h3 className="service-main-title contact-additional">
              Get in touch with Us
            </h3>
            <form action="" onSubmit={handleSubmitForm}>
              <div className="form-container">
                <div className="form-child">
                  <label htmlFor="" className="label-style">
                    Name
                  </label>
                  <input
                    type="text"
                    name="formName"
                    id=""
                    className="input-style"
                    value={formName}
                    onChange={handleChangeForm}
                  />
                </div>
                <div className="form-child">
                  <label htmlFor="" className="label-style">
                    E-mail adress
                  </label>
                  <input
                    type="text"
                    name="formEmail"
                    id=""
                    className="input-style"
                    value={formEmail}
                    onChange={handleChangeForm}
                  />
                </div>
                <div className="form-child">
                  <label htmlFor="" className="label-style">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="formNumber"
                    id=""
                    className="input-style"
                    value={formNumber}
                    onChange={handleChangeForm}
                  />
                </div>
                <div className="form-child">
                  <label htmlFor="" className="label-style">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="formSubject"
                    id=""
                    className="input-style"
                    value={formSubject}
                    onChange={handleChangeForm}
                  />
                </div>
              </div>
              <div className="form-child">
                <label htmlFor="" className="text-label">
                  Message
                </label>
                <textarea
                  name="formMessage"
                  id=""
                  cols="30"
                  rows="10"
                  className="text-message"
                  value={formMessage}
                  onChange={handleChangeForm}
                ></textarea>
              </div>
              <button className="btn-submit">Wyślij wiadomość</button>
            </form>
          </div>
        );
      }}
    </ProductConsumer>
  );
}
