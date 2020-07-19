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

import * as React from "react";
import { connect } from "react-redux";
import { AppState } from "./store";
import { SystemState } from "./store/system/types";
import { updateSession } from "./store/system/actions";
import { ChatState } from "./store/chat/types";
import { sendMessage } from "./store/chat/actions";
import ChatHistory from "./ChatHistory";
import ChatInterface from "./ChatInterface";
import { thunkSendMessage } from "./thunks";

import "./App.css";

interface AppProps {
  sendMessage: typeof sendMessage;
  updateSession: typeof updateSession;
  chat: ChatState;
  system: SystemState;
  thunkSendMessage: any;
}

export type UpdateMessageParam = React.SyntheticEvent<{ value: string }>;

class App extends React.Component<AppProps> {
  state = {
    message: ""
  };

  componentDidMount() {
    this.props.updateSession({
      loggedIn: true,
      session: "my_session",
      userName: "myName"
    });
    this.props.sendMessage({
      user: "Chat Bot",
      message:
        "This is a very basic chat application written in typescript using react and redux. Feel free to explore the source code.",
      timestamp: new Date().getTime()
    });

    this.props.thunkSendMessage("This message was sent by a thunk!");
  }

  updateMessage = (event: UpdateMessageParam) => {
    this.setState({ message: event.currentTarget.value });
  };

  sendMessage = (message: string) => {
    this.props.sendMessage({
      user: this.props.system.userName,
      message: message,
      timestamp: new Date().getTime()
    });
    this.setState({ message: "" });
  };

  render() {
    return (
      <div className="parent">
        <ChatHistory messages={this.props.chat.messages} />
        <ChatInterface
          userName={this.props.system.userName}
          message={this.state.message}
          updateMessage={this.updateMessage}
          sendMessage={this.sendMessage}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  system: state.system,
  chat: state.chat
});

export default connect(
  mapStateToProps,
  { sendMessage, updateSession, thunkSendMessage }
)(App);
