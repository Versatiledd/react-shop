import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import SingleProductPage from "./pages/SingleProduct";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/solutions" component={Solutions} />
                <Route exact path="/shop" component={Shop} />
                <Route
                  exact
                  path="/product/:id"
                  component={SingleProductPage}
                />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/contact" component={Contact} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
