import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import {useSelector} from "react-redux";
import {Navbar, Nav} from 'react-bootstrap';

import {NAV_BAR} from '../../config'

import './style.scss';

const Header = () => {
    const {isAuth, userName} = useSelector(({User}) => ({
        isAuth: User.isAuth,
        userName: User.userName,
    }))
    const [location, setLocation] = useState(window.location.href.split('/').pop())

    return (
        <Navbar bg="dark" variant="dark">
            <Link to='/'>
                <Navbar.Brand>Shkaff-admin</Navbar.Brand>
            </Link>
            {isAuth && <Nav className="mr-space nav-flex">
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
            </Nav>}
            <div className='navbar-user'>
                {userName || 'Not logged'}
            </div>
        </Navbar>
    )
}

export default Header
