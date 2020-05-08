import * as React from "react";
import {Col, Container, Row} from "react-bootstrap";

import "./SkillBar.scss";

export interface Skill {
    skillName: string;
    skillStrength: number;
}

export default function SkillBar (props: Skill) {
    const {skillName, skillStrength} = props;

    return (
        <div className="skill">
            <p>{skillName}</p>
            <div className="bar">
                <div style={{width: `${skillStrength*10}%`}}/>
            </div>
            <p className="count">{skillStrength}/10</p>
        </div>
    )
}