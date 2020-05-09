import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import Timeline from "./Timeline";
import {faGuitar, faMedal, faCamera, faRunning} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {motion} from "framer-motion";

import "./About.scss";

export default function About() {
    return (
        <Container fluid="md">
            <h3 style={{textAlign: 'center'}}>About</h3>
            <Container fluid="sm" style={{margin: '0 auto', maxWidth: '600px'}}>
                <p>
                    Hi! I'm an engineering student based in Switzerland, currently studying at the IMS in Aarau.
                    <br/>
                    <br/>
                    I've worked on numerous professional and private projects in the fields of webdesign, back-end and
                    data analysis.
                    <br/>
                    <br/>
                    Furthermore, I have a solid background in common programming languages such as C#, Java, and Python,
                    as well as a profound understanding of layout & design.
                </p>
            </Container>
            <br/>
            <h4 style={{textAlign: 'center'}}>Education</h4>
            <Timeline/>
            <br/>
            <h4 style={{textAlign: 'center'}}>Hobbies</h4>
            <br/>
            <Container>
                <Row>
                    <Col sm={6} md={3}>
                        <div className="hobby">
                            <motion.div
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                            >
                            <FontAwesomeIcon icon={faGuitar}/>
                            </motion.div>
                            <p>Guitar</p>
                        </div>
                    </Col>
                    <Col sm={6} md={3}>
                        <div className="hobby">
                            <motion.div
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                            >
                            <FontAwesomeIcon icon={faRunning}/>
                            </motion.div>
                            <p>Jogging</p>
                        </div>
                    </Col>
                    <Col sm={6} md={3}>
                        <div className="hobby">
                            <motion.div
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                            >
                            <FontAwesomeIcon icon={faCamera}/>
                            </motion.div>
                            <p>Photography</p>
                        </div>
                    </Col>
                    <Col sm={6} md={3}>
                        <div className="hobby">
                            <motion.div
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                            >
                                <FontAwesomeIcon icon={faMedal}/>
                            </motion.div>
                            <p>Karate</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}