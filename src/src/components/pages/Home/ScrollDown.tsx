import {motion} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleDown} from "@fortawesome/free-solid-svg-icons";
import React, {RefObject} from "react";

import "./ScrollDown.scss";

interface ScrollDownProps {
    targetRef: RefObject<HTMLDivElement>;
    label: string;
}

export default function ScrollDown(props: ScrollDownProps) {
    const {targetRef, label} = props;

    const scrollToRef = (ref: RefObject<HTMLDivElement>) => window.scrollTo(0, ref.current!!.offsetTop);

    return (
        <div className="scroll-down">
            <motion.button onClick={() => scrollToRef(targetRef)} whileHover={{scale: 1.1}}
                           whileTap={{scale: 0.9}}>
                <FontAwesomeIcon icon={faArrowAltCircleDown}/>
            </motion.button>
            <span>{label}</span>
        </div>
    );
}