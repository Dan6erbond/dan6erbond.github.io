import "./IDPA.scss";
import React from "react";
import {motion} from "framer-motion";
import VizSensor from "react-visibility-sensor";
import {Col, Container, Row} from "react-bootstrap";
import ScrollDown from "../../../ScrollDown/ScrollDown";
import {faArrowAltCircleDown, faHammer} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Banner from "../../../Banner/Banner";

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
                                The topic discussed in my project is the usage of IT tools and various software in
                                company environments. As research, specific to company environments can only reliably
                                done at the intern company, though, the first period focused on the usage for school
                                and private workflows.
                                <br/>
                                <br/>
                                There were three key questions to be answered by the end of the research:
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
                                <FontAwesomeIcon icon={faHammer}/> Work in progress!
                            </p>
                            <h3>Summary</h3>
                            <p>
                                <FontAwesomeIcon icon={faHammer}/> Work in progress!
                            </p>
                            <h3>Conclusion</h3>
                            <p>
                                <FontAwesomeIcon icon={faHammer}/> Work in progress!
                            </p>
                        </motion.div>
                    </Container>
                </motion.div>
            </VizSensor>
        </React.Fragment>
    )
}