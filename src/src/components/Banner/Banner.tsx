import {motion} from "framer-motion";
import React from "react";
import VizSensor from "react-visibility-sensor";

import "./Banner.scss";

interface BannerProps {
    imageSrc: string;
    children?: React.ReactNode;
    bannerHeight?: string;
}

export default function Banner(props: BannerProps) {
    const {imageSrc, children, bannerHeight} = props;

    const [isVisible, setIsVisible] = React.useState<boolean>(false);

    return (
        <div className="full-page center">
            <div className="content">
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
                            }} transition={{duration: 0.6}} className="banner-image"
                                        style={{background: `url("${imageSrc}")`, height: bannerHeight || "50vh"}}/>
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
                                    {children}
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </VizSensor>
            </div>
        </div>
    );
}