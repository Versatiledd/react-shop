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
                <Route exact path="/" component={Home} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return <p>To będzie strona główna naszej aplikacji</p>;
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
