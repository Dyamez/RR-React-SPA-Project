import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="footer">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Social Media</h1>
            <div
              id="footer-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {resumeData.socialLinks &&
                resumeData.socialLinks.map((item) => {
                  return (
                    <div className="columns footer-item">
                      <div className="item-wrap">
                        <a href={item.url} target="_blank">
                          <img src={`${item.imgurl}`} className="item-img" />
                          <div className="overlay">
                            <div className="footer-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.url}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
