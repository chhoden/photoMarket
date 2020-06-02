import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap'
import './signUp.css';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            repeatPassword: ""
        }
    }

    onChangeHandler = (event) => {
        //eventName is name given to <Form.Control> 
        let eventName = event.target.name;
        //val is the userinput
        let val = event.target.value;
        this.setState({
            //bracket around eventName makes it a dynamic key  
            [eventName]: val,
        })
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            repeatPassword: this.state.repeatPassword
        }
        fetch("http://localhost:3001/users", {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        });
        this.props.history.push('/home');
    }

    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#ebf2f9' }} >
                <Form className="signUpForm" content="width=device-width, initial-scale=1" onSubmit={this.onSubmitHandler}>
                    <h3>Create account</h3>
                    <br />
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Your name</Form.Label>
                        <Form.Control name="name" type="text" value={this.state.name} onChange={this.onChangeHandler} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" type="email" value={this.state.email} onChange={this.onChangeHandler} placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" value={this.state.password} onChange={this.onChangeHandler} placeholder="At least 6 characters" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridReenterPassword">
                        <Form.Label>Re-enter password</Form.Label>
                        <Form.Control name="repeatPassword" type="password" value={this.state.repeatPassword} onChange={this.onChangeHandler} />
                    </Form.Group>
                    <div className="button">
                        <Button variant="primary" size="lg" type="submit">Submit</Button>
                    </div>
                    <br />
                    <hr />
                    <p> By creating an account, you agree to our <a href="/signUp">Terms & Privacy</a>.</p>
                </Form>
            </div>
        )
    }
}

export { SignUp };