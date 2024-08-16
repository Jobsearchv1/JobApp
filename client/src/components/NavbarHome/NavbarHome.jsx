import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';
import '../NavbarHome/NavbarHome.css';

const NavBar = () => {
    return (
        <>
            <div className='top'>
                <h4></h4>
            </div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <h1 className='title'>Job Search App</h1>

                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                    
                        <Nav className='nav'>

                            <Nav.Link as={Link} to="#">
                                <input className='Box' type="text" placeholder='Search....' />
                            </Nav.Link>
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <NavDropdown title="Registration" id="job-seekers-dropdown">
                                <NavDropdown.Item as={Link} to="/sign-up">Sign Up</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/login">
                                <i className="fas fa-user"></i>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/logout">
                                <i className="fas fa-sign-out-alt"></i>
                            </Nav.Link>
                        </Nav>
                    
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
