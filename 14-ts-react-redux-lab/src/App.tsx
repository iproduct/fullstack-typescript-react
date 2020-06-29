import React, { useState, ReactElement, useEffect } from 'react';
import './App.css';
import ChatHistory from './components/ChatHistory/ChatHistory';
import ChatInterface from './components/ChatInterface/ChatInterface';
import { AppState, AllActionTypes } from './features/index';
import { Message } from './features/chat/types';
import { MessageTextCallback, MessageCallback, SystemStateCallback } from './types';
import { Dispatch } from 'redux';
import { sendMessage } from './features/chat/actions';
import { updateSession } from './features/system/actions';
import { SystemState } from './features/system/types';
import { connect } from 'react-redux';

interface Props {
  messages: Message[];
  userName: string;
  onSendMessage: MessageCallback;
  onUpdateSession: SystemStateCallback;
}

function App({ messages, userName, onSendMessage, onUpdateSession }: Props): ReactElement {
  const handleSendMessage: MessageTextCallback = (messageText) => {
    onSendMessage({
      user: userName,
      message: messageText,
      timestamp: new Date().getTime()
    });
  }

  useEffect(() => {
    onUpdateSession({
      loggedIn: true,
      session: "mySession01",
      userName: "Trayan"
    });
  }, []);

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

const mapDispatchToProps = (dispatch: Dispatch<AllActionTypes>) => ({
  onSendMessage: (message: Message) => {
    dispatch(sendMessage(message));
  },
  onUpdateSession: (newSystemState: SystemState) => {
    dispatch(updateSession(newSystemState));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
