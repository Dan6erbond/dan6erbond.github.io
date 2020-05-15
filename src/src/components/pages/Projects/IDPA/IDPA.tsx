import "./IDPA.scss";
import React from "react";
import {motion} from "framer-motion";
import VizSensor from "react-visibility-sensor";
import {Col, Container, Row} from "react-bootstrap";
import ScrollDown from "../../../ScrollDown/ScrollDown";
import {faDownload, faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Banner from "../../../Banner/Banner";
import {SoftwareAspectsGraph} from "./Graphs";

export default function IDPA() {
    const [textVisible, setTextVisible] = React.useState<boolean>(false);

    const textRef = React.useRef(null);

    const sources = [
        {
            site: "Alte Kanti Aarau",
            title: "Alle wichtigen Informationen zur IMS",
            url: "https://altekanti.ch/informatikmittelschule/allgemeine-informationen",
            date: "April 30, 2020"
        },
        {
            site: "AutoHotKey",
            title: "AutoHotKey",
            url: "https://www.autohotkey.com/",
            date: "April 26, 2020"
        },
        {
            site: "Computer Hope",
            title: "Script",
            url: "https://www.computerhope.com/jargon/s/script.htm",
            date: "April 26, 2020"
        },
        {
            site: "Computer Hope",
            title: "Macro",
            url: "https://www.computerhope.com/jargon/m/macro.htm",
            date: "April 26, 2020"
        },
        {
            site: "Draw.io",
            title: "Online Support",
            url: "https://support.draw.io/display/DO/draw.io+Online+Support",
            date: "February 16, 2020"
        },
        {
            site: "Evernote, Emily Esposito",
            title: "6 Ways to Automate Simple Work Tasks",
            url: "https://evernote.com/blog/6-ways-to-automate-simple-work-tasks/",
            date: "April 29, 2020"
        },
        {
            site: "Gabler Wirtschaftslexikon",
            title: "Programmablaufplan",
            url: "https://wirtschaftslexikon.gabler.de/definition/programmablaufplan-42988",
            date: "February 16, 2020"
        },
        {
            site: "IFTTT",
            title: "What is IFTTT?",
            url: "https://help.ifttt.com/hc/en-us/articles/115010325748-What-is-IFTTT-",
            date: "April 28, 2020"
        },
        {
            site: "Lifewire",
            title: "How to Organize & Categorize Messages in Gmail with Labels",
            url: "https://www.lifewire.com/how-to-organize-and-categorize-messages-with-labels-in-gmail-1171996",
            date: "April 28, 2020"
        },
        {
            site: "Macro Recorder",
            title: "Macro Recorder",
            url: "https://www.macrorecorder.com/",
            date: "April 26, 2020"
        },
        {
            site: "Microsoft",
            title: "Visio",
            url: "https://products.office.com/de-ch/visio/flowchart-software",
            date: "February 16, 2020"
        },
        {
            site: "Microsoft",
            title: "Power Apps",
            url: "https://powerapps.microsoft.com/en-us/",
            date: "April 26, 2020"
        },
        {
            site: "Microsoft",
            title: "Power Automate",
            url: "https://flow.microsoft.com/en-us/",
            date: "April 26, 2020"
        },
        {
            site: "Microsoft",
            title: "Seriendruck mithilfe einer Excel-Tabelle",
            url: "https://support.office.com/de-de/article/seriendruck-mithilfe-einer-excel-tabelle-858c7d7f-5cc0-4ba1-9a7b-0a948fa3d7d3",
            date: "April 26, 2020"
        },
        {
            site: "Microsoft",
            title: "Create or run a macro",
            url: "https://support.office.com/en-us/article/create-or-run-a-macro-c6b99036-905c-49a6-818a-dfb98b7c3c9c",
            date: "April 28, 2020"
        },
        {
            site: "Moodle",
            title: "About Moodle",
            url: "https://docs.moodle.org/38/en/About_Moodle",
            date: "April 29, 2020"
        },
        {
            site: "Opensource.com",
            title: "What is open source?",
            url: "https://opensource.com/resources/what-open-source",
            date: "February 16, 2020"
        },
        {
            site: "RFFlow 5",
            title: "Drawing a Structured Flowchart",
            url: "https://www.rff.com/structured_flowchart.php",
            date: "April 30, 2020"
        },
        {
            site: "Smartbear",
            title: "What is Automated Testing?",
            url: "https://smartbear.com/learn/automated-testing/what-is-automated-testing/",
            date: "April 30, 2020"
        },
        {
            site: "UMLet",
            title: "UMLet 14.3",
            url: "https://www.umlet.com/",
            date: "February 16, 2020"
        },
        {
            site: "Visual Paradigm",
            title: "Flowchart Example: Vacuum Robot",
            url: "https://online.visual-paradigm.com/diagrams/templates/flowchart/vacuum-robot/",
            date: "February 16, 2020"
        },
        {
            site: "Visual Paradigm",
            title: "Visual Paradigm Online Diagrams",
            url: "https://online.visual-paradigm.com/diagrams/",
            date: "February 16, 2020"
        },
        {
            site: "Webopedia",
            title: "API – application program interface",
            url: "https://www.webopedia.com/TERM/A/API.html",
            date: "April 29, 2020"
        },
        {
            site: "Windows Central",
            title: "How to create an automated task using Task Scheduler on Windows 10",
            url: "https://www.windowscentral.com/how-create-automated-task-using-task-scheduler-windows-10",
            date: "April 26, 2020"
        },
        {
            site: "Zapier",
            title: "What is Zapier?",
            url: "https://zapier.com/learn/getting-started-guide/what-is-zapier/",
            date: "April 26, 2020"
        }
    ];

    const getSources = () => {
        const half = Math.ceil(sources.length / 2);

        const firstHalf = sources.slice(0, half);
        const secondHalf = sources.slice(half);

        return (
            <Container className="sources">
                <Row>
                    <Col sm={12} md={6}>
                        <ul>
                            {firstHalf.map((s, i) => <li key={i}>
                                {s.site}: <a
                                href={s.url}
                                target="_blank"
                                rel="noopener noreferrer">
                                «{s.title}» <FontAwesomeIcon icon={faExternalLinkAlt}/>
                            </a> Retrieved {s.date}
                            </li>)}
                        </ul>
                    </Col>
                    <Col sm={12} md={6}>
                        <ul>
                            {secondHalf.map((s, i) => <li key={i}>
                                {s.site}: <a
                                href={s.url}
                                target="_blank"
                                rel="noopener noreferrer">
                                «{s.title}» <FontAwesomeIcon icon={faExternalLinkAlt}/>
                            </a> Retrieved {s.date}
                            </li>)}
                        </ul>
                    </Col>
                </Row>
            </Container>
        );
    }

    return (
        <React.Fragment>
            <Banner imageSrc="/res/img/projects/idpa/employees-computer.jpg" bannerHeight="60vh">
                <h2 className="banner-title">
                    Usage of IT Tools and Software in Corporate Workflows
                </h2>
                <p className="banner-text">
                    Interdisciplinary Project Work on the usage of IT tools and software in
                    corporate and private environments, as well as methods of schooling for the
                    analysed programs.
                </p>
                <a className="btn btn-outline-primary flat-button"
                   href="/res/docs/IDPA/Informatikmitteleinsatz_in_Unternehmen_v5.pdf" download>
                    <FontAwesomeIcon icon={faDownload}/> Download
                </a>
                <ScrollDown targetRef={textRef} label="Read More"/>
            </Banner>
            <VizSensor partialVisibility onChange={isVisible1 => {
                if (isVisible1 && !textVisible) {
                    setTextVisible(true);
                }
            }}>
                <motion.div className="text" ref={textRef} initial={false}
                            animate={textVisible ? "visible" : "hidden"}>
                    <Container fluid="md">
                        <Row>
                            <Col sm={12} md={4}>
                                <motion.div variants={{
                                    hidden: {
                                        translateX: "-20%",
                                        opacity: 0
                                    },
                                    visible: {
                                        translateX: 0,
                                        opacity: 1
                                    }
                                }} transition={{duration: 0.6}}>
                                    <img className="idpa-image"
                                         alt="IDPA | Informatikmitteleinsatz in Unternehmen" height="auto"
                                         src="/res/img/projects/idpa/idpa.jpg"/>
                                </motion.div>
                            </Col>
                            <Col sm={12} md={8}>
                                <motion.div variants={{
                                    hidden: {
                                        translateX: "20%",
                                        opacity: 0
                                    },
                                    visible: {
                                        translateX: 0,
                                        opacity: 1
                                    }
                                }} transition={{duration: 0.6}}>
                                    <h3>Goal</h3>
                                    <p>
                                        The IDPA done at the Computing Colleges in Switzerland is a requirement as part
                                        of the curriculum for the "Berufsmatur" (vocational baccalaureate) and the EFZ
                                        (Federal certificate of Competence).
                                        <br/>
                                        <br/>
                                        It consists of a four-month research-oriented period where information on the
                                        chosen topic is gathered from credible sources and with the combination of
                                        personal contributions a conclusion for this part can be formed.
                                        <br/>
                                        <br/>
                                        Once the internship has been launched, the second period, more oriented on
                                        practical research done in the work environment, is used to reinforce previously
                                        gathered data and to evaluate the predictions made in the first part.
                                    </p>
                                </motion.div>
                            </Col>
                        </Row>
                    </Container>
                    <Container fluid="md">
                        <motion.div variants={{
                            hidden: {
                                translateY: "20%",
                                opacity: 0
                            },
                            visible: {
                                translateY: 0,
                                opacity: 1
                            }
                        }} transition={{duration: 0.6}}>
                            <h3>Topic</h3>
                            <p>
                                The topic discussed in this project is the usage of IT tools and various software in
                                company environments. As research, specific to company environments, can only reliably
                                be done at the intern company, though, the first period focused on the usage for school
                                and private workflows.
                                <br/>
                                <br/>
                                There were three key questions to be answered by the end of the examination:
                            </p>
                            <ul>
                                <li>
                                    How can workflows be visualized with IT tools in company, private and school
                                    environments?
                                </li>
                                <li>
                                    How can workflows be automated with IT tools in company, private and school
                                    environments?
                                </li>
                                <li>
                                    How can users of IT tools and software be educated on their functionalities and
                                    capabilities?
                                </li>
                            </ul>
                            <h3>Research</h3>
                            <p>
                                To create a baseline of software and tools to examine, a set of visualisation and
                                automation programs were found and compared. Additionally, some quantitative research
                                was done with the results of a survey that received over 120 responses from multiple
                                demographics in IT- and non-IT related fields.
                                <br/>
                                <br/>
                                The chosen tools for the visualisation were: <a href="https://www.visual-paradigm.com/"
                                                                                target="_blank"
                                                                                rel="noopener noreferrer">Visual
                                Paradigm</a>, <a href="https://www.diagrams.net/" target="_blank"
                                                 rel="noopener noreferrer">Draw.io</a>, <a
                                href="https://www.microsoft.com/en/microsoft-365/visio/flowchart-software"
                                target="_blank" rel="noopener noreferrer">Microsoft Visio</a> and <a
                                href="https://www.umlet.com/" target="_blank" rel="noopener noreferrer">UMLet</a>.
                                <br/>
                                <br/>
                                In the portion containing field research done by using the given tools and visualising,
                                as well as automating, a set of workflows, a multitude of software were used based on
                                the use-case including self-made Python scripts, and <a
                                href="https://emea.flow.microsoft.com/en-us/" target="_blank"
                                rel="noopener noreferrer">Microsoft Power Automate</a>.
                            </p>
                            <h3>Summary</h3>
                            <p>
                                Besides evaluating the survey responses, which showed in particular what kind of tasks
                                are common and can be automated as well as what kind of software users prefer, workflows
                                were visualized and automated with the right set of tools to analyze their effectiveness
                                and overall practically in comparison to traditional methods.
                                <br/>
                                <br/>
                                This graph from the survey responses shows which aspects of a software users find most
                                important:
                            </p>
                            <div style={{width: '100%', height: '45vh'}}>
                                <SoftwareAspectsGraph/>
                            </div>
                            <h3>Conclusion</h3>
                            <p>
                                Among the tools examined to create visualizations of workflows, Microsoft Visio and
                                UMLet seem the most suitable. Visual Paradigm and Draw.io are alternatives that offer
                                a compelling set of features, but don't scale with the overall capabilities of Visio
                                or UMLet's simplicity. Additionally, Visual Paradigm is financially less feasible for
                                smaller businesses, already utilizing the Microsoft Office Suite, or those looking
                                for an open source option. UMLet also comes ahead in terms of its widespread use, as
                                it's been dominant in the field of software engineering and database design for quite
                                some time now.
                                <br/>
                                <br/>
                                The conclusion for automation is much more complicated. While tools such as Zapier and
                                Microsoft Power Automate are highly capable and work very reliable in the environment
                                they were designed for, they don't scale well with the individual needs of a user and
                                thus get edged out by self-made scripts and programs consistently. Additionally, any
                                self-made script can be made open source and improved upon in rapid succession, whereas
                                updates to larger platforms only come in bulk.
                            </p>
                            <h3>References</h3>
                            <hr/>
                            <h4>Sources</h4>
                            {getSources()}
                            <br/>
                            <h4>Downloads</h4>
                            <ul>
                                <li>
                                    <FontAwesomeIcon icon={faDownload}/>{' '}
                                    <a href="/res/docs/IDPA/moodle.py" download>Moodle Downloader</a>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faDownload}/>{' '}
                                    <a href="/res/docs/IDPA/notification_on_file_delete.json" download>Microsoft Flow:
                                        Send E-Mail Notification on File Deletion in OneDrive</a>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faDownload}/>{' '}<a
                                    href="/res/docs/IDPA/save_email_attachments.json" download>Microsoft Flow: Save
                                    E-Mail Attachments in OneDrive</a>
                                </li>
                            </ul>
                        </motion.div>
                    </Container>
                </motion.div>
            </VizSensor>
        </React.Fragment>
    )
}