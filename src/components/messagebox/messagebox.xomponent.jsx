import React from 'react';

import Message from '../message/message.component'

import './messagebox.styles.scss'

const messageBox = ({allmessages}) => {
    return (
        <div className='messagebox'>
            {
                allmessages.map((message, id) => <Message message={message} key={id} />)
            }
        </div>
    )
} 

export default messageBox;