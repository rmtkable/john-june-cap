import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <header>
        <nav class="navbar-fixed-top top-nav">
          <Link to="/" class="navbar-brand">
            Cincinnati, Ohio
          </Link>
          <div>
            <input id="menu-toggle" type="checkbox" />
            <label class="menu-button-container" for="menu-toggle">
              <div class="menu-button"></div>
            </label>
            <ul class="menu">
              <li class="navbar-item">
                <Link to="/" class="nav-link">
                  Home
                </Link>
              </li>
              <li class="navbar-item">
                <Link to="/about" class="nav-link">
                  About
                </Link>
              </li>
              <li class="navbar-item">
                <Link to="/attractions" class="nav-link">
                  Attractions
                </Link>
              </li>
              <li class="navbar-item">
                <Link to="/contact" class="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
