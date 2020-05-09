import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import SkillBar, {Skill} from "./SkillBar";
import ScrollDown from "./ScrollDown";

import "./About.scss";

interface AboutProps {
    aboutRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
}

export default function About(props: AboutProps){
    const {aboutRef, projectsRef} = props;

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
        <div ref={aboutRef}>
            <Container fluid="md">
                <Row>
                    <Col sm={12} md={4} lg={6}>
                        <div className="center-container">
                            <div className="content about">
                                <div className="profile-img"/>
                                <p style={{margin: 0}}>
                                    I'm a motivated engineering student with a passion for computer sciences and
                                    digital
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
    );
}