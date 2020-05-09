import * as React from "react";
import VizSensor from 'react-visibility-sensor';

import "./SkillBar.scss";

export interface Skill {
    skillName: string;
    skillStrength: number;
}

export default function SkillBar (props: Skill) {
    const {skillName, skillStrength} = props;

    const [barWidth, setBarWidth] = React.useState<number>(0);

    return (
        <VizSensor onChange={(isVisible => {
            if (isVisible && barWidth == 0) {
                setBarWidth(skillStrength*10);
            }
        })}>
            <div className="skill">
                <p>{skillName}</p>
                <div className="bar">
                    <div style={{width: `${barWidth}%`}}/>
                    <span>{skillStrength}/10</span>
                </div>
            </div>
        </VizSensor>
    )
}