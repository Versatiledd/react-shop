import React, { useState, useRef, useEffect } from "react";
import { TweenLite, Power3 } from "gsap";
import "../home-styles/clients.css";
const testimonals = [
  {
    name: "Mateusz Dudziec",
    title: "React developer",
    image: "../img/image-one.jpg",
    description:
      "Nam liber tempor cum soluta nobis eleifend option congue nihil"
  },
  {
    name: "Ania Jarosz",
    title: "Node developer",
    image: "../img/image-two.jpg",
    description:
      "Nam liber tempor cum soluta nobis eleifend option congue nihil"
  },
  {
    name: "Patrycja Pomorska",
    title: "Full stuck developer",
    image: "../img/image-three.jpg",
    description:
      "Nam liber tempor cum soluta nobis eleifend option congue nihil"
  }
];

export default function Clients() {
  return (
    <section className="clients-section">
      <div className="clients-description">
        <h2 className="service-main-title">What our clients say about us</h2>
        <p className="service-describe">
          Nam liber tempor cum soluta nobis eleifend option congue nihil
          imperdiet doming id quod mazim placerat facer possim assum. Lorem
          ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
          nibh euismod tincidunt.
        </p>
      </div>
      <div className="testimonals-container">
        <div className="arrow-left">
          <span>
            <img src="../img/left-arrow.svg" alt="left arrow" />
          </span>
        </div>
        <div className="container-content">
          <div className="image-first">
            <ul>
              <li>
                <img
                  src={testimonals[0].image}
                  alt={testimonals[0].name}
                  className="img-width"
                />
              </li>
              <li>
                <img
                  src={testimonals[1].image}
                  alt={testimonals[1].name}
                  className="img-width"
                />
              </li>
              <li>
                <img
                  src={testimonals[2].image}
                  alt={testimonals[2].name}
                  className="img-width"
                />
              </li>
            </ul>
          </div>
          <div className="content">
            <ul>
              <li>
                <div className="short-info">
                  <p className="description">{testimonals[0].description}</p>
                  <h3 className="name">{testimonals[0].name}</h3>
                  <h4 className="title-job">{testimonals[0].title}</h4>
                </div>
              </li>
              <li>
                <div className="short-info">
                  <p className="description">{testimonals[1].description}</p>
                  <h3 className="name">{testimonals[1].name}</h3>
                  <h4 className="title-job">{testimonals[1].title}</h4>
                </div>
              </li>
              <li>
                <div className="short-info">
                  <p className="description">{testimonals[2].description}</p>
                  <h3 className="name">{testimonals[2].name}</h3>
                  <h4 className="title-job">{testimonals[2].title}</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="arrow-right">
          <span>
            <img src="../img/right-arrow.svg" alt="left arrow" />
          </span>
        </div>
      </div>
    </section>
  );
}
