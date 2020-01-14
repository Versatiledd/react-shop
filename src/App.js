import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

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
                <Route exact path="/contact" component={Contact} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="container">
      <div className="wrapper">
        <h4>
          <b> Creative Code </b> lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Earum quos saepe sint itaque, facere voluptatem
          perferendis excepturi exercitationem in ad asperiores aperiam et minus
          accusamus sequi deleniti ut ratione error.
        </h4>
      </div>
    </div>
  );
}
function Solutions() {
  return <p>Rozwiązania techniczne</p>;
}
function Contact() {
  return <p>Skontaktuj się z nami</p>;
}

function Shop() {
  return <p>To jest sklep internetowy, serdecznie zapraszamy</p>;
}

export default App;
