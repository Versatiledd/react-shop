import React from "react";
import { Link } from "react-router-dom";
import "../home-styles/whatwedo.css";
export default function WhatWeDo() {
  return (
    <section className="section-do">
      <div className="container-section">
        <div className="description">
          <h2 className="title-what-we-do">Check our services and expertise</h2>
          <p className="description_paragraph">
            Nam liber tempor cum soluta nobis eleifend option congue nihil
            imperdiet doming id quod mazim placerat facer possim assum. Lorem
            ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
            nibh euismod tincidunt.
          </p>
          <button className="do-btn">
            <Link to="/shop" className="do-btn-link">
              Shop
            </Link>
          </button>
        </div>
        <div className="container-image">
          <img src="../img/whatWeDo.webp" alt="" />
        </div>
      </div>
    </section>
  );
}
