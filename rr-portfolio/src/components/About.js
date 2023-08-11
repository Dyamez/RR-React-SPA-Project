import React, { Component } from "react";

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              src={`${resumeData.image}`}
              className="item-img"
              alt="image profile"
            />
            <div className="nine columns main-col">
              <h2>About Myself</h2>
              <p>{resumeData.aboutme}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
