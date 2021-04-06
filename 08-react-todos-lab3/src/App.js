import { Component } from 'react';
import './App.css';
import MOCK_TODOS from './mock-todos';
import { ALL_STATUSES } from './todo-model';
import TodoInput from './TodoInput';
import { TodoList } from './TodoList';

class App extends Component {
  state = {
    todos: MOCK_TODOS,
    filter: ALL_STATUSES
  }

  handleCreateTodo = (todo) => {
    this.setState(state => ({todos: state.todos.concat(todo)})); // shallow merge new state onto old state
  }


  render() {
    return (
      <div className="App-header">
        <h2>React TODOs Demo</h2>
        <TodoInput  onCreateTodo={this.handleCreateTodo} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
