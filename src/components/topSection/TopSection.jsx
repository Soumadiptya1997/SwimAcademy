import React, { Component } from "react";

export default class TopSection extends Component {
  render() {
    return (
      <div
        className="swim-about-head"
        style={{ backgroundImage: `url(${this.props.image})` }}
      >
        {this.props.children}
        <div className="swim-head-inside">
          <span>SwimAcademy</span>
          <span>·</span>
          <span>{this.props.pageName}</span>
        </div>
        <div className="d-flex justify-content-center align-items-center text-white">
          <h1>{this.props.pageName}</h1>
        </div>
      </div>
    );
  }
}
