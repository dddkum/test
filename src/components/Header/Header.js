import "./Header.sass";
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <section id="header">
      <Navbar expand="sm" className="p-3 mb-2 bg-transparent text-body navigation position-relative">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="logo"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link className='nav_item' href="#header">HOME</Nav.Link>
              <Nav.Link className='nav_item' href="#about">ABOUT</Nav.Link>
              <Nav.Link className='nav_item' href="#expertise">EXPERTISE</Nav.Link>
              <Nav.Link className='nav_item' href="#team">TEAMS</Nav.Link>
              <Nav.Link className='nav_item' href="#our_works">WORKS</Nav.Link>
              <Nav.Link className='nav_item' href="#comments">PEOPLE SAY</Nav.Link>
              <Nav.Link className='nav_item' href="#footer">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default Header;
