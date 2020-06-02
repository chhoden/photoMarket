import React, { Component } from 'react';

class Message extends Component {

    render() {
        return (
            <li id={this.props.message.id}>
                {this.props.message.content}
            </li>
        );
    }
}

export { Message };