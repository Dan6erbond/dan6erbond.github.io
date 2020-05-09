import React from 'react';
import Banner from "./Banner";
import ScrollDown from "./ScrollDown";
import About from "./About";

import './Home.scss';
import Projects from "./Projects";

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
                    <Banner/>
                    <ScrollDown targetRef={aboutRef} label="About Me"/>
                </div>
            </div>
            <About aboutRef={aboutRef} projectsRef={projectsRef}/>
            <br/>
            <Projects projectsRef={projectsRef}/>
        </React.Fragment>
    );
}