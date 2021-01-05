import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom'
// authentication

export default function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/" >FinMin</Navbar.Brand>
      <Navbar.Collapse>
        <Nav className="ml-auto">
          <NavItem eventkey={1} href="/">
            <Nav.Link as={Link} to="/contact-us" >Contact Us</Nav.Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>  
  )
}