import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import Menu from "./Menu";

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
    }, 1000);
  };
  return (
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
            </div>
          </div>
        </div>
      </div>
      <Menu state={state} />
    </header>
  );
};

export default withRouter(Header);
