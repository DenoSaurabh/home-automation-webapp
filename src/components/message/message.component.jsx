import React from 'react';

import './message.styles.scss'

const Message = ({message}) => (
    <p className='message'>
        <span className='span-title'>webapp$ </span>: {message}
    </p>
);

export default Message;