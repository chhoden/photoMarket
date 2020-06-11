import React from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { IoMdCamera, IoMdCart, IoMdChatbubbles } from "react-icons/io";
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';

const NavigationBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand className="brandName" href="/home" >Photo Market</Navbar.Brand>
                <NavDropdown title="Categories" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Portrait</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Landscape</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Architecture</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Food</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Abstract</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.5">Nature</NavDropdown.Item>
                </NavDropdown>
                <Form inline className="mr-auto">
                    <FormControl type="text" placeholder="Search for Photos" className="mr-sm-2" />
                    <Button variant="info">Go</Button>
                </Form>
                <Nav>
                    <Nav.Link href="/uploadImage"><IoMdCamera /> Sell</Nav.Link>
                    <Nav.Link href="/chatBox"><IoMdChatbubbles /></Nav.Link>
                    <Nav.Link href="#cart"><IoMdCart /></Nav.Link>
                    <Nav.Link href="/login">Log in</Nav.Link>
                    <Nav.Link href="/signUp">Sign up</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
}


export { NavigationBar };
