import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { Link } from "react-router-dom";
// import Routes from "./Routes";
import { FiSearch } from "react-icons/fi";
import { FiSmartphone } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { BiTime } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FaPinterest } from "react-icons/fa";

function Contact() {
  return (
    <div>
      <div
        className="swim-about-head"
        style={{ backgroundImage: "url('images/bg/heading_02.jpg')" }}
      >
        <nav className="swim-nav navbar navbar-expand-lg">
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
              <div className="d-flex">
                <FiSearch className="swim-search" />
                <button className="btn btn-outline-success" type="submit">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </nav>
        <div className="swim-head-inside">
          <span>SwimAcademy</span>
          <span>·</span>
          <span>Home</span>
        </div>
        <div className="d-flex justify-content-center align-items-center text-white">
          <h1>Home</h1>
        </div>
      </div>
      <div className="swim-footer">
        <div className="footer-top">
          <h6>CLASS FOR YOU</h6>
          <h2>
            Need Help Figuring Out Which Class Is Right for You or You Child?
          </h2>
          <button className="btn btn-outline-reverse">
            Find a class for me
          </button>
        </div>
        <div className="footer-middle">
          <div>
            <h3 className="text-white">Swim Academy</h3>
            <p className="fm-desc">
              Swim Academy are passionate about sports and physical activity.
              Our school was created out of passion for water sports and
              personal development.
            </p>
            <div className="d-flex align-items-center">
              <span className="fm-phone">
                <FiSmartphone />
              </span>
              <div>
                <h6>Don't hesitate to call</h6>
                <h6>252-151-2053</h6>
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex">
              <GoLocation className="loc" />
              <div>
                <h6 className="text-white mb-4">Location</h6>
                <h6>Long Avenue 36</h6>
                <h6>New Jersey, CA 96120</h6>
              </div>
            </div>
            <div className="d-flex mt-5">
              <BiTime className="loc" />
              <div>
                <h6 className="text-white mb-4">Hours</h6>
                <h6>Mon-Fri: 8:00 - 22:00</h6>
                <h6>Sat: 8:00 - 21:00</h6>
                <h6>Sun: 8:00 - 20:00</h6>
              </div>
            </div>
          </div>
          <div>
            <h6 className="text-white mb-4">Explore</h6>
            <h6 title="Home" className="footer-links">
              Home
            </h6>
            <h6 title="About Us" className="footer-links">
              About Us
            </h6>
          </div>
          <div>
            <h6 className="text-white mb-4">Resources</h6>
            <h6 title="Contact" className="footer-links">
              Contact
            </h6>
            <h6 title="Our Services" className="footer-links">
              Our Services
            </h6>
          </div>
          <div>
            <h6 className="text-white mb-4">Latest From Blog</h6>
            <h6
              title="Discover Benefits of Swimming Lessons for Kids"
              className="footer-links"
            >
              Discover Benefits of Sw...
            </h6>
            <h6
              title="How Swimming Lessons Help Kids With Stress & Anxiety"
              className="footer-links"
            >
              How Swimming Less...
            </h6>
          </div>
        </div>
        <div className="footer-end">
          <p>
            © Copyright 2021{" "}
            <span className="text-white footer-links">SwimAcademy</span> Theme
            By <span className="text-white footer-links">QuanticaLabs</span>
          </p>
          <div>
            <span className="social-icons">
              <FaTwitter />
            </span>
            <span className="social-icons">
              <TiSocialFacebook />
            </span>
            <span className="social-icons">
              <FaPinterest />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
