import React from "react";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import StyleButton from "../../05-StyleComponents/StyleButton";

export const Navigation = () => {

    // const appNav = useNavigate();

    // const GoToPaneladmin = () =>{
    //     appNav("Panel-Admin")
    // }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">React Navigation</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="Home">Home</Nav.Link>
            <Nav.Link href="Profile">Profile</Nav.Link>
            {/* <Button onClick={() =>{GoToPaneladmin()}}>IR A PANEL DE ADMINISTRACION</Button> */}
            <StyleButton>EJEMPLO</StyleButton>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
