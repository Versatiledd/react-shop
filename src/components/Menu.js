import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu-hamburger">
      <div className="menu-background"></div>
      <div className="menu-layer">
        <div className="city-bg"></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link to="/solutions">Solutions</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
              <div className="message">
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
