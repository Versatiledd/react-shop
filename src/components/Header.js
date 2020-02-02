import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { ProductConsumer } from "../context/context";
import Menu from "./Menu";
import SideCart from "../components/SideCart";
import "../styles/shop-icon.css";

const Header = ({ history }) => {
  const [state, setState] = useState({
    initial: false,
    isClicked: null,
    nameMenu: "Menu"
  });
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    history.listen(() => {
      setState({
        isClicked: false,
        nameMenu: "Menu"
      });
    });
  });
  const handleMenu = () => {
    disabledMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        isClicked: true,
        nameMenu: "Close"
      });
    } else if (state.isClicked === true) {
      setState({
        isClicked: !state.isClicked,
        nameMenu: "Menu"
      });
    } else if (state.isClicked === false) {
      setState({
        isClicked: !state.isClicked,
        nameMenu: "Close"
      });
    }
  };

  const disabledMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 800);
  };
  return (
    <ProductConsumer>
      {value => {
        const { handleCart } = value;
        return (
          <>
            <header>
              <div className="container">
                <div className="wrapper">
                  <div className="wrapper-logo">
                    <div className="logo">
                      <Link to="/">Creative Code</Link>
                    </div>
                    <div className="menu">
                      <button disabled={disabled} onClick={handleMenu}>
                        Menu
                      </button>
                      <div className="container-icon">
                        <TiShoppingCart
                          className="shop-icon"
                          onClick={handleCart}
                        ></TiShoppingCart>
                        <div className="addToShop">{value.cartItems}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Menu state={state} />
              <SideCart value={value} />
            </header>
          </>
        );
      }}
    </ProductConsumer>
  );
};

export default withRouter(Header);
