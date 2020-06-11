import React, { Component, useState } from 'react';

const InputBox = (props) => {
    const [value, setValue] = useState("");

    const onChangeHandler = (event) => {
        setValue(event.target.value)
    }

    const onKeyDownHandler = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            //returns value to parent component
            props.onKeyPressEnter(value);
            setValue("")
        }
    }

    return (
        <div>
            <input type="text" value={value} placeholder="Type a message" onChange={onChangeHandler} onKeyDown={onKeyDownHandler} />
            <button type="submit">Send</button>
        </div>
    );
}

export { InputBox };

