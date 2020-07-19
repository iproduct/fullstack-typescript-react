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
import { UpdateMessageParam } from "./App";

interface ChatInterfaceProps {
  message: string;
  userName: string;
  sendMessage: (message: string) => void;
  updateMessage: (event: UpdateMessageParam) => void;
}

const ChatInterface: React.SFC<ChatInterfaceProps> = ({
  userName,
  message,
  updateMessage,
  sendMessage
}) => {
  function keyPress(e: React.KeyboardEvent<any>) {
    if (e.key === "Enter") {
      send();
    }
  }

  function send() {
    sendMessage(message);
  }

  return (
    <div className="chat-interface">
      <h3>User: {userName} </h3>
      <input
        value={message}
        onChange={updateMessage}
        onKeyPress={keyPress}
        className="chat-input"
        placeholder="Type a message..."
      />
      <button onClick={send}>Send</button>
    </div>
  );
};

export default ChatInterface;
