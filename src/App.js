import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          {/* <Route path="/attractions" component={Attractions} /> */}
          <Route path="/contact" component={Contact} />
          <Footer />
        </Router>
      </div>
    );
  }
}
