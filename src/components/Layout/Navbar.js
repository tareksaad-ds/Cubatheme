import React from "react";
import image from "../../assests/logo.png";
import "./Nav.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FiLayers, FiInbox, FiMessageSquare } from "react-icons/fi";
import {
  FaSearch,
  FaRegBell,
  FaRegStar,
  FaRegMoon,
  FaShoppingCart,
} from "react-icons/fa";

function Nbar() {
  return (
    <Navbar expand="lg">
      <div className="col-lg-3">
        <Navbar.Brand href="#home">
          <img src={image} className="head" alt="cuba logo" />
        </Navbar.Brand>
      </div>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="bu" href="#">
            <FiLayers /> Bouns Ui
          </Nav.Link>

          <Nav.Link className="lu" href="#">
            <FiInbox /> {"  "} Level Up
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link className="icons" href="#deets">
            <FaSearch />
          </Nav.Link>
          <Nav.Link className="icons" href="#deets">
            <FaRegBell />
          </Nav.Link>
          <Nav.Link className="icons" href="#deets">
            <FaRegStar />
          </Nav.Link>
          <Nav.Link className="icons" href="#deets">
            <FaRegMoon />
          </Nav.Link>
          <Nav.Link className="icons" href="#deets">
            <FaShoppingCart />
          </Nav.Link>
          <Nav.Link className="icons" href="#deets">
            <FiMessageSquare />
          </Nav.Link>
          <NavDropdown title="Admin" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Home</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4" FaSearch>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nbar;
