import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import '../../css/main.css'

function Header() {
    return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <NavDropdown title="Apparel" id="basic-nav-dropdown">
                <NavDropdown.Item ><Link to="/store/?clothing=men" className="navBarItem">Men</Link></NavDropdown.Item>
                <NavDropdown.Item> <Link to="/store/?clothes=women" className="navBarItem">Women</Link></NavDropdown.Item>
                <NavDropdown.Item> <Link to="/store/?clothes=kids" className="navBarItem">Kids</Link></NavDropdown.Item>
                </NavDropdown>
                <Nav.Link><Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
    )
}

export default Header
