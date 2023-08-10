import React, { Component } from "react";

export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>
        </div>

        <div className="nine columns main-col">
          {resumeData.education &&
            resumeData.education.map((item) => {
              return (
                <div className="row item">
                  <div className="twelve columns">
                    <h3>{item.UniversityName}</h3>
                    <h4 className="degree">{item.Degree}</h4>
                    <h5 className="date">{item.YearOfPassing}</h5>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    );
  }
}
