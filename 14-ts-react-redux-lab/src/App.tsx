import './App.css';

import React, { ReactElement, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ChatHistory from './components/ChatHistory/ChatHistory';
import ChatInterface from './components/ChatInterface/ChatInterface';
import { AppState } from './features';
import { sendMessage } from './features/chat/actions';
import { updateSession } from './features/system/actions';
import { MessageTextCallback } from './types';

interface Props {
  // messages: Message[];
  // userName: string;
  // onSendMessage: MessageCallback;
  // onUpdateSession: SystemStateCallback;
}

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

// const mapStateToProps = (state: AppState) => ({
//   messages: state.chat.messages,
//   userName: state.system.userName
// });


// const mapDispatchToProps = (dispatch: Dispatch<AllActionTypes>) => {
//   const memoizedCallback = createSelector(
//     (newSystemState) => dispatch(updateSession(newSystemState)),
//     []
//   );
//   return ({
//     onSendMessage: (message: Message) => {
//       dispatch(sendMessage(message));
//     },
//     onUpdateSession: memoizedCallback
//   });
// }

export default App;

// export default connect(mapStateToProps, mapDispatchToProps)(App);
