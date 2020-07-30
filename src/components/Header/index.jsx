import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

import {NAV_BAR} from '../../config'

import './style.scss';

const Header = () => {
    const [location, setLocation] = useState(window.location.href.split('/').pop())

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Shkaff-admin</Navbar.Brand>
            <Nav className="mr-space nav-flex">
                {
                    NAV_BAR.map((item, i) => (
                        <Navbar.Text className='nav-item' key={item.link}>
                            <Link className={`nav-link ${location === item.link && 'active'}`}
                                  to={`/${item.link}`}
                                  onClick={() => setLocation(item.link)}>
                                {item.name}
                            </Link>
                        </Navbar.Text>
                    ))
                }
            </Nav>
        </Navbar>
    )
}

export default Header
