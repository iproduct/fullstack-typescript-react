import React, { useRef } from 'react';
import './App.css';

function App() {
  const input1Ref = useRef();
  const input2Ref = useRef();

  function focusTextInput() {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    // this.textInput.current.focus();
    input1Ref.current.focus();
  }

  return (
    <div>
    <input type="text" ref={input1Ref} />
    <input type="text" ref={input2Ref} />
    <input
        type="button"
        value="Focus the text input"
        onClick={focusTextInput}
      />
    </div>
  );
}

export default App;
