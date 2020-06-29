import React, { ReactElement, useState } from 'react'
import { MessageTextCallback } from '../../types';

interface Props {
    userName: string,
    sendMessage: MessageTextCallback;
}

export default function ChatInterface({ userName, sendMessage }: Props): ReactElement {
    const [message, setMessage] = useState("");

    function send() {
        sendMessage(message);
        setMessage("");
    }

    function keyPress(ev: React.KeyboardEvent) {
        if (ev.key === 'Enter') {
            send()
        }
    }
    return (
        <div className="chat-interface">
            <h3>User: {userName}</h3>
            <input value={message} onChange={ev => setMessage(ev.target.value)} 
                onKeyPress={keyPress}/>
            <button onClick={send}>Send</button>
        </div>
    )
}
