import {motion} from "framer-motion";
import React from "react";
import VizSensor from "react-visibility-sensor";

import "./Banner.scss";

export default function Banner() {
    const [isVisible, setIsVisible] = React.useState<boolean>(false);

    return (
        <VizSensor partialVisibility onChange={isVisible1 => {
            if (isVisible1 && !isVisible) {
                setIsVisible(true);
            }
        }}>
            <motion.div initial={false} animate={isVisible ? "visible" : "hidden"} className="banner">
                <div className="banner-content">
                    <motion.div variants={{
                        hidden: {
                            translateY: "-20%",
                            opacity: 0
                        },
                        visible: {
                            translateY: 0,
                            opacity: 1
                        }
                    }} transition={{duration: 0.6}} className="banner-image"/>
                    <motion.div className="content-container">
                        <motion.div variants={{
                            hidden: {
                                translateY: "20%",
                                opacity: 0
                            },
                            visible: {
                                translateY: 0,
                                opacity: 1
                            }
                        }}>
                            <h2 className="banner-title">RaviAnand Mohabir</h2>
                            <p className="banner-text">
                                I'm an engineering student in Switzerland,
                                experienced with Java, C# and Python.
                            </p>
                            <a className="btn btn-outline-primary flat-button"
                               href="mailto:moravrav@gmail.com?subject=Hi!">
                                Message Me
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </VizSensor>
    );
}