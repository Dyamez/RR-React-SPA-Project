import React, { Component } from "react";

export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <header id="home">
        <nav id="nav-wrap">
          <button>
            <a className="mobile-btn" title="Show navigation">
              Show navigation
            </a>
          </button>
          <button type="button" class="btn btn-secondary">
            <a className="mobile-btn" href="#" title="Hide navigation">
              Hide navigation
            </a>
          </button>
          <ul id="nav" className="nav">
            <li className="current">
              <button class="btn btn-info">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </button>
            </li>
            <li>
              <button class="btn btn-success">
                <a className="smoothscroll" href="#resume">
                  Resume
                </a>
              </button>
            </li>
            <li>
              <button type="button" class="btn btn-warning">
                <a className="smoothscroll" href="#portfolio">
                  Works
                </a>
              </button>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I am {resumeData.name}.</h1>
            <h3 style={{ color: "#468499", fontFamily: "sans-serif" }}>
              I am a {resumeData.role}.{resumeData.roleDescription}
            </h3>
            <hr />
            <ul className="social">
              {resumeData.socialLinks &&
                resumeData.socialLinks.map((item) => {
                  return (
                    <li key={item.name}>
                      <a href={item.url} target="_blank">
                        <i className={item.className}></i>
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothcontrol" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

/* <header id="home">
          <nav id="nav-wrap">
            <button>
              <a className="mobile-btn" title="Show navigation">
                Show navigation
              </a>
            </button>
            <button type="button" class="btn btn-secondary">
              <a className="mobile-btn" href="#" title="Hide navigation">
                Hide navigation
              </a>
            </button>
            <ul id="nav" className="nav">
              <li className="current">
                <button class="btn btn-info">
                  <a className="smoothscroll" href="#home">
                    Home
                  </a>
                </button>
              </li>
              <li>
                <button class="btn btn-success">
                  <a className="smoothscroll" href="#resume">
                    Resume
                  </a>
                </button>
              </li>
              <li>
                <button type="button" class="btn btn-warning">
                  <a className="smoothscroll" href="#portfolio">
                    Works
                  </a>
                </button>
              </li>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">I am {resumeData.name}.</h1>
              <h3 style={{ color: "#468499", fontFamily: "sans-serif" }}>
                I am a {resumeData.role}.{resumeData.roleDescription}
              </h3>
              <hr />
              <ul className="social">
                {resumeData.socialLinks &&
                  resumeData.socialLinks.map((item) => {
                    return (
                      <li key={item.name}>
                        <a href={item.url} target="_blank">
                          <i className={item.className}></i>
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>

          <p className="scrolldown">
            <a className="smoothcontrol" href="#about">
              <i className="icon-down-circle"></i>
            </a>
          </p>
        </header>*/
