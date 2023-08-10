import React, { Component } from "react";

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src="../public/images/myImage.jpg"
              alt="my image"
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
