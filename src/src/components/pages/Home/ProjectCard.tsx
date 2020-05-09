import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";

import "./ProjectCard.scss";

interface LayoutProps {
    image?: React.ReactNode;
    children?: React.ReactNode;
}

export default function ProjectCard(props: LayoutProps) {
    const {image, children} = props;

    return (
        <Card>
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
    );
}