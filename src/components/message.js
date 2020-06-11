import React from 'react';

const Message = (props) => {
    return (
        <li id={props.message.id}>
            {props.message.content}
        </li>
    );
}

export { Message };