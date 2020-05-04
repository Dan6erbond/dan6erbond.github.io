import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <React.Fragment>
            <button id="scrollUp">
                <div></div>
            </button>
            <a href="mailto:moravrav@gmail.com"
               id="mailButton">
                <img src="/img/icons/envelope-regular.svg"
                     alt=""
                     height="25"/>
            </a>

            <footer>
                <div
                    className="left">
                    <a href="https://github.com/Dan6erbond"
                       target="_blank">
                        <img src="/img/icons/github.svg"
                             className="sm"
                             alt=""/>
                    </a>
                    <a href="https://www.patreon.com/devmariavi"
                       target="_blank">
                        <img src="/img/icons/patreon.svg"
                             className="sm"
                             alt=""/>
                    </a>
                    <a href="https://www.reddit.com/user/Dan6erbond"
                       target="_blank">
                        <img src="/img/icons/reddit.svg"
                             className="sm"
                             alt=""/>
                    </a>
                    <a href="https://www.youtube.com/channel/UCV2HtVYzjMELIhy6L4CAdug"
                       target="_blank">
                        <img src="/img/icons/youtube.svg"
                             className="sm"
                             alt=""/>
                    </a>
                    <a href="https://stackoverflow.com/users/9176391/dan6erbond"
                       target="_blank">
                        <img src="/img/icons/stackoverflow.svg"
                             className="sm"
                             alt=""/>
                    </a>
                    <a href="https://twitter.com/dan6erbond"
                       target="_blank">
                        <img
                            src="/img/icons/twitter.svg"
                            className="sm"
                            alt=""/>
                    </a>
                    <a
                        href="https://discord.gg/wMEyKZk"
                        target="_blank">
                        <img
                            src="/img/icons/discord.svg"
                            className="sm"
                            alt=""/>
                    </a>
                </div>
                <div
                    className="right">
                    ©
                    RaviAnand
                    Mohabir,
                    2019
                </div>
            </footer>
        </React.Fragment>
    );
}