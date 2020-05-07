import {motion} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleDown} from "@fortawesome/free-solid-svg-icons";
import React, {RefObject} from "react";
import {icon} from "@fortawesome/fontawesome-svg-core";

interface ScrollDownProps {
    ref: RefObject<HTMLDivElement>;
}

export default function ScrollDown(props: ScrollDownProps) {
    const {ref} = props;

    const scrollToRef = (ref: RefObject<HTMLDivElement>) => window.scrollTo(0, ref.current!!.offsetTop);

    return (
        <div className="scroll-down">
            <motion.button onClick={() => scrollToRef(ref)} whileHover={{scale: 1.1}}
                           whileTap={{scale: 0.9}}>
                <FontAwesomeIcon icon={faArrowAltCircleDown}/>
            </motion.button>
            <span>About Me</span>
        </div>
    );
}