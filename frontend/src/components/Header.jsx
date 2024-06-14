import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'

function Header() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
      <LinkContainer to="/">
        <Navbar.Brand >MyShop</Navbar.Brand>
        </LinkContainer>

          <Nav className="me-auto">
          <LinkContainer to="/">
            <Nav.Link >Home</Nav.Link>
          </LinkContainer>
         

            <LinkContainer to="/cart">
            <Nav.Link><i className='fa-solid fa-cart-shopping'></i> cart</Nav.Link>
            </LinkContainer>

          <LinkContainer to="/login">
            <Nav.Link><i className='fa-solid fa-user'></i> Login</Nav.Link>
          </LinkContainer>
          </Nav>
      </Container>
    </Navbar>
  );
}


export default Header;