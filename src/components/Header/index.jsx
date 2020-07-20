import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import './style.scss';

const Header = () => {
        return (
                <Navbar bg="dark" variant="dark">
                        <Navbar.Brand>Shkaff-admin</Navbar.Brand>
                        <Nav className="mr-space nav-flex">
                                <Navbar.Text className='nav-item'>
                                        <Link className='nav-link' to='/categories'>Categories</Link>
                                </Navbar.Text>
                                <Navbar.Text className='nav-item'>
                                        <Link className='nav-link' to='/subcategories'>Subcategories</Link>
                                </Navbar.Text>
                                <Navbar.Text className='nav-item'>
                                        <Link className='nav-link' to='/products'>Products</Link>
                                </Navbar.Text>
                                <Navbar.Text className='nav-item'>
                                        <Link className='nav-link' to='/purchases'>Purchases</Link>
                                </Navbar.Text>
                        </Nav>

                </Navbar>
        )
}

export default Header
