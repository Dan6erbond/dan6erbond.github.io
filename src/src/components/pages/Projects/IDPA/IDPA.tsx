import "./IDPA.scss";
import React from "react";
import {motion} from "framer-motion";
import VizSensor from "react-visibility-sensor";
import {Col, Container, Row} from "react-bootstrap";
import ScrollDown from "../../../ScrollDown/ScrollDown";
import {faArrowAltCircleDown, faHammer} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Banner from "../../../Banner/Banner";
import {SoftwareAspectsGraph} from "./Graphs";

export default function IDPA() {
    const [textVisible, setTextVisible] = React.useState<boolean>(false);

    const textRef = React.useRef(null);

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
                   href="/res/docs/Informatikmitteleinsatz_in_Unternehmen_v5.pdf" download>
                    <FontAwesomeIcon icon={faArrowAltCircleDown}/> Download
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
                                         src="/res/img/projects/idpa.jpg"/>
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
                            </p>
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
                                <br/>
                                <br/>
                                <div style={{width: '100%', height: '45vh'}}>
                                    <SoftwareAspectsGraph/>
                                </div>
                            </p>
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
                        </motion.div>
                    </Container>
                </motion.div>
            </VizSensor>
        </React.Fragment>
    )
}