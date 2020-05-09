import React from 'react';
import Banner from "./Banner";
import ScrollDown from "./ScrollDown";
import {Link} from "react-router-dom";
import {Card, Col, Container, Row} from "react-bootstrap";
import About from "./About";

import './Home.scss';

export default function Home() {
    const aboutRef = React.useRef(null);
    const projectsRef = React.useRef(null);

    const [inProp, setInProp] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (!inProp) {
            setTimeout(() => setInProp(true), 1);
        }
    });

    return (
        <React.Fragment>
            <div className="full-page center">
                <div className="content">
                    <Banner/>
                    <ScrollDown targetRef={aboutRef} label="About Me"/>
                </div>
            </div>
            <About aboutRef={aboutRef} projectsRef={projectsRef}/>
            <br/>
            <div ref={projectsRef} style={{overflow: 'auto'}}>
                <Container fluid="md">
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Container>
                                        <Row>
                                            <Col sm={12} md={4} style={{textAlign: 'center', paddingBottom: '10px'}}>
                                                <img className="idpa-image"
                                                     alt="IDPA" height="auto"
                                                     src="/res/img/projects/idpa.jpg"/>
                                            </Col>
                                            <Col sm={12} md={8}>
                                                <h4>Interdisciplinary Project Work</h4>
                                                <p>Project about the usage of IT Tools and Software in Company and
                                                    Private
                                                    Workflows</p>
                                                <Link className="btn btn-outline-primary flat-button"
                                                      to="/projects/idpa">
                                                    Read More
                                                </Link>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col xs={12} md={6}>
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
                                                    Private
                                                    Workflows</p>
                                                <Link className="btn btn-outline-primary flat-button"
                                                      to="/projects/idpa">Read
                                                    More</Link>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={6}>
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
                                                    Private
                                                    Workflows</p>
                                                <Link className="btn btn-outline-primary flat-button"
                                                      to="/projects/idpa">Read
                                                    More</Link>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}