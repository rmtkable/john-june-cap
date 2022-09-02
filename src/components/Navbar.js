import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'

export default class Navbar extends Component {


    render() {
      return (
        <header>
          <nav className="navbar navbar-fixed-top navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand">Cincinnati</Link>
            <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
              <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="navbar-item">
              <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="navbar-item">
              <Link to="/attractions" className="nav-link">Attractions</Link>
              </li>
              <li className="navbar-item">
              <Link to="/contact" className="nav-link">Contact</Link>
              </li>
            </ul>
            </div>
          </nav>
        </header>
      );
    }
  }

  <Navbar style={{backgroundColor: "#071740", position: "sticky"}} variant="dark" fixed="top"></Navbar>