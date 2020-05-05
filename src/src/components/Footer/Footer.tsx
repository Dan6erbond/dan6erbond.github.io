import React, {useEffect} from "react";
import "./Footer.css";

export default function Footer() {
    const [transformY, setTransformY] = React.useState<number>(0);

    const handleScroll = () => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const scrolled = winScroll / height;

        setTransformY(scrolled);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });

    const style = {display: transformY > 0 ? "block" : "none"};

    return (
        <React.Fragment>
            <button id="scrollUp" style={style}>
                <div/>
            </button>
            <a style={style}
               href="mailto:moravrav@gmail.com"
               id="mailButton">
                <img src="/res/img/icons/envelope-regular.svg"
                     alt=""
                     height="25"/>
            </a>

            <footer>
                <div className="left">
                    <a href="https://github.com/Dan6erbond"
                       target="_blank"
                       rel="noopener noreferrer">
                        <img src="/res/img/icons/github.svg"
                             className="sm"
                             alt=""/>
                    </a>
                    <a href="https://www.patreon.com/devmariavi"
                       target="_blank"
                       rel="noopener noreferrer">
                        <img src="/res/img/icons/patreon.svg"
                             className="sm"
                             alt=""/>
                    </a>
                    <a href="https://www.reddit.com/user/Dan6erbond"
                       target="_blank"
                       rel="noopener noreferrer">
                        <img src="/res/img/icons/reddit.svg"
                             className="sm"
                             alt=""/>
                    </a>
                    <a href="https://www.youtube.com/channel/UCV2HtVYzjMELIhy6L4CAdug"
                       target="_blank"
                       rel="noopener noreferrer">
                        <img src="/res/img/icons/youtube.svg"
                             className="sm"
                             alt=""/>
                    </a>
                    <a href="https://stackoverflow.com/users/9176391/dan6erbond"
                       target="_blank"
                       rel="noopener noreferrer">
                        <img src="/res/img/icons/stackoverflow.svg"
                             className="sm"
                             alt=""/>
                    </a>
                    <a href="https://twitter.com/dan6erbond"
                       target="_blank"
                       rel="noopener noreferrer">
                        <img src="/res/img/icons/twitter.svg"
                             className="sm"
                             alt=""/>
                    </a>
                    <a href="https://discord.gg/wMEyKZk"
                       target="_blank"
                       rel="noopener noreferrer">
                        <img src="/res/img/icons/discord.svg"
                             className="sm"
                             alt=""/>
                    </a>
                </div>
                <div className="right">
                    ©
                    RaviAnand
                    Mohabir,
                    2019
                </div>
            </footer>
        </React.Fragment>
    );
}