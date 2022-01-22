import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { Link } from "react-router-dom";
// import Routes from "./Routes";
import { FiSearch } from "react-icons/fi";
import { FaFolder } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { FaFolderOpen } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FiSmartphone } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { BiTime } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FaPinterest } from "react-icons/fa";

// components
import Explore from "../../components/ourServices/explore/Explore";

function Contact() {
  return (
    <div>
      <nav className="home-swim-nav navbar navbar-expand-lg">
        <div className="container-fluid">
          <img src="images/logo/logo.png" alt="" className="swim-logo" />
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
      <div className="home-1st">
        <div className="h1-top">
          <div className="h1t-content">
            <h6 className="h1st">LEARN TO SWIM NOW!</h6>
            <h1 className="h1-2nd">
              Swimming Courses <br /> for Children and Adults
            </h1>
            <h5 className="h1-desc">
              <span>Effective swimming courses from $300 per person.</span>
              <span>Experienced instructors, safe swimming pool.</span>
              <span>We cordially invite you!</span>
            </h5>
            <div className="d-flex align-items-center mt-5">
              <button className="btn h-btn-outline-reverse">
                See the courses
              </button>
              <Link to="/about-us" className="h1t-link">
                <span>About Us</span>
              </Link>
            </div>
          </div>
          <div className="h1t-cards">
            <div className="c4-card mb-5">
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
            <div className="c4-card mt-5">
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
          </div>
        </div>
        <div className="h1-mid">
          <div className="h1m-content">
            <span className="h1m-icon">
              <GoLocation />
            </span>
            <div className="h1m-desc">
              <h6>Long Avenue 36</h6>
              <h6>New Yersey, CA 96120</h6>
            </div>
          </div>
          <div className="h1m-content">
            <span className="h1m-icon">
              <BsEnvelope />
            </span>
            <div className="h1m-desc">
              <h6>learntoswim@office.au</h6>
              <h6>courses@office.au</h6>
            </div>
          </div>
          <div className="h1m-content">
            <span className="h1m-icon">
              <FiSmartphone />
            </span>
            <div className="h1m-desc">
              <h6>Don't hesitate to call</h6>
              <h6>252-151-2053</h6>
            </div>
          </div>
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
      <div className="home-3rd">
        <div className="h3-bg">
          <div className="s4-left h3-content">
            <h6 className="s3-sub">JOIN TODAY</h6>
            <h2 className="s3-head">
              Swim Academy School Invites You to Classes
            </h2>
            <p>
              We are an open and friendly swimming school. Each of our little
              floats is special and unique to us. We know each of our students
              not only by name, but most of all we listen to them and try to get
              to know them well. We teach swimming, but also try to pass on
              moral principles and values.
            </p>
            <div className="d-flex">
              <div className="mr-5">
                <h6>
                  <RiCheckboxCircleFill className="s3-tick" />
                  Modern methods
                </h6>
                <h6>
                  <RiCheckboxCircleFill className="s3-tick" />
                  15 years on the market
                </h6>
                <h6>
                  <RiCheckboxCircleFill className="s3-tick" />
                  Payment in installments
                </h6>
              </div>
              <div>
                <h6>
                  <RiCheckboxCircleFill className="s3-tick" />
                  Personal development
                </h6>
                <h6>
                  <RiCheckboxCircleFill className="s3-tick" />
                  Modern equipment
                </h6>
                <h6>
                  <RiCheckboxCircleFill className="s3-tick" />
                  Introductory lesson
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="h3-right">
          <img src="images/pics/image_36.jpg" alt="" />
          <div className="h3-arrows c4-arrows">
            <span className="c4-arr">
              <BsArrowLeft />
            </span>
            <span className="c4-arr">
              <BsArrowRight />
            </span>
          </div>
        </div>
      </div>
      <Explore />
      <div className="home-4th">
        <div className="a3-content">
          <h6 className="c1st">LEARN MORE</h6>
          <h2 className="a3-2nd">We Focus on Development</h2>
          <p style={{ fontWeight: 600 }}>
            We constantly strive to develop and change for the better. Not only
            our ideas count, but also the satisfaction of our students learning
            to swim. We greatly appreciate all your feedback.
          </p>
          <p>
            We organize new types of pool activities. We train by participating
            in various courses and learning about new trends in swimming
            lessons. We update our website on regular basis to include more
            valuable information, e.g. we systematically publish articles on our
            blog to help parents.
          </p>
          <button className="btn btn-outline-reverse">Learn more</button>
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
