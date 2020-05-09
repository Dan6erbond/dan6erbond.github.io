import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import VizSensor from "react-visibility-sensor";
import {motion} from "framer-motion";

import "./Projects.scss";
import ProjectCard from "./ProjectCard";

interface ProjectsProps {
    projectsRef: React.RefObject<HTMLDivElement>;
}

export default function Projects(props: ProjectsProps) {
    const {projectsRef} = props;

    const [isVisible, setIsVisible] = React.useState<boolean>(false);

    return (
        <VizSensor partialVisibility onChange={isVisible1 => {
            if (isVisible1 && !isVisible) {
                setIsVisible(true);
            }
        }}>
            <motion.div initial={false} animate={isVisible ? "visible" : "hidden"} ref={projectsRef}
                        style={{overflow: 'auto'}}>
                <Container fluid="md">
                    <Row>
                        <Col>
                            <motion.div variants={{
                                hidden: {
                                    translateY: '-20%',
                                    opacity: 0
                                },
                                visible: {
                                    translateY: 0,
                                    opacity: 1
                                }
                            }} transition={{duration: 0.6}}>
                                <ProjectCard image={<img className="idpa-image"
                                                         alt="IDPA" height="auto"
                                                         src="/res/img/projects/idpa.jpg"/>}>
                                    <React.Fragment>
                                        <h4>Interdisciplinary Project Work</h4>
                                        <p>
                                            Project about the usage of IT Tools and Software in Company and
                                            Private Workflows
                                        </p>
                                        <Link className="btn btn-outline-primary flat-button"
                                              to="/projects/idpa">
                                            Read More
                                        </Link>
                                    </React.Fragment>
                                </ProjectCard>
                            </motion.div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col xs={12} md={6}>
                            <motion.div style={{height: '100%'}} variants={{
                                hidden: {
                                    translateX: '-20%',
                                    opacity: 0
                                },
                                visible: {
                                    translateX: 0,
                                    opacity: 1
                                }
                            }} transition={{duration: 0.6}}>
                                <Card style={{height: '100%'}}>
                                    <Card.Body>
                                        <Container>
                                            <Row>
                                                <Col sm={12} md={4}>
                                                    <img style={{width: '90%', minWidth: '150px', maxWidth: '300px'}}
                                                         alt="IDPA" height="auto"
                                                         src="/res/img/fuzzle/logo_text.png"/>
                                                </Col>
                                                <Col sm={12} md={8}>
                                                    <h4>Fuzzle</h4>
                                                    <p>
                                                        A search algorithm initially written in Python, now ported to
                                                        languages such as JavaScript and C#.
                                                    </p>
                                                    <Link className="btn btn-outline-primary flat-button"
                                                          to="/projects/fuzzle">
                                                        Read More
                                                    </Link>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                        <Col xs={12} md={6}>
                            <motion.div variants={{
                                hidden: {
                                    translateX: '20%',
                                    opacity: 0
                                },
                                visible: {
                                    translateX: 0,
                                    opacity: 1
                                }
                            }} transition={{duration: 0.6}}>
                                <Card>
                                    <Card.Body>
                                        <Container>
                                            <Row>
                                                <Col sm={12} md={4}>
                                                    <img style={{width: '90%', minWidth: '150px', maxWidth: '300px'}}
                                                         alt="IDPA" height="auto"
                                                         src="/res/img/projects/idpa.jpg"/>
                                                </Col>
                                                <Col sm={12} md={8}>
                                                    <h4>Interdisciplinary Project Work</h4>
                                                    <p>Project about the usage of IT Tools and Software in Company and
                                                        Private Workflows
                                                    </p>
                                                    <Link className="btn btn-outline-primary flat-button"
                                                          to="/projects/idpa">
                                                        Read More
                                                    </Link>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col style={{textAlign: 'center'}}>
                            <Link className="btn btn-outline-primary flat-button"
                                  to="/projects">
                                View More
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </motion.div>
        </VizSensor>
    );
}