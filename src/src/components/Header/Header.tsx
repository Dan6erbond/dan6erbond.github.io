import React, {FormEvent} from "react";
import "./Header.css";
import {Link} from "react-router-dom";
import {History} from "history";

interface HeaderProps {
    history: History;
}

export default function Header(props: HeaderProps) {
    const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);
    const [searchQuery, setSearchQuery] = React.useState<string>("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.history.push(`search?q=${searchQuery}`);
    };

    const handleChange = (event: FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        setSearchQuery(event.currentTarget.value);
    }

    return (
        <nav className="menu">
            <ul className={mobileOpen ? "open" : ""}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <select id="lang-select">
                        <option value="en">EN</option>
                        <option value="de">DE</option>
                    </select>
                </li>
                <li className="dropdown">
                    <Link to="#" className="dropbtn search">Search</Link>
                    <div className="dropcnt search">
                        <form onSubmit={handleSubmit} className="">
                            Search:&nbsp;&nbsp;<input type="search" onChange={handleChange} placeholder="Powered by Fuzzle"/>
                            <input type="submit" value="Go"/>
                        </form>
                    </div>
                </li>
                <li>
                    <Link to="docs">Docs</Link>
                </li>
                <li className="dropdown">
                    <Link to="projects" className="dropbtn">Projects</Link>
                    <div className="dropcnt">
                        <Link to="mariavi">Mariavi</Link>
                        <Link to="fuzzle">Fuzzle</Link>
                        <Link to="reddit">Reddit</Link>
                    </div>
                </li>
                <li>
                    <Link to="about">About</Link>
                </li>
                <li className="mobile-open">
                    <a onClick={() => setMobileOpen(!mobileOpen)}>
                        <div className={mobileOpen ? "open" : "close"}/>
                    </a>
                </li>
            </ul>
        </nav>
    );
}