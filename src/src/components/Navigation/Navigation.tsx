import React from "react";
import {Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import MenuToggle from "./MenuToggle";

import './Navigation.scss';

export default function Navigation() {
    const [menuOpen, setMenuOpen] = React.useState<boolean>(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <React.Fragment>
            <motion.div initial={false}
                        animate={menuOpen ? "open" : "closed"}>
                <MenuToggle toggle={toggleMenu}/>

                <motion.div transition={{duration: 0.15}}
                            className="menu" variants={{
                    open: {
                        opacity: 1,
                        visibility: "visible"
                    },
                    closed: {
                        opacity: 0,
                        transitionEnd: {
                            visibility: "hidden"
                        }
                    }
                }} onClick={toggleMenu}>
                    <Link to="/">
                        <Navbar.Brand className="logo">
                            <img alt="logo"
                                 src="/res/img/logo/logo - green.png"
                                 width="30"
                                 height="30"
                                 className="d-inline-block align-top"
                            />{' '}
                            RaviAnand
                        </Navbar.Brand>
                    </Link>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/resume">Resume</Link>
                        </li>
                    </ul>
                </motion.div>
            </motion.div>
        </React.Fragment>
    );
}