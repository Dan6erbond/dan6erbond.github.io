import React from "react";
import "./Header.css";

export default function Header() {
    return (
        <nav className="menu">
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <select id="lang-select">
                        <option value="en">EN</option>
                        <option value="de">DE</option>
                    </select>
                </li>
                <li className="dropdown">
                    <a href="#" className="dropbtn search">Search</a>
                    <div className="dropcnt search">
                        <form className="" action="/search.html" method="get">
                            Search:&nbsp;&nbsp;<input type="search" name="q" placeholder="Powered by Fuzzle"/>
                            <input type="submit" value="Go"/>
                        </form>
                    </div>
                </li>
                <li>
                    <a href="/docs.html">Docs</a>
                </li>
                <li className="dropdown">
                    <a href="/projects.html" className="dropbtn">Projects</a>
                    <div className="dropcnt">
                        <a href="/mariavi">Mariavi</a>
                        <a href="/fuzzle.html">Fuzzle</a>
                        <a href="/reddit.html">Reddit</a>
                    </div>
                </li>
                <li>
                    <a href="/about-me.html">About</a>
                </li>
                <li className="mobile-open">
                    <a>
                        <div className="close"></div>
                    </a>
                </li>
            </ul>
        </nav>
    );
}