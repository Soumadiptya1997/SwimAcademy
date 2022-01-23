import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";
import { Link } from "react-router-dom";
// import Routes from "./Routes";
import { FiSearch } from "react-icons/fi";
import { FaFolder } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { FaFolderOpen } from "react-icons/fa";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
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
        style={{ backgroundImage: "url('images/bg/heading_06.jpg')" }}
      >
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
        <div className="swim-head-inside">
          <span>SwimAcademy</span>
          <span>·</span>
          <span>Contact</span>
        </div>
        <div className="d-flex justify-content-center align-items-center text-white">
          <h1>Contact</h1>
        </div>
      </div>
      <div className="contact-2nd">
        <div className="c2-cards">
          <div className="c2-card">
            <img src="images/icons/icon-10.png" alt="" />
            <h5>Office Address</h5>
            <p>Long Avenue 36</p>
            <p>New Yersey, CA 96120</p>
          </div>
          <div className="c2-card">
            <img src="images/icons/icon-11.png" alt="" />
            <h5>Pool Address</h5>
            <p>Mohave Street 7</p>
            <p>New Yersey, CA 96120</p>
          </div>
          <div className="c2-card">
            <img src="images/icons/icon-12.png" alt="" />
            <h5>Contact Details</h5>
            <p>Email: learntoswim@office.au</p>
            <p>Call us: 252-151-2053</p>
          </div>
          <div className="c2-card">
            <img src="images/icons/icon-13.png" alt="" />
            <h5>Work Hours</h5>
            <p>Monday-Friday: 08:00-20:00</p>
            <p>Saturday-Sunday: 08:00-21:00</p>
          </div>
        </div>
      </div>
      <div className="contact-3rd">
        <div className="c3-left">
          <h6 className="c3-1st">INTERESTED?</h6>
          <h2 className="c3-head">Get in Touch With Us</h2>
          <p className="c3-desc">
            We read each e-mail and reply within a maximum of 2 business days.
            Please enter correct e-mail address so that we can back to you.
          </p>
          <div style={{ width: "fit-content" }}>
            <div className="c3-form">
              <div className="c3f-left">
                <div>
                  <label>YOUR NAME *</label>
                  <input type="text" />
                </div>
                <div className="c3f-border">
                  <label>E-MAIL ADDRESS *</label>
                  <input type="text" />
                </div>
                <div>
                  <label>PHONE NUMBER (OPTIONAL)</label>
                  <input type="text" />
                </div>
              </div>
              <div className="c3f-right">
                <label>MESSAGE</label>
                <textarea cols="30" rows="7"></textarea>
              </div>
            </div>
            <div style={{ width: "fit-content" }} className="mx-auto">
              <button className="btn btn-outline-reverse" type="submit">
                Send Form
              </button>
            </div>
          </div>
        </div>
        <div className="c3-right">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193446.97862788432!2d-74.36334751628588!3d40.74862747625784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c252db9503b113%3A0xe81f3d3b0ac8ebc6!2sDayton%2C%20Newark%2C%20NJ%2C%20USA!5e0!3m2!1sen!2sin!4v1642625372614!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            title="Weequahic Park"
          ></iframe>
        </div>
      </div>
      <div className="contact-4th">
        <h6 className="c4-1st">WE ROCK.</h6>
        <h2 className="c4-head">Explore Classes</h2>
        <p className="c4-desc">
          Whether you want to introduce your infant to the water or are an adult
          looking to learn to swim, we offer a variety of swimming classes for
          all skill levels.
        </p>
        <div className="c4-cards">
          <div className="c4-card">
            <div className="c4-top">
              <div className="price">
                <h5>$300.00</h5>
                <p>
                  <small>/ person</small>
                </p>
              </div>
              <div className="c4c-img">
                <img src="images/pics/image_33.jpg" alt="" />
              </div>
            </div>
            <div className="c4c-body">
              <p className="c4cb-1st">
                <FaFolder /> <span>Swimming Course</span>
              </p>
              <h4>Little Frogs: 18-36 Months</h4>
              <p>
                Classes conducted with adults in the water. The little ones
                start their adventure in the water with the use of games and
                activities.
              </p>
              <div className="c4cb-div">
                <div style={{ width: "42%" }}></div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="c4cb-foot">
                  <MdPeople />
                  <span>5 enrolled</span>
                </div>
                <div className="c4cb-foot">
                  <FaFolderOpen />
                  <span>32x lesson</span>
                </div>
              </div>
            </div>
          </div>
          <div className="c4-card d-none d-md-block">
            <div className="c4-top">
              <div className="price">
                <h5>$350.00</h5>
                <p>
                  <small>/ person</small>
                </p>
              </div>
              <div className="c4c-img">
                <img src="images/pics/image_32.jpg" alt="" />
              </div>
            </div>
            <div className="c4c-body">
              <p className="c4cb-1st">
                <FaFolder /> <span>Swimming Course</span>
              </p>
              <h4>Sea Turtles: 3-4 Years</h4>
              <p>
                Classes developing awareness of the aquatic environment. Without
                the parent's presence in the water.
              </p>
              <div className="c4cb-div">
                <div style={{ width: "17%" }}></div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="c4cb-foot">
                  <MdPeople />
                  <span>2 enrolled</span>
                </div>
                <div className="c4cb-foot">
                  <FaFolderOpen />
                  <span>28x lesson</span>
                </div>
              </div>
            </div>
          </div>
          <div className="c4-card d-none d-md-block">
            <div className="c4-top">
              <div className="price">
                <h5>$490.00</h5>
                <p>
                  <small>/ person</small>
                </p>
              </div>
              <div className="c4c-img">
                <img src="images/pics/image_34.jpg" alt="" />
              </div>
            </div>
            <div className="c4c-body">
              <p className="c4cb-1st">
                <FaFolder /> <span>Swimming Course</span>
              </p>
              <h4>Sharks: 4-12 Years</h4>
              <p>
                Learning beginner strokes on their backs and fronts. Classes
                without the participation of adults in the water.
              </p>
              <div className="c4cb-div">
                <div style={{ width: "80%" }}></div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="c4cb-foot">
                  <MdPeople />
                  <span>4 enrolled</span>
                </div>
                <div className="c4cb-foot">
                  <FaFolderOpen />
                  <span>28x lesson</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="c4-arrows">
          <span className="c4-arr">
            <BsArrowLeft />
          </span>
          <span className="c4-arr">
            <BsArrowRight />
          </span>
        </div>
        <p className="c4-last">
          See more class. Go to the <span>full list</span>
        </p>
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
