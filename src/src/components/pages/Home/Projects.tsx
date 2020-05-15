import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

import "./Projects.scss";
import ProjectCard from "../Projects/ProjectCard/ProjectCard";

interface ProjectsProps {
    projectsRef: React.RefObject<HTMLDivElement>;
}

export default function Projects(props: ProjectsProps) {
    const {projectsRef} = props;

    return (
        <div ref={projectsRef}>
            <Container fluid="md">
                <Row>
                    <Col>
                        <ProjectCard animate image={<img className="idpa-image"
                                                 alt="IDPA | Informatikmitteleinsatz in Unternehmen" height="auto"
                                                 src="/res/img/projects/idpa/idpa.jpg"/>}>
                            <React.Fragment>
                                <h4>Interdisciplinary Project Work</h4>
                                <p>
                                    Project about the usage of IT tools and software in corporate and
                                    private workflows.
                                </p>
                                <Link className="btn btn-outline-primary flat-button"
                                      to="/projects/idpa">
                                    Read More
                                </Link>
                            </React.Fragment>
                        </ProjectCard>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col xs={12} md={6}>
                        <ProjectCard direction="right" image={<img style={{width: '90%', minWidth: '100px', maxWidth: '300px'}}
                                                 alt="Fuzzle" height="auto"
                                                 src="/res/img/projects/fuzzle/logo_text.png"/>}>
                            <React.Fragment>
                                <h4>Fuzzle</h4>
                                <p>
                                    A search algorithm initially written in Python, now ported to
                                    languages such as JavaScript and C#.
                                </p>
                                <Link className="btn btn-outline-primary flat-button"
                                      to="/projects/fuzzle">
                                    Read More
                                </Link>
                            </React.Fragment>
                        </ProjectCard>
                    </Col>
                    <Col xs={12} md={6}>
                        <ProjectCard direction="left" image={<img style={{width: '90%', minWidth: '100px', maxWidth: '300px'}}
                                                 alt="ASP.NET" height="auto"
                                                 src="/res/img/icons/asp.net.png"/>}>
                            <React.Fragment>
                                <h4>Who Wants To Be A Millionaire</h4>
                                <p>
                                    Implementation of the Who Wants To Be A Millionaire game in C#
                                    with a React front-end.
                                </p>
                                <Link className="btn btn-outline-primary flat-button"
                                      to="/projects/wwtbam">
                                    Read More
                                </Link>
                            </React.Fragment>
                        </ProjectCard>
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
        </div>
    );
}