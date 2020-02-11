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
  let imagesList = useRef(null);
  let testimonalsList = useRef(null);
  const imageWidth = 400;

  const [state, setState] = useState({
    activeOne: true,
    activeTwo: false,
    activeThree: false
  });

  useEffect(() => {
    TweenLite.to(testimonalsList.children[0], 0, {
      opacity: 1
    });
  });

  const rightSlide = (index, time, multiplite = 1) => {
    TweenLite.to(imagesList.children[index], time, {
      x: imageWidth * multiplite,
      ease: Power3.easeIn
    });
  };

  const leftSlide = (index, time, multiplite = 1) => {
    TweenLite.to(imagesList.children[index], time, {
      x: -imageWidth * multiplite,
      ease: Power3.easeIn
    });
  };

  const fadeOut = (index, duration) => {
    TweenLite.to(testimonalsList.children[index], duration, {
      opacity: 0
    });
  };

  const fadeIn = (index, duration, delay) => {
    TweenLite.to(testimonalsList.children[index], duration, {
      opacity: 1,
      delay: delay
    });
  };

  const nextSlide = () => {
    if (imagesList.children[0].classList.contains("active")) {
      setState({
        activeOne: false,
        activeTwo: true
      });
      leftSlide(0, 1);
      leftSlide(1, 1);
      fadeOut(0, 1);
      fadeIn(1, 1, 1.2);
    } else if (imagesList.children[1].classList.contains("active")) {
      setState({
        activeTwo: false,
        activeThree: true
      });
    } else if (imagesList.children[2].classList.contains("active")) {
      setState({
        activeOne: true,
        activeThree: false
      });
    }
  };

  const prevSlide = () => {
    if (imagesList.children[0].classList.contains("active")) {
      setState({
        activeOne: false,
        activeThree: true
      });
      leftSlide(2, 0, 3);
      leftSlide(2, 1, 2);
      rightSlide(0, 1);
      rightSlide(1, 1);
    } else if (imagesList.children[1].classList.contains("active")) {
      setState({
        activeTwo: false,
        activeOne: true
      });
    } else if (imagesList.children[2].classList.contains("active")) {
      setState({
        activeTwo: true,
        activeThree: false
      });
    }
  };

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
        <div className="arrow-left" onClick={prevSlide}>
          <span>
            <img src="../img/left-arrow.svg" alt="left arrow" />
          </span>
        </div>
        <div className="container-content">
          <div className="image-first">
            <ul ref={el => (imagesList = el)}>
              <li className={state.activeOne ? "active" : ""}>
                <img
                  src={testimonals[0].image}
                  alt={testimonals[0].name}
                  className="img-width"
                />
              </li>
              <li className={state.activeTwo ? "active" : ""}>
                <img
                  src={testimonals[1].image}
                  alt={testimonals[1].name}
                  className="img-width"
                />
              </li>
              <li className={state.activeThree ? "active" : ""}>
                <img
                  src={testimonals[2].image}
                  alt={testimonals[2].name}
                  className="img-width"
                />
              </li>
            </ul>
          </div>
          <div className="content">
            <ul ref={el => (testimonalsList = el)}>
              <li className={state.activeOne ? "active" : ""}>
                <div className="short-info">
                  <p className="description">{testimonals[0].description}</p>
                  <h3 className="name">{testimonals[0].name}</h3>
                  <h4 className="title-job">{testimonals[0].title}</h4>
                </div>
              </li>
              <li className={state.activeTwo ? "active" : ""}>
                <div className="short-info">
                  <p className="description">{testimonals[1].description}</p>
                  <h3 className="name">{testimonals[1].name}</h3>
                  <h4 className="title-job">{testimonals[1].title}</h4>
                </div>
              </li>
              <li className={state.activeThree ? "active" : ""}>
                <div className="short-info">
                  <p className="description">{testimonals[2].description}</p>
                  <h3 className="name">{testimonals[2].name}</h3>
                  <h4 className="title-job">{testimonals[2].title}</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="arrow-right" onClick={nextSlide}>
          <span>
            <img src="../img/right-arrow.svg" alt="left arrow" />
          </span>
        </div>
      </div>
    </section>
  );
}
