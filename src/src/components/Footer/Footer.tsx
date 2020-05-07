import React from "react";

import "./Footer.scss";
import {faGithub, faReddit, faStackOverflow, faYoutube, faDiscord} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <footer>
            <div>
                © RaviAnand Mohabir, 2020
            </div>
            <div>
                <a href="https://github.com/Dan6erbond"
                   target="_blank"
                   rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub}/>
                </a>{' '}
                <a href="https://www.reddit.com/user/Dan6erbond"
                   target="_blank"
                   rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faReddit}/>
                </a>{' '}
                <a href="https://stackoverflow.com/users/9176391/dan6erbond"
                   target="_blank"
                   rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faStackOverflow}/>
                </a>{' '}
                <a href="https://www.youtube.com/channel/UCV2HtVYzjMELIhy6L4CAdug"
                   target="_blank"
                   rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faYoutube}/>
                </a>{' '}
                <a href="https://discord.gg/wMEyKZk"
                   target="_blank"
                   rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faDiscord}/>
                </a>
            </div>
        </footer>
    );
}