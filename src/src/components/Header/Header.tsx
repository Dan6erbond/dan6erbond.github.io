import {Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import React from "react";

import "./Header.scss";

export default function Header() {
    return (
        <React.Fragment>
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
                <Navbar.Collapse className="justify-content-end"/>
            </Navbar>
            <br/>
        </React.Fragment>
    );
}
