import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link, Outlet } from 'react-router-dom'

const NavMenu = () => {
    return (
        <>
            <Navbar bg="info" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto text-center">
                            <Nav.Link >
                                <Link to='/' className='render'>Home</Link>
                            </Nav.Link>
                            <Nav.Link >
                                <Link to='/a' className='render'>Page-A</Link>
                            </Nav.Link>
                            <Nav.Link >
                                <Link to='/b' className='render' >Page-B</Link>
                            </Nav.Link>
                            <Nav.Link >
                                <Link to='/form' className='render' >Form</Link>
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container>
                <Outlet />
            </Container>
        </>
    )
}

export default NavMenu