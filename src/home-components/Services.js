import React from "react";
import { Link } from "react-router-dom";
import "../home-styles/services.css";
export default function Services() {
  return (
    <div className="section-service">
      <div className="wrapper-service">
        <div className="service-image">
          <img src="../img/service.webp" alt="" />
        </div>
        <div className="service-description">
          <span className="service-title">our services</span>
          <h2 className="service-main-title">
            It is our passion to create high quality
          </h2>
          <p className="service-describe">
            Nam liber tempor cum soluta nobis eleifend option congue nihil
            imperdiet doming id quod mazim placerat facer possim assum. Lorem
            ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
            nibh euismod tincidunt.
          </p>
          <button className="do-btn">
            <Link to="/solutions" className="do-btn-link">
              Solutions
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
