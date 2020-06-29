import React, { ReactElement } from 'react'
import { Message } from '../../features/chat/types';

interface Props {
    messages: Message[];
}

export default function ChatHistory({ messages }: Props): ReactElement {
    return (
        <div className="chat-history">
            {messages.map(m => (
                <div className="message-item">
                    <h3>From: {m.user}</h3>
                    <p>{m.message}</p>
                </div>
            ))}
        </div>
    )
}
