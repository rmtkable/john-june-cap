import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <header>
        <div class="navbar-fixed-top top-nav">
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
              <li className="navbar-item dropdown">
                <Link className="dropbtn">Attractions</Link>
                <div className="dropdown-content">
                  <Link className="dropdown" to="/Breweries">
                    Breweries
                  </Link>
                  <Link className="dropdown" to="/Food">
                    Food
                  </Link>
                  <Link className="dropdown" to="/Entertainment">
                    Entertainment
                  </Link>
                  <Link className="dropdown" to="/ArtsAndMuseums">
                    Arts & Museums
                  </Link>
                </div>
              </li>
              <li class="navbar-item">
                <Link to="/contact" class="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}
