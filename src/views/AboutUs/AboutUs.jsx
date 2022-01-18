import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutUs.css";
import { Link } from "react-router-dom";
// import Routes from "./Routes";
import { FiSearch } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { BiTime } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FaPinterest } from "react-icons/fa";

function AboutUs() {
  return (
    <div>
      <div
        className="swim-about-head"
        style={{ backgroundImage: "url('images/bg/heading_08.jpg')" }}
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
                  <Link to="/">
                    <span className="nav-link">Our Services</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <span className="nav-link">Contact</span>
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
          <span>About Us</span>
        </div>
        <div className="d-flex justify-content-center align-items-center text-white">
          <h1>About Us</h1>
        </div>
      </div>
      <div className="about-2nd">
        <div className="about-2nd-images">
          <img
            src="images/pics/image_49.jpg"
            alt=""
            style={{ marginTop: 50 }}
          />
          <img
            src="images/pics/image_48.jpg"
            alt=""
            style={{ marginBottom: 50 }}
          />
          <div className="about-2nd-card">
            <img src="images/icons/icon-1.png" alt="" />
            <h5>Swimming classes are held in small groups</h5>
          </div>
        </div>
        <div className="about-2nd-content">
          <h6 className="c1st">FIND OUT MORE</h6>
          <h2 className="c2nd">
            Health, Safety, and Learning Through Having Fun
          </h2>
          <p>
            The Swim Academy school conducts classes for both children and
            adults in the field of swimming, diving as well as aqua aerobics.
            Perfectly trained staff in a calm and pleasant atmosphere will make
            each participant of the course overcome the fear of water and learn
            various swimming techniques so that they can choose their favorite
            one.
          </p>
          <h5 className="c4th">Why you should trust us?</h5>
          <div className="c5th">
            <div className="c6th">
              <div>
                <h1>29</h1>
                <h6>Experienced Trainers</h6>
              </div>
              <span className="circle"></span>
            </div>
            <div className="c6th">
              <div>
                <h1>456</h1>
                <h6>Competitions Won</h6>
              </div>
              <span className="circle"></span>
            </div>
            <div className="c6th">
              <div>
                <h1>96%</h1>
                <h6>Recommends Our School</h6>
              </div>
              <span className="circle"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="about-3rd">
        <div className="a3-content">
          <h6 className="c1st">SAFE AND FUN</h6>
          <h2 className="a3-2nd">
            What Makes Swim Academy Stand Out From the Others
          </h2>
          <div className="a3-tabs">
            <h6>Learn while having fun</h6>
            <h6>Small classes</h6>
            <h6>Great team</h6>
          </div>
          <p style={{ fontWeight: 600 }}>
            The priority in our school is taking care of the health and safety
            of users and learning through fun. That is why parents are so eager
            to enroll their children in our school.
          </p>
          <p>
            We understand that as a parent, your child's safety is paramount. At
            Swim Academy, we believe your swimmers deserve to be in the best
            hands at all times, which is why our instructors go through an
            extensive recruitment process and a comprehensive training period.
            In addition, we always try to keep our classes small and provide a
            maximum number of instructors.
          </p>
          <button className="btn btn-outline-reverse">Learn more</button>
        </div>
        <div className="a3-images">
          <img src="images/pics/image_31.jpg" alt="" />
          <img src="images/pics/image_32.jpg" alt="" className="a3-left" />
          <img src="images/pics/image_30.jpg" alt="" className="a3-right" />
        </div>
      </div>
      <div className="about-4th">
        <h6 className="c1st">TESTIMONIALS</h6>
        <h2 className="a4-head">Client's Opinion</h2>
        <div className="a4-cards">
          <div>
            <p>
              <FaQuoteLeft className="quote-left" />
              My daughter dreaded swimming lessons until we found Swim Academy
              and their friendly, engaging staff. Now my daughter asks daily if
              it's swim lesson day. And, she's learning faster than ever! Thank
              you for your wonderful program.
            </p>
            <div className="d-flex align-items-center mt-4">
              <img
                src="images/pics/image_52.jpg"
                alt=""
                className="a4-review"
              />
              <div>
                <h6 className="font-weight-bold">Alice Hampton</h6>
                <h6
                  className="text-muted font-weight-light m-0"
                  style={{ fontSize: 13 }}
                >
                  ATTENDANT
                </h6>
              </div>
            </div>
          </div>
          <div>
            <p>
              <FaQuoteLeft className="quote-left" />
              The most kind, courteous, fun-loving staff of any facility we have
              come across. It takes a special person to work with kids and teach
              them to swim. There has not been one staff that has not gone above
              and beyond each lesson.
            </p>
            <div className="d-flex align-items-center mt-4">
              <img
                src="images/pics/image_50.jpg"
                alt=""
                className="a4-review"
              />
              <div>
                <h6 className="font-weight-bold">Laura Smith</h6>
                <h6
                  className="text-muted font-weight-light m-0"
                  style={{ fontSize: 13 }}
                >
                  ATTENDANT
                </h6>
              </div>
            </div>
          </div>
          <div>
            <p>
              <FaQuoteLeft className="quote-left" />
              Enrolling my 2 sons into Swim Academy may be one of the best
              decisions I've made for them thus-far. They really set the
              standard for allowing kids to be comfortable in the water while
              learning the basics of swimming.
            </p>
            <div className="d-flex align-items-center mt-4">
              <img
                src="images/pics/image_51.jpg"
                alt=""
                className="a4-review"
              />
              <div>
                <h6 className="font-weight-bold">Van Nguyen</h6>
                <h6
                  className="text-muted font-weight-light m-0"
                  style={{ fontSize: 13 }}
                >
                  PARENT
                </h6>
              </div>
            </div>
          </div>
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

export default AboutUs;
