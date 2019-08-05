import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import landing from "./Pages/landing";
import NavBar from "./Components/navBar";
import login from "./Pages/login";
import Products from "./Pages/products";
import { ContextController } from "./Config/context";

function App() {
  return (
    <ContextController>
      <Router>
        <>
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={landing} />
              <Route exact path="/products" component={Products} />
              <Route exact path="/login" component={login} />
            </Switch>
          </div>
        </>
      </Router>
    </ContextController>
  );
}

export default App;
