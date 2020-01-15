import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

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
    }
  }, [state]);

  const staggerEffect = (dom1, dom2) => {
    gsap.from([dom1, dom2], {
      duration: 0.9,
      height: 0,
      ease: "Power1.easeOut",
      transformOrigin: "right top",
      stagger: {
        amount: 0.1
      }
    });
  };
  return (
    <div className="menu-hamburger" ref={el => (menu = el)}>
      <div className="menu-background" ref={el => (menuBg = el)}></div>
      <div className="menu-layer" ref={el => (secondMenu = el)}>
        <div className="city-bg"></div>
        <div className="container">
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere, eum rerum. Blanditiis laborum ipsum facilis?
                  Aspernatur consequatur accusamus debitis dignissimos magnam
                  voluptate tempore libero quisquam!
                </p>
              </div>
              <div className="location">
                Kraje : <span>Polska</span>
                <span>Tokio</span>
                <span>Iran</span>
                <span>Portugalia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
