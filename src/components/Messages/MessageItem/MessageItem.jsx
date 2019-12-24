import React from 'react';
import s from './MessageItem.module.css';

const Message = props => {
    return (
        <div className={ s.messages__item } >
            {props.text}
        </div>
    );
}

export default Message;
