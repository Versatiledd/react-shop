import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import AI from "../images/AI.jpg";
import Deploy from "../images/deploy.jpg";
import DataScience from "../images/datascience.jpg";
import Security from "../images/security.jpg";

const ItSection = [
  {
    name: "AI",
    image: AI
  },
  {
    name: "Deploy",
    image: Deploy
  },
  {
    name: "DataScience",
    image: DataScience
  },
  {
    name: "Security",
    image: Security
  }
];
const Menu = ({ state }) => {
  let menu = useRef(null);
  let secondMenu = useRef(null);
  let menuBg = useRef(null);
  let cityBg = useRef(null);
  let number1 = useRef(null);
  let number2 = useRef(null);
  let number3 = useRef(null);
  let message = useRef(null);

  useEffect(() => {
    if (state.isClicked === false) {
      gsap.to([secondMenu, menuBg], {
        duration: 0.9,
        height: 0,
        ease: "Power1.easeOut",
        stagger: {
          amount: 0.07
        }
      });
      gsap.to(menu, {
        duration: 1,
        css: { display: "none" }
      });
    } else if (
      state.isClicked === true ||
      (state.isClicked === true && state.initial === null)
    ) {
      gsap.to(menu, {
        duration: 0,
        css: { display: "block" }
      });
      gsap.to([menuBg, secondMenu], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      staggerEffect(menuBg, secondMenu);
      fadeInUp(message);
    }
  }, [state]);

  const staggerEffect = (dom1, dom2) => {
    gsap.from([dom1, dom2], {
      duration: 0.9,
      height: 0,
      ease: "Power1.easeOut",
      transformOrigin: "right top",
      skewY: 2.5,
      stagger: {
        amount: 0.1
      }
    });
  };
  const fadeInUp = dom1 => {
    gsap.from(dom1, {
      y: 70,
      duration: 1,
      opacity: 0,
      delay: 0.3,
      ease: "Power1.easeOut"
    });
  };

  const handleIT = it => {
    gsap.to(cityBg, {
      duration: 0,
      background: `url(${it}) center center`
    });
    gsap.to(cityBg, {
      duration: 0.6,
      opacity: 1,
      ease: "Power1.easeOut"
    });
    gsap.from(cityBg, {
      duration: 0.6,
      transformOrigin: "right top"
    });
  };
  const removeItSection = () => {
    gsap.to(cityBg, {
      duration: 0.6,
      opacity: 0
    });
  };
  return (
    <div className="menu-hamburger" ref={el => (menu = el)}>
      <div className="menu-background" ref={el => (menuBg = el)}></div>
      <div className="menu-layer" ref={el => (secondMenu = el)}>
        <div className="city-bg" ref={el => (cityBg = el)}></div>
        <div className="wrapper">
          <div className="menu-links">
            <nav>
              <ul>
                <li>
                  <Link to="/solutions" ref={el => (number1 = el)}>
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/shop" ref={el => (number2 = el)}>
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to="/contact" ref={el => (number3 = el)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="message" ref={el => (message = el)}>
              <h4>Our dreams</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                eum rerum. Blanditiis laborum ipsum facilis? Aspernatur
                consequatur accusamus debitis dignissimos magnam voluptate
                tempore libero quisquam!
              </p>
            </div>
            <div className="location">
              {ItSection.map(el => (
                <span
                  key={el.name}
                  onMouseEnter={() => handleIT(el.image)}
                  onMouseOut={removeItSection}
                >
                  {el.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
