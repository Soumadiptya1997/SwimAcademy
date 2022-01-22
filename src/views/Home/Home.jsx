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
import { FaQuoteLeft } from "react-icons/fa";
import { MdModeComment } from "react-icons/md";
import { BsFillPinAngleFill } from "react-icons/bs";
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
                    <small></small>
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
        <div className="h4-cards">
          <div>
            <div className="s5-card">
              <img src="images/icons/icon-14.png" alt="" />
              <h5>Experienced Staff</h5>
              <p>
                We all have one thing in common: a passion for sport and unique
                approach.
              </p>
            </div>
            <div className="s5-card my-5">
              <img src="images/icons/icon-15.png" alt="" />
              <h5>Modern methods</h5>
              <p>
                We work with pure passion for sport and the desire to promote an
                active lifestyle.
              </p>
            </div>
          </div>
          <div className="s5-card ml-5">
            <img src="images/icons/icon-16.png" alt="" />
            <h5>Personal Development</h5>
            <p>
              We participate in various courses and learn about new trends in
              swimming teaching.
            </p>
          </div>
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
          <div className="c4-card">
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
          <div className="c4-card">
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
      <div className="home-5th">
        <div className="a3-content">
          <h6 className="c1st">OUR PHILOSOPHY</h6>
          <h2 className="a3-2nd">
            Passionate Character Building in One Stroke at a Time
          </h2>
          <p style={{ fontWeight: 600 }}>
            Every square inch of our unique facility is designed to improve
            learning, fun and safety for every child and parent who joins the
            Swim Academy family.
          </p>
          <p>
            You feel it the moment you walk in. Something else. It's more than
            just vivid colors that inspire kids. More than a curriculum designed
            not only to teach children to swim, but also to build their
            character through guided play. More than a thrill-free swimming
            pool. There is more. Something unexpected. Something that drives
            Swim Academy school beyond the usual.
          </p>
          <button className="btn btn-outline-reverse">Learn more</button>
        </div>
        <div className="h5-right">
          <img src="images/pics/image_24.jpg" className="h5r-img" alt="" />
          <div className="h5-cards a4-cards">
            <div>
              <p>
                <FaQuoteLeft className="quote-left" />
                My little daughter goes to this swim school and it's absolutely
                amazing! The swim instructors are great and it's a great
                environment for kids. The front desk is also super helpful.
              </p>
              <div className="d-flex align-items-center mt-4">
                <img
                  src="images/pics/image_01.jpg"
                  alt=""
                  className="a4-review"
                />
                <div>
                  <h6 className="font-weight-bold">Monica Deborah</h6>
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
          <div className="h5-arrows c4-arrows">
            <span className="c4-arr">
              <BsArrowLeft />
            </span>
            <span className="c4-arr">
              <BsArrowRight />
            </span>
          </div>
        </div>
      </div>
      <div className="home-6th">
        <h6 className="h6-1st">PASSION & SKILLS</h6>
        <h2 className="h6-head">Meet the Team</h2>
        <p className="h6-desc">
          Our school currently has over a dozen qualified swimming instructors.
          We all have one thing in common: a passion for sport and a unique
          approach to children.
        </p>
        <div className="h6-cards">
          <div className="h6-card mb-5">
            <h6>Swim Instructor</h6>
            <img src="images/pics/image_07.jpg" alt="" className="h6c-img" />
            <div className="d-flex justify-content-between align-items-center">
              <h5>
                Deborah <br /> Fanning
              </h5>
              <span className="h6-arr">
                <BsArrowRight />
              </span>
            </div>
          </div>
          <div className="h6-card mt-5">
            <h6>Swim Instructor</h6>
            <img src="images/pics/image_02.jpg" alt="" className="h6c-img" />
            <div className="d-flex justify-content-between align-items-center">
              <h5>
                Jenay <br /> Pelham
              </h5>
              <span className="h6-arr">
                <BsArrowRight />
              </span>
            </div>
          </div>
          <div className="h6-card mb-5">
            <h6>Swim Instructor</h6>
            <img src="images/pics/image_03.jpg" alt="" className="h6c-img" />
            <div className="d-flex justify-content-between align-items-center">
              <h5>
                Asthon <br /> Waters
              </h5>
              <span className="h6-arr">
                <BsArrowRight />
              </span>
            </div>
          </div>
          <div className="h6-card mt-5">
            <h6>Swim Instructor</h6>
            <img src="images/pics/image_01.jpg" alt="" className="h6c-img" />
            <div className="d-flex justify-content-between align-items-center">
              <h5>
                Peggy <br /> Bourgeois
              </h5>
              <span className="h6-arr">
                <BsArrowRight />
              </span>
            </div>
          </div>
        </div>
        <div className="h6-bottom">
          <button className="btn btn-outline-reverse">Meet the team</button>
        </div>
      </div>
      <div className="home-7th contact-4th">
        <h6 className="c4-1st">LATES NEWS</h6>
        <h2 className="c4-head">From the Blog</h2>
        <p className="c4-desc">
          The latest news about what is happening in our pool. <br />
          Advice for parents and our swimmers.
        </p>
        <div className="c4-cards">
          <div className="c4-card">
            <div className="c4-top">
              <div className="price">
                <h5>20 Aug</h5>
                <p>
                  <small>2021</small>
                </p>
              </div>
              <div className="c4c-img">
                <img src="images/pics/image_21.jpg" alt="" />
              </div>
              <span className="h7-pin">
                <BsFillPinAngleFill />
              </span>
            </div>
            <div className="c4c-body">
              <p className="c4cb-1st">
                <FaFolder /> <span>Family · General</span>
              </p>
              <h4>Discover Benefits of Swimming Lessons for Kids</h4>
              <p>
                Swimming lessons are still one of the most popular
                extracurricular activities that children enjoy. Parents [...]
              </p>
              <div className="d-flex justify-content-between">
                <div className="c4cb-foot">
                  <MdModeComment style={{ transform: "scaleX(-1)" }} />
                  <span>3 comment(s)</span>
                </div>
                <div className="c4cb-foot">
                  <span>Read more</span>
                  <BsArrowRight />
                </div>
              </div>
            </div>
          </div>
          <div className="c4-card">
            <div className="c4-top">
              <div className="price">
                <h5>17 Aug</h5>
                <p>
                  <small>2021</small>
                </p>
              </div>
              <div className="c4c-img">
                <img src="images/pics/image_22.jpg" alt="" />
              </div>
            </div>
            <div className="c4c-body">
              <p className="c4cb-1st">
                <FaFolder /> <span>Courses · Lifestyle</span>
              </p>
              <h4>How Swimming Lessons Help Kids With Stress & Anxiety</h4>
              <p>
                Nowadays, children face so many problems both at school and at
                home. Swimming can serve [...]
              </p>
              <div className="d-flex justify-content-between">
                <div className="c4cb-foot">
                  <MdModeComment style={{ transform: "scaleX(-1)" }} />
                  <span>10 comment(s)</span>
                </div>
                <div className="c4cb-foot">
                  <span>Read more</span>
                  <BsArrowRight />
                </div>
              </div>
            </div>
          </div>
          <div className="c4-card">
            <div className="c4-top">
              <div className="price">
                <h5>25 Jun</h5>
                <p>
                  <small>2021</small>
                </p>
              </div>
              <div className="c4c-img">
                <img src="images/pics/image_20.jpg" alt="" />
              </div>
            </div>
            <div className="c4c-body">
              <p className="c4cb-1st">
                <FaFolder /> <span>General · News</span>
              </p>
              <h4>How to Motivate Yourself to Swim?</h4>
              <p>
                Physical activity is an important part of a healthy lifestyle.
                More and more people realize [...]
              </p>
              <div className="d-flex justify-content-between">
                <div className="c4cb-foot">
                  <MdModeComment style={{ transform: "scaleX(-1)" }} />
                  <span>2 comment(s)</span>
                </div>
                <div className="c4cb-foot">
                  <span>Read more</span>
                  <BsArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="c4-last">
          See more posts. Go to the <span>blog</span>
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
