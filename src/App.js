import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
// pages
import Home from "./Pages/Home";
import About from "./Pages/About";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <div className="wrapper">
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </div>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
