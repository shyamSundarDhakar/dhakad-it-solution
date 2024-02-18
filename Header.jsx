import React from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <> 
    <div className="Navbar">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <Navbar expand="lg" className="bg-body-tertiary">
              <Container fluid>
                <Navbar.Brand href="#" style={{color:"black",fontWeight:800,fontSize:"2rem"}}>Dhakad It Solution</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 mx-auto  my-lg-0 "
                    style={{ maxHeight: "100px"}}
                    navbarScroll
                  >
                    <div className="navitem"pl-4>
                    <NavLink  className='item' to="/">Home</NavLink>
                    <NavLink className=" item pl-4" to="/about">About</NavLink>
                    <NavLink  className=" item pl-4"  to="/service">Service</NavLink>
                    <NavLink  className=" item pl-4"  to="/contact">Contact</NavLink>
                    </div>
                  </Nav>
                  <Form className="d-flex ml-auto">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                  
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
      </div>
    </div>
 
       
  
    
          </>
     )}

