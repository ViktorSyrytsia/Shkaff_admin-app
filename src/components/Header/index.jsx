import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

import './style.scss';

const Header = () => {
        return (
                <Navbar bg="dark" variant="dark">
                        <Navbar.Brand>Shkaff-admin</Navbar.Brand>
                        <Nav className="mr-space">
                                <Nav.Link href="#home">Categories</Nav.Link>
                                <Nav.Link href="#features">Subcategories</Nav.Link>
                                <Nav.Link href="#pricing">Product</Nav.Link>
                                <Nav.Link href="#pricing">Purchases</Nav.Link>
                        </Nav>

                </Navbar>
        )
}

export default Header
