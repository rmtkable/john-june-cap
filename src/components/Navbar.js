import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <header>
        <nav class="navbar navbar-sticky-top navbar-dark navbar-expand-lg">
          <Link to="/" class="navbar-brand">
            Cincinnati
          </Link>
          <div class="collpase navbar-collapse">
            <ul class="navbar-nav mr-auto">
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
