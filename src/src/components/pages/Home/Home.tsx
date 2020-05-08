import React from 'react';
import Banner from "./Banner";
import ScrollDown from "./ScrollDown";
import {Link} from "react-router-dom";
import {Card, Col, Container, Row} from "react-bootstrap";
import SkillBar, {Skill} from "./SkillBar";

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

    const skills: Skill[] = [
        {skillName: "Java", skillStrength: 9},
        {skillName: "Kotlin", skillStrength: 6},
        {skillName: "Python", skillStrength: 9},
        {skillName: "C#", skillStrength: 8},
        {skillName: "HTML/CSS", skillStrength: 9},
        {skillName: "PHP", skillStrength: 6},
        {skillName: "JavaScript", skillStrength: 8},
        {skillName: "TypeScript", skillStrength: 8},
        {skillName: "SQL", skillStrength: 6},
        {skillName: "C++", skillStrength: 3}
    ];

    return (
        <React.Fragment>
            <div className="full-page center">
                <div className="content">
                    <Banner/>
                    <ScrollDown targetRef={aboutRef} label="About Me"/>
                </div>
            </div>
            <div ref={aboutRef}>
                <Container fluid="md">
                    <Row>
                        <Col sm={12} md={4} lg={6}>
                            <div className="center-container">
                                <div className="content">
                                    <div className="profile-img"/>
                                    <p style={{margin: 0}}>
                                        I'm a motivated engineering student with a passion for computer sciences and digital
                                        media.
                                        Seeking to work on creating reliable systems and interesting technology.
                                        Created many systems used by others such as the Fuzzle search algorithm.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={8} lg={6}>
                            {skills.map((s, i) =>
                                <SkillBar key={i} skillName={s.skillName} skillStrength={s.skillStrength}/>)}
                        </Col>
                    </Row>
                </Container>
                <br/>
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
                                            <Col sm={12} md={4} style={{textAlign: 'center', paddingBottom: '10px'}}>
                                                <img style={{width: '90%', minWidth: '150px', maxWidth: '300px', boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'}}
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