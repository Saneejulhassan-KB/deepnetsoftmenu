import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Title.css";

function Title() {
    return (
        <div className="menu-section">
            <Container>
                <Row className="justify-content-center text-center">
                    <Col md={8}>
                        <h1 className="menu-title">MENU</h1>
                        <p className="menu-description">
                            Please take a look at our menu featuring food, drinks, and brunch.
                            If you'd like to place an order, use the "Order Online" button
                            located below the menu.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Title;
