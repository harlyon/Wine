import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import landing from "./Pages/landing";
import products from "./Pages/products";
import NavBar from "./Components/navBar";
import login from "./Pages/login";

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={landing} />
            <Route exact path="/products" component={products} />
            <Route exact path="/login" component={login} />
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default App;
