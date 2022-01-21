import React, { Component } from "react";
import { BsChevronUp } from "react-icons/bs";

export default class Accordians extends Component {
  state = {
    openAcr: true,
  };
  render() {
    return (
      <div>
        <div className="s6-card">
          <div className="d-flex justify-content-between align-items-center">
            <h4>Do you offer refunds, credits or transfers?</h4>
            <span
              className="s6-up"
              // onClick={() => {this.setState({openAcr: !openAcr})}}
            >
              <BsChevronUp />
            </span>
          </div>
          <p>
            If you cancel your plan prior to the end of your billing period, a
            pro-rated credit will be added to your account for any unused time
            on the plan. You can use this credit to make future plan purchases.
          </p>
        </div>
      </div>
    );
  }
}
