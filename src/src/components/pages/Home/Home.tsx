import React from "react";
import Banner from "../../Banner/Banner";
import ScrollDown from "../../ScrollDown/ScrollDown";
import About from "./About";

import "./Home.scss";

export default function Home() {
  const aboutRef = React.useRef(null);

  return (
    <React.Fragment>
      <Banner imageSrc="/res/img/home/code.jpg">
        <React.Fragment>
          <h2 className="banner-title">RaviAnand Mohabir</h2>
          <p className="banner-text">
            I'm an engineering student in Switzerland, experienced with Java, C#
            and Python.
          </p>
          <a
            className="btn btn-outline-primary flat-button"
            href="mailto:moravrav@gmail.com?subject=Hi!"
          >
            Message Me
          </a>
          <ScrollDown targetRef={aboutRef} label="About Me" />
        </React.Fragment>
      </Banner>
      <About aboutRef={aboutRef} />
      <br />
      <div style={{textAlign: 'center'}}>
        <a
          className="btn btn-outline-primary flat-button"
          href="/projects"
        >
          Projects
        </a>
      </div>
    </React.Fragment>
  );
}
