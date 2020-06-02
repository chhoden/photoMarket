import React, { Component } from 'react';

class InputBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        }
    }

    onChangeHandler = (event) => {
        this.setState({
            value: event.target.value,
        })
    }

    onKeyDownHandler = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            //return value to parent component
            this.props.onKeyPressEnter(this.state.value);
            this.setState({
                value: "",
            })
        }
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.value} placeholder="Type a message" onChange={this.onChangeHandler} onKeyDown={this.onKeyDownHandler} />
                <button type="submit">Send</button>
            </div>
        );
    }
}

export { InputBox };

