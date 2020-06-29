import './App.css';

import React, {ReactElement, useEffect } from 'react';
import { connect } from 'react-redux';

import ChatHistory from './components/ChatHistory/ChatHistory';
import ChatInterface from './components/ChatInterface/ChatInterface';
import { AppState } from './features';
import { sendMessage } from './features/chat/actions';
import { Message } from './features/chat/types';
import { updateSession } from './features/system/actions';
import { MessageCallback, MessageTextCallback, SystemStateCallback } from './types';

interface Props {
  messages: Message[];
  userName: string;
  sendMessage: MessageCallback;
  updateSession: SystemStateCallback;
}

function App({ messages, userName, sendMessage, updateSession} :Props): ReactElement {
  const handleSendMessage: MessageTextCallback = (messageText) => {
    sendMessage({
      user: userName,
      message: messageText,
      timestamp: new Date().getTime()
    });
  }

  useEffect(() => {
    updateSession({
      loggedIn: true,
      session: "mySession01",
      userName: "Trayan"
    });
  }, [updateSession]);

  return (
    <div className="parent">
      <ChatHistory messages={messages} />
      <ChatInterface userName={userName} sendMessage={handleSendMessage} />
    </div>
  );
}

const mapStateToProps = (state: AppState) => ({
  messages: state.chat.messages,
  userName: state.system.userName
});

export default connect(mapStateToProps, {sendMessage, updateSession})(App);
