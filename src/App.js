import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Attractions from "./pages/attractions";
<<<<<<< HEAD
import brewsBars, { Brewsbars } from "./pages/brewsBars";
import Food from "./pages/food";
=======
import { Brewsbars } from "./pages/brewsBars";
import { Entertainment } from "./pages/entertainment";
>>>>>>> 5d7c595c0077d1e4341cb3bde57a405d88d2f44b

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/attractions" component={Attractions} />
          <Route path="/brewsBars" component={Brewsbars} />
<<<<<<< HEAD
          <Route path="/food" component={Food} />
=======
          <Route path="/entertainment" component={Entertainment} />
>>>>>>> 5d7c595c0077d1e4341cb3bde57a405d88d2f44b
          <Route path="/contact" component={Contact} />
          <Footer />
        </Router>
      </div>
    );
  }
}
