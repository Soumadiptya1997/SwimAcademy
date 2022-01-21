import React, { Component } from "react";

import { RiCheckboxCircleFill } from "react-icons/ri";

export default class Description extends Component {
  render() {
    return (
      <>
        <div className="services-3rd container">
          <img src="images/pics/image_23.jpg" alt="" className="s3l-img" />
          <div className="s3-right">
            <h6 className="s3-sub">VISIBLE PROGRESS</h6>
            <h2 className="s3-head">
              We Have a Program That Will Teach Your Child to Swim Within Three
              to Four Weeks
            </h2>
            <p>
              Teamwork is the cornerstone of Swim Academy. Teachers, managers
              and parents work together to focus on the progress of each child.
              Our team always communicates inside and outside the pool to find
              the most effective approach to making quick progress.
            </p>
          </div>
        </div>
        <div className="service-4th container">
          <div className="s4-left">
            <h6 className="s3-sub" style={{ marginTop: 70 }}>
              WITHOUT FEAR
            </h6>
            <h2 className="s3-head">
              Is Your Child Afraid of Water? We Will Overcome the Fear
            </h2>
            <p>
              We believe your child deserves an amazing swimming experience in
              the safest and most fun place, here at Swim Academy. Our swimming
              lessons are designed to make learning fun and thereby tame the
              fear of contact with water. We provide education for children from
              3 to 12 years of age, including swimming lessons for infants and
              adults.
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
      </>
    );
  }
}
