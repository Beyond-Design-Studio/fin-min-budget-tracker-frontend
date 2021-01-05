import React, { useEffect, useState } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom'
import firebase from 'firebase/app';

// authentication

export default function NavbarComponent(props) {
  const [signendIn, setSignedIn] = useState(false);
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      setSignedIn(true);
    } else {
      setSignedIn(false);
    }
  })

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/" >FinMin</Navbar.Brand>
      <Navbar.Collapse>
        <Nav className="ml-auto">
          <NavItem eventkey={1} href="/">
            <Nav.Link as={Link} to="/contact-us" >Contact Us</Nav.Link>
          </NavItem>
          <NavItem>
            {
              signendIn ?
              <button onClick={() => 
              {firebase.auth().signOut(); <Redirect to = '/' />}}>Sign-out</button>
              : ""
              
            }
            
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
