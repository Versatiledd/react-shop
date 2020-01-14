import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="wrapper-logo">
            <div className="logo">
              <Link to="/">Creative Code</Link>
            </div>
            <div className="menu">
              <button>Menu</button>
            </div>
          </div>
        </div>
      </div>
      <Menu />
    </header>
  );
};

export default Header;
