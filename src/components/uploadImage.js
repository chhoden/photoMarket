import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class Upload extends Component {

    render() {
        return (
            <div style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#ebf2f9'
            }}>
                <Form className="form" content="width=device-width, initial-scale=1" method="POST" action="http://localhost:3001/photos" encType="multipart/form-data">
                    <h4 style={{ textAlign: "center", color: "cornflowerblue", fontWeight: "bold" }} > Upload Image</h4>
                    <br />
                    <Form.Group controlId="formBasicFile">
                        <Form.Label>Image description</Form.Label>
                        <Form.Control name="imageDescription" type="text" />
                        <Form.Label>Image category</Form.Label>
                        {/* <NavDropdown title="Categories" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Portrait</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Landscape</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Architecture</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Food</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Abstract</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">Nature</NavDropdown.Item>
                        </NavDropdown> */}
                        <Form.Control name="category" type="text" />
                        <Form.Label>Image price</Form.Label>
                        <Form.Control name="price" type="text" />
                        <br />
                        <Form.Control name="image" type="file" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </div>
        )
    }
}

export { Upload };