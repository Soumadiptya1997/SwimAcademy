import React, { Component } from "react";
import { BsArrowRight } from "react-icons/bs";

export default class Explore extends Component {
  render() {
    return (
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
    );
  }
}
