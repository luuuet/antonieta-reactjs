//import { Button } from "react-bootstrap";
import React, { Component } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import Carrito from "../Carrito/Carrito";

export default class AppNav extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">ANTONIETA</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Nosotros</Nav.Link>
                <Nav.Link href="#link">Contacto</Nav.Link>
                <NavDropdown title="Productos" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Cuaderno
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Agenda</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Libreta
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Todos</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#home">
                  <Carrito />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
//function NavBar() {}
