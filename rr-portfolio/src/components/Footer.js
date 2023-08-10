import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <h1>Social Media</h1>
            <ul className="social-links">
              {resumeData.socialLinks &&
                resumeData.socialLinks.map((item) => {
                  return (
                    <div className="columns footer-item">
                      <div className="item-wrap">
                        <ul>
                          <li>
                            <a href={item.url} target="_blank">
                              <img
                                src={`${item.imgurl}`}
                                className="item-img"
                              />
                              <div className="overlay">
                                <div className="footer-item-meta">
                                  <h5>{item.name}</h5>
                                  <p>{item.url}</p>
                                </div>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  );
                })}
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}
