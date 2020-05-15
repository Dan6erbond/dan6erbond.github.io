import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";

import "./ProjectCard.scss";
import VizSensor from "react-visibility-sensor";
import {motion} from "framer-motion";

interface LayoutProps {
    image?: React.ReactNode;
    children?: React.ReactNode;
    direction?: "up" | "down" | "left" | "right";
    animate?: boolean;
}

export default function ProjectCard(props: LayoutProps) {
    const {image, children} = props;

    const animate = props.animate ? true : !!props.direction;

    const direction = props.direction || "down";

    let hiddenVariant: any;

    switch (direction) {
        case "up":
            hiddenVariant = {
                translateY: '20%',
                opacity: 0
            };
            break;
        case "down":
            hiddenVariant = {
                translateY: '-20%',
                opacity: 0
            };
            break;
        case "left":
            hiddenVariant = {
                translateX: '20%',
                opacity: 0
            };
            break;
        case "right":
            hiddenVariant = {
                translateX: '-20%',
                opacity: 0
            };
    }

    const [isVisible, setIsVisible] = React.useState<boolean>(false);

    return (
        <VizSensor partialVisibility onChange={isVisible1 => {
            if (isVisible1 && !isVisible) {
                setIsVisible(true);
            }
        }}>
            <motion.div animate={!isVisible && animate ? "hidden" : "visible"} variants={{
                hidden: hiddenVariant,
                visible: {
                    translateY: 0,
                    translateX: 0,
                    opacity: 1
                }
            }} transition={{duration: 0.6}} style={{height: '100%'}}>
                <Card style={{height: '100%'}}>
                    <Card.Body>
                        <Container>
                            <Row>
                                <Col sm={12} md={4}
                                     className="project-image">
                                    {image}
                                </Col>
                                <Col sm={12} md={8}>
                                    {children}
                                </Col>
                            </Row>
                        </Container>
                    </Card.Body>
                </Card>
            </motion.div>
        </VizSensor>
    );
}