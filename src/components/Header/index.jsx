import React from 'react'
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {Navbar, Nav} from 'react-bootstrap';

import {logoutUser} from  '../../redux/user/user.actions'
import {MENU_ITEMS} from "../../config";
import './style.scss';

const Header = () => {
    const {isAuth, userName, location} = useSelector(({User, router}) => ({
        isAuth: User.isAuth,
        userName: User.userName,
        location: router.location.pathname,
    }))
    const dispatch = useDispatch()

    const onLogOut = () => window.confirm('Дійсно бажаєте вийти?') && dispatch(logoutUser())

    return (
        <Navbar bg="dark" variant="dark">
            <Link to={isAuth ? '/' : '/login'}>
                <Navbar.Brand>Shkaff-admin</Navbar.Brand>
            </Link>
            {isAuth && <Nav className="mr-space nav-flex">
                {
                    MENU_ITEMS.map((item, i) => (
                        <Navbar.Text className='nav-item' key={item.link}>
                            <Link className={`nav-link ${location === item.link && 'active'}`}
                                  to={`${item.link}`}>
                                {i ===4 && userName ? userName : item.name}
                            </Link>
                        </Navbar.Text>
                    ))
                }
            </Nav>}
            {isAuth && <span className='nav-item' onClick={onLogOut}>Вийти</span>}
        </Navbar>
    )
}

export default Header
