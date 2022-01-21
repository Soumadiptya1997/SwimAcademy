import React, { Component } from "react";
import { BsChevronUp } from "react-icons/bs";

// component
import Accordians from '../accordians/Accordians';

export default class Choose extends Component {
  render() {
    return (
      <div className="service-2nd">
        <div className="container">
          <h6 className="s2-1st">LEARN MORE</h6>
          <h2 className="s2-head">Why Choose Us</h2>
          <div className="s5-cards">
            <div className="s5-card">
              <img src="images/icons/icon-2.png" alt="" />
              <h5>Experienced Staff</h5>
              <p>
                We all have one thing in common: a passion for sport and a
                unique approach to swim learning.
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
                We know each of our students not only by name, but most of all
                we listen to them and try to get to know them.
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
              <Accordians />
              <Accordians />
            </div>
            <p className="goto">
              Go to <span>our services</span> page.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
