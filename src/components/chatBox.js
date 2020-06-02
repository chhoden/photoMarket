import React, { Component } from 'react';
import { Message } from './message';
import { InputBox } from './inputBox';
import './chatBox.css';

class ChatBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
        }
    }

    onKeyPressEnter = (msgs) => {
        fetch("http://localhost:3001/photos")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    photos: data,
                })
            })
        const newMessage = {
            content: msgs,
            sender: "",
        }
        //Api call for POST 
        fetch("http://localhost:3001/messages", {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newMessage)
        })
            .then(response => response.json())
            .then(data => this.setState({
                messages: [...this.state.messages, data]
            }))
    }

    fetchMessages = () => {
        fetch("http://localhost:3001/messages").then(response => response.json()).then(result => {
            this.setState({
                messages: result,
            })
        });
    }
    componentDidMount = () => {
        // calling fetchMessages every 1 sec
        setInterval(this.fetchMessages, 1000);
    }

    render() {
        return (
            <div className="chatBox">
                <h6 style={{ textAlign: "center", color: "cornflowerblue", fontWeight: "bold" }}>Chat with </h6>
                <ul style={{ listStyle: "none" }}>
                    {
                        this.state.messages.map(msg => {
                            return (
                                <Message key={msg._id} message={msg} />
                            )
                        })
                    }
                </ul>
                <InputBox onKeyPressEnter={this.onKeyPressEnter} />
            </div >
        );
    }
}

export { ChatBox };