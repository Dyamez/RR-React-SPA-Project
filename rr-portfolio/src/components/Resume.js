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
        <div className="row skill">
          <div className="three column header-col">
            <h1>
              <span>Aquired 'n00b to passable' Skills</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <p>{resumeData.skillsDescription}</p>
            <div className="bars">
              <div className="skills"></div>
              {resumeData.skills &&
                resumeData.skills.map((item) => {
                  return (
                    <li>
                      <span
                        className={`bar-expand ${item.skillname.toLowerCase()}`}
                      />
                      <em>{item.skillname}</em>
                    </li>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
