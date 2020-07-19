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

import React, { ReactElement, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ChatHistory from './components/ChatHistory/ChatHistory';
import ChatInterface from './components/ChatInterface/ChatInterface';
import { AppState } from './features';
import { sendMessage } from './features/chat/actions';
import { updateSession } from './features/system/actions';
import { MessageTextCallback } from './types';

function App(): ReactElement {

  const messages = useSelector((state: AppState) => state.chat.messages);
  const userName = useSelector((state: AppState) => state.system.userName);

  const dispatch = useDispatch();
  const onSendMessage = useCallback(
    (message) =>  dispatch(sendMessage(message)),
    [dispatch]
  )
  const onUpdateSession = useCallback(
    (newSystemState) =>  dispatch(updateSession(newSystemState)),
    [dispatch]
  )

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
  }, [onUpdateSession]);

  return (
    <div className="parent">
      <ChatHistory messages={messages} />
      <ChatInterface userName={userName} sendMessage={handleSendMessage} />
    </div>
  );
}

export default App;