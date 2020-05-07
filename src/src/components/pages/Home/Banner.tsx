import {motion} from "framer-motion";
import React, {RefObject} from "react";
import ScrollDown from "./ScrollDown";

import "./Banner.scss";

interface BannerProps {
    aboutRef: RefObject<HTMLDivElement>;
}

export default function Banner(props: BannerProps) {
    const {aboutRef} = props;

    return (
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
                    <ScrollDown targetRef={aboutRef} label="About Me"/>
                </div>
            </div>
        </div>
    );
}