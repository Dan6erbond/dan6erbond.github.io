import React, {RefObject} from 'react';
import {motion} from "framer-motion"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleDown} from "@fortawesome/free-solid-svg-icons";

import './Home.scss';
import Timeline from "./Timeline";

export default function Home() {
    const aboutRef = React.useRef(null);

    const scrollToRef = (ref: RefObject<HTMLDivElement>) => window.scrollTo(0, ref.current!!.offsetTop);

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
                    <div className="banner">
                        <div className="banner-content">
                            <div className="banner-image"/>
                            <div className="content-container">
                                <motion.div initial={{opacity: 0, translateY: "-20%"}}
                                            animate={{opacity: 1, translateY: 0}}
                                            transition={{duration: 0.5}}>
                                    <h2 className="banner-title">RaviAnand Mohabir</h2>
                                    <p className="banner-text">
                                        An engineering student in Switzerland, experienced with Java, C# and
                                        Python.
                                    </p>
                                </motion.div>
                                <div className="scroll-down">
                                    <motion.button onClick={() => scrollToRef(aboutRef)} whileHover={{scale: 1.1}}
                                                   whileTap={{scale: 0.9}}>
                                        <FontAwesomeIcon icon={faArrowAltCircleDown}/>
                                    </motion.button>
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
                    <p style={{margin: 0}}>
                        I'm a motivated engineering student with a passion for computer sciences and digital media.
                        Seeking to work on creating reliable systems and interesting technology.
                        Created many systems used by others such as the Fuzzle search algorithm.
                    </p>
                    <Timeline/>
                </div>
            </div>
        </React.Fragment>
    );
}