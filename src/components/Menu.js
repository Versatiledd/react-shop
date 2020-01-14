import React from "react";

const Menu = () => {
  return (
    <div className="menu-hamburger">
      <div className="manu-background"></div>
      <div className="manu-layer">
        <div className="city-bg"></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link to="/solutions"></Link>
                  </li>
                  <li>
                    <Link to="/shop"></Link>
                  </li>
                  <li>
                    <Link to="/contact"></Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
