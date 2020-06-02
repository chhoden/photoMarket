import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'
import './login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errorMessage: "",
            result: null
        }
    }

    onChangeHandler = (event) => {
        let eventName = event.target.name;
        let val = event.target.value;
        this.setState({
            [eventName]: val,
            errorMessage: ""
        })
    }

    clearFormEntry = () => {
        this.setState({
            email: "",
            password: "",
        })
    }

    onSubmitHandler = (event) => {
        //the default action that belongs to the submit event will not occur if something goes wrong
        event.preventDefault();
        const userInfo = {
            email: this.state.email,
            password: this.state.password
        }

        fetch("http://localhost:3001/authenticate", {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userInfo)
        }).then((response) => {
            if (response.status === 401) {
                this.clearFormEntry();
                return response.json().then((result) => {
                    this.setState({
                        errorMessage: result.message,
                    })
                });
            } else {
                response.json().then((result) => {
                    this.setState({
                        result: result,
                    })
                    console.log(result);
                });
                this.props.history.push('/home');
            }
        })
    }

    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#ebf2f9' }} >
                <Form className="form" content="width=device-width, initial-scale=1" onSubmit={this.onSubmitHandler}>
                    <h3 >Photo Market </h3>
                    <br />
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" value={this.state.email} onChange={this.onChangeHandler} placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" value={this.state.password} onChange={this.onChangeHandler} placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    {
                        (this.state.errorMessage !== "") && <p className="errorMessage">{this.state.errorMessage} Please try again!</p>
                    }
                    <Button block variant="primary" type="submit">Submit</Button>
                    <br />
                    <hr />
                    <p>Don't have an account? <a href="/signUp">Sign up</a></p>
                </Form>
            </div >
        );
    }
}
export { Login };