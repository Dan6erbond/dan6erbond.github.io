import React from 'react';

import Timeline from "./Timeline";
import Banner from "./Banner";

import './Home.scss';
import ScrollDown from "./ScrollDown";

export default function Home() {
    const aboutRef = React.useRef(null);
    const projectsRef = React.useRef(null);

    const [inProp, setInProp] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (!inProp) {
            setTimeout(() => setInProp(true), 1);
        }
    });

    return (
        <React.Fragment>
            <div className="full-page center">
                <div className="content">
                    <Banner aboutRef={aboutRef}/>
                </div>
            </div>
            <div ref={aboutRef}>
                <div className="profile-img"/>
                <br/>
                <p style={{margin: 0}}>
                    I'm a motivated engineering student with a passion for computer sciences and digital media.
                    Seeking to work on creating reliable systems and interesting technology.
                    Created many systems used by others such as the Fuzzle search algorithm.
                </p>
                <Timeline/>
                <ScrollDown targetRef={projectsRef} label="Projects"/>
            </div>
            <div ref={projectsRef}>
            </div>
        </React.Fragment>
    );
}