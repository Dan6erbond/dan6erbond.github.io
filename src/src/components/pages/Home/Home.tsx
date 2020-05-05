import React, {RefObject} from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleDown} from "@fortawesome/free-solid-svg-icons";

import './Home.scss';
import Timeline from "./Timeline";

export default function Home() {
    const aboutRef = React.useRef(null);

    const scrollToRef = (ref: RefObject<HTMLDivElement>) => window.scrollTo(0, ref.current!!.offsetTop);

    return (
        <React.Fragment>
            <div className="full-page center">
                <div className="content">
                    <div className="banner">
                        <div className="banner-content">
                            <div className="banner-image"/>
                            <div className="content-container">
                                <h2 className="banner-title">RaviAnand Mohabir</h2>
                                <p className="banner-text">
                                    A full-stack software developer in Switzerland, experienced with Java, C# and
                                    Python.
                                </p>
                                <div className="scroll-down">
                                    <button onClick={() => scrollToRef(aboutRef)}>
                                        <FontAwesomeIcon icon={faArrowAltCircleDown}/>
                                    </button>
                                    <span>About Me</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="full-page" ref={aboutRef}>
                <div className="content">
                    <h2>About Me</h2>
                    <br/>
                    <div className="profile-img"/>
                    <br/>
                    <Timeline/>
                </div>
            </div>
        </React.Fragment>
    );
}