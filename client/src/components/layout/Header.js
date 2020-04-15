import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <NavDropdown title="Apparel" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">T-Shirts</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Hoodies</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Pants</NavDropdown.Item>
                    <NavDropdown.Item href="/store/?page=1">Shoes</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/cart"><FontAwesomeIcon icon={faShoppingCart} /></Nav.Link>
                </Nav>
                {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form> */}
            </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header
