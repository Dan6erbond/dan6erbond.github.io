import React from "react";
import {Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons';

import './Navigation.scss';

export default function Navigation() {
    const [menuOpacity, setMenuOpacity] = React.useState<number>(0);
    const [menuVisibility, setMenuVisibility] = React.useState<"visible" | "hidden">("hidden");

    const enableMenu = () => {
        setMenuOpacity(1);
        setMenuVisibility("visible");
    };

    const disableMenu = () => {
        setMenuOpacity(0);
        setTimeout(() => setMenuVisibility("hidden"), 500);
    };

    return (
        <>
            <Navbar bg="white">
                <Link to="/">
                    <Navbar.Brand>
                        <img alt="logo"
                             src="/res/img/logo/logo - green.png"
                             width="30"
                             height="30"
                             className="d-inline-block align-top"
                        />{' '}
                        RaviAnand
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end">
                </Navbar.Collapse>
            </Navbar>

            <div className="menu-button" onClick={() => enableMenu()}>
                <FontAwesomeIcon icon={faBars}/>
            </div>

            <div className="menu" style={{opacity: menuOpacity, visibility: menuVisibility}} onClick={() => disableMenu()}>
                <div className="logo">
                    <img alt="logo"
                         src="/res/img/logo/logo - green.png"
                         width="30"
                         height="30"
                         className="d-inline-block align-top"
                    />{' '}
                    RaviAnand
                </div>
                <div className="menu-close-button" onClick={() => disableMenu()}>
                    <FontAwesomeIcon icon={faTimes}/>
                </div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" >About</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/resume">Resume</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}