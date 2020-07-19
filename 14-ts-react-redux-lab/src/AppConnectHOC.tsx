/**
 * THIS HEADER SHOULD BE KEPT INTACT IN ALL CODE DERIVATIVES AND MODIFICATIONS.
 * 
 * This file provided by IPT is for non-commercial testing and evaluation
 * purposes only. IPT reserves all rights not expressly granted.
 *  
 * The security implementation provided is DEMO only and is NOT intended for production purposes.
 * It is exclusively your responsisbility to seek advice from security professionals 
 * in order to secure the REST API implementation properly.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * IPT BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

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
  myProp: string;
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

const mapStateToProps = (state: AppState, ownProps: {myProp: string;}) => ({
  messages: state.chat.messages,
  userName: state.system.userName
});

export default connect(mapStateToProps, {sendMessage, updateSession})(App);
