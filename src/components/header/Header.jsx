import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Routes from "./Routes";
import { FiSearch } from "react-icons/fi";

export default class Header extends Component {
  render() {
    return (
      <nav className="swim-nav navbar navbar-dark navbar-expand-lg">
        <div className="container-fluid">
          <img src="images/logo/logo-alt.png" alt="" className="swim-logo" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/">
                  <span className="nav-link">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about-us">
                  <span className="nav-link">About Us</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/our-services">
                  <span className="nav-link">Our Services</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact">
                  <span className="nav-link">Contact</span>
                </Link>
              </li>
            </ul>
            <div className="d-flex nav-margin">
              <FiSearch className="swim-search" />
              <button className="btn btn-outline-success" type="submit">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
