import './App.css';
import MOCK_TODOS from './mock-todos';
import { TodoList } from './TodoList';

function App() {
  return (
    <div className="App-header">
      <h2>React TODOs Demo</h2>
      <TodoList todos={MOCK_TODOS} />
    </div>
  );
}

export default App;
