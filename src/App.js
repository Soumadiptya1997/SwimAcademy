import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import { BrowserRouter as Router } from "react-router-dom";
// import Routes from "./Routes";
import { FiSearch } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { BsChevronUp } from "react-icons/bs";
import { FiSmartphone } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { BiTime } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FaPinterest } from "react-icons/fa";

function App() {
  return (
    // <Router>
    //   <div className="App">
    //     <Routes />
    //   </div>
    // </Router>
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
                  <span className="nav-link">Home</span>
                </li>
                <li className="nav-item">
                  <span className="nav-link">About Us</span>
                </li>
                <li className="nav-item">
                  <span className="nav-link">Our Services</span>
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
          <span>Our Services</span>
        </div>
        <div className="d-flex justify-content-center align-items-center text-white">
          <h1>Our Services</h1>
        </div>
      </div>
      <div className="service-2nd">
        <h6 className="s2-1st">POOL CLASSES</h6>
        <h2 className="s2-head">Explore Our Services</h2>
        <p className="s2-desc">
          Do you want to learn to swim? We teach swimming from the very
          beginning, where our instructors approach everyone with patience and
          understanding.
        </p>
        <div className="s2-cards">
          <div className="s2-card">
            <img src="images/pics/image_46.jpg" alt="" />
            <div className="overlay"></div>
            <div className="s2c-body">
              <h4>Swimming Classes</h4>
              <BsArrowRight className="s2c-arrow" />
            </div>
          </div>
          <div className="s2-card">
            <img src="images/pics/image_44.jpg" alt="" />
            <div className="overlay"></div>
            <div className="s2c-body">
              <h4>Individual Lessons</h4>
              <BsArrowRight className="s2c-arrow" />
            </div>
          </div>
          <div className="s2-card">
            <img src="images/pics/image_47.jpg" alt="" />
            <div className="overlay"></div>
            <div className="s2c-body">
              <h4>Water Aerobics</h4>
              <BsArrowRight className="s2c-arrow" />
            </div>
          </div>
          <div className="s2-card">
            <img src="images/pics/image_45.jpg" alt="" />
            <div className="overlay"></div>
            <div className="s2c-body">
              <h4>Swimming Camps</h4>
              <BsArrowRight className="s2c-arrow" />
            </div>
          </div>
        </div>
        <p className="goto">
          Go to <span>our services</span> page.
        </p>
      </div>
      <div className="services-3rd">
        <img src="images/pics/image_23.jpg" alt="" className="s3l-img" />
        <div className="s3-right">
          <h6 className="s3-sub">VISIBLE PROGRESS</h6>
          <h2 className="s3-head">
            We Have a Program That Will Teach Your Child to Swim Within Three to
            Four Weeks
          </h2>
          <p>
            Teamwork is the cornerstone of Swim Academy. Teachers, managers and
            parents work together to focus on the progress of each child. Our
            team always communicates inside and outside the pool to find the
            most effective approach to making quick progress.
          </p>
        </div>
      </div>
      <div className="service-4th">
        <div className="s4-left">
          <h6 className="s3-sub" style={{ marginTop: 70 }}>
            WITHOUT FEAR
          </h6>
          <h2 className="s3-head">
            Is Your Child Afraid of Water? We Will Overcome the Fear
          </h2>
          <p>
            We believe your child deserves an amazing swimming experience in the
            safest and most fun place, here at Swim Academy. Our swimming
            lessons are designed to make learning fun and thereby tame the fear
            of contact with water. We provide education for children from 3 to
            12 years of age, including swimming lessons for infants and adults.
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
            </div>
          </div>
        </div>
        <div className="s4r-imgs">
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
        </div>
      </div>
      <div className="service-2nd">
        <h6 className="s2-1st">LEARN MORE</h6>
        <h2 className="s2-head">Why Choose Us</h2>
        <div className="s5-cards">
          <div className="s5-card">
            <img src="images/icons/icon-2.png" alt="" />
            <h5>Experienced Staff</h5>
            <p>
              We all have one thing in common: a passion for sport and a unique
              approach to swim learning.
            </p>
          </div>
          <div className="s5-card">
            <img src="images/icons/icon-3.png" alt="" />
            <h5>Personal Development</h5>
            <p>
              We participate in various courses and learn about new trends in
              swimming teaching of adults and kids.
            </p>
          </div>
          <div className="s5-card">
            <img src="images/icons/icon-4.png" alt="" />
            <h5>Modern Methods</h5>
            <p>
              We work with pure passion for sport and the desire to promote an
              active lifestyle.
            </p>
          </div>
          <div className="s5-card">
            <img src="images/icons/icon-5.png" alt="" />
            <h5>Unique School</h5>
            <p>
              We are an open and friendly swimming school. Each of our little
              floats is special and unique to us.
            </p>
          </div>
        </div>
        <div className="s5-cards">
          <div className="s5-card">
            <img src="images/icons/icon-6.png" alt="" />
            <h5>Heart Put Into Learning</h5>
            <p>
              We want to change the approach of children and their parents to
              learning to swim and to physical activity.
            </p>
          </div>
          <div className="s5-card">
            <img src="images/icons/icon-7.png" alt="" />
            <h5>A Mine of Ideas</h5>
            <p>
              We organize new types of activities. We train ourselves by
              participating in various types of courses.
            </p>
          </div>
          <div className="s5-card">
            <img src="images/icons/icon-8.png" alt="" />
            <h5>We Know Each Other</h5>
            <p>
              We know each of our students not only by name, but most of all we
              listen to them and try to get to know them.
            </p>
          </div>
          <div className="s5-card">
            <img src="images/icons/icon-9.png" alt="" />
            <h5>New Trends Today</h5>
            <p>
              We organize free special events such as, for example, St.
              Nicholas' Day at the swimming pool.
            </p>
          </div>
        </div>
        <div className="service-6th">
          <h6 className="s6-1st">LEARN MORE</h6>
          <h2 className="s6-head">Frequently Asked Questions</h2>
          <p className="s6-desc">
            If you have any questions about the classes and haven't found the
            answer below please contact us at courses@office.au or
            learntoswim@office.au
          </p>
          <div className="s6-cards">
            <div>
              <div className="s6-card">
                <div className="d-flex justify-content-between align-items-center">
                  <h4>Can I be in the water with my child during a lesson?</h4>
                  <span className="s6-up">
                    <BsChevronUp />
                  </span>
                </div>
                <p>
                  Yes, however, semi-private lessons are for children that are
                  water safe and can swim independently. We will make this
                  decision with your instructor on a case-by-case basis.
                </p>
              </div>
            </div>
            <div>
              <div className="s6-card">
                <div className="d-flex justify-content-between align-items-center">
                  <h4>Do you offer refunds, credits or transfers?</h4>
                  <span className="s6-up">
                    <BsChevronUp />
                  </span>
                </div>
                <p>
                  If you cancel your plan prior to the end of your billing
                  period, a pro-rated credit will be added to your account for
                  any unused time on the plan. You can use this credit to make
                  future plan purchases.
                </p>
              </div>
            </div>
          </div>
          <p className="goto">
            Go to <span>our services</span> page.
          </p>
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

export default App;
