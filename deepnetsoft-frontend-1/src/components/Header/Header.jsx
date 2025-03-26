import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'

function Header() {
    const [activeSection, setActiveSection] = useState("home");

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setActiveSection(id);
        }
    };

    return (
        <div>
            <Navbar expand="lg" style={{ backgroundColor: '#121618' }}>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img src="./logo.png" alt="" />
                        <span className="brand-text"><span className="deep">DEEP</span> <span className="net">NET</span></span>
                        <span className="soft-text">SOFT</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto custom-nav fw-semibold p-3">
                            <Nav.Link
                                onClick={() => scrollToSection("home", setActiveSection)}
                                className={activeSection === "home" ? "active" : ""}
                            >
                                HOME
                            </Nav.Link>
                            <Nav.Link
                                onClick={() => scrollToSection("menu", setActiveSection)}
                                className={activeSection === "menu" ? "active" : ""}
                            >
                                MENU
                            </Nav.Link>
                            <Nav.Link
                                onClick={() => scrollToSection("reservation", setActiveSection)}
                                className={activeSection === "reservation" ? "active" : ""}
                            >
                                MAKE A RESERVATION
                            </Nav.Link>
                            <Nav.Link
                                onClick={() => scrollToSection("contact", setActiveSection)}
                                className={activeSection === "contact" ? "active" : ""}
                            >
                                CONTACT US
                            </Nav.Link>
                            <Nav.Link as={Link} to="/create-menu">CREATE-MENU</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
