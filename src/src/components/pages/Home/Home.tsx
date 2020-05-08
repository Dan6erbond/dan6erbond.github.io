import React from 'react';

import Timeline from "./Timeline";
import Banner from "./Banner";

import './Home.scss';
import ScrollDown from "./ScrollDown";
import {Link} from "react-router-dom";
import {Card, Col, Container, Row} from "react-bootstrap";

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
                    <Banner aboutRef={aboutRef}/>
                </div>
            </div>
            <div ref={aboutRef}>
                <div className="profile-img"/>
                <br/>
                <Container fluid="md">
                    <Row>
                        <p style={{margin: 0}}>
                            I'm a motivated engineering student with a passion for computer sciences and digital media.
                            Seeking to work on creating reliable systems and interesting technology.
                            Created many systems used by others such as the Fuzzle search algorithm.
                        </p>
                    </Row>
                </Container>
                <Timeline/>
                <ScrollDown targetRef={projectsRef} label="Projects"/>
            </div>
            <br/>
            <div ref={projectsRef} style={{overflow: 'auto'}}>
                <Container fluid="md">
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Container>
                                        <Row>
                                            <Col sm={12} md={4}>
                                                <img style={{width: '90%', minWidth: '150px', maxWidth: '300px'}} alt="IDPA" height="auto"
                                                     src="/res/img/projects/idpa.jpg"/>
                                            </Col>
                                            <Col sm={12} md={8}>
                                                <h4>Interdisciplinary Project Work</h4>
                                                <p>Project about the usage of IT Tools and Software in Company and Private
                                                    Workflows</p>
                                                <Link className="btn btn-outline-primary flat-button" to="/projects/idpa">Read
                                                    More</Link>
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
                                                <img style={{width: '90%', minWidth: '150px', maxWidth: '300px'}} alt="IDPA" height="auto"
                                                     src="/res/img/projects/idpa.jpg"/>
                                            </Col>
                                            <Col sm={12} md={8}>
                                                <h4>Interdisciplinary Project Work</h4>
                                                <p>Project about the usage of IT Tools and Software in Company and Private
                                                    Workflows</p>
                                                <Link className="btn btn-outline-primary flat-button" to="/projects/idpa">Read
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
                                                <img style={{width: '90%', minWidth: '150px', maxWidth: '300px'}} alt="IDPA" height="auto"
                                                     src="/res/img/projects/idpa.jpg"/>
                                            </Col>
                                            <Col sm={12} md={8}>
                                                <h4>Interdisciplinary Project Work</h4>
                                                <p>Project about the usage of IT Tools and Software in Company and Private
                                                    Workflows</p>
                                                <Link className="btn btn-outline-primary flat-button" to="/projects/idpa">Read
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