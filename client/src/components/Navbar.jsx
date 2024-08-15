import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';
import './Navbar.css';

const NavBar = () => {
    return (
        <>
            <div className='topPage'>
                <h4></h4>
            </div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">job_portal</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Job Search</Nav.Link>
                            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                            <NavDropdown title="Job Seekers" id="job-seekers-dropdown">
                                <NavDropdown.Item as={Link} to="/login">Log In</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/sign-up">Sign Up</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/user-list">
                                <i className="fas fa-users"></i> {/* Icône pour la liste des utilisateurs */}
                            </Nav.Link>
                            <Nav.Link as={Link} to="/logout">
                                <i className="fas fa-sign-out-alt"></i>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
