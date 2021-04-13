import { Component } from 'react';
import './App.css';
import MOCK_TODOS from './mock-todos';
import { ALL_STATUSES } from './todo-model';
import TodoInput from './TodoInput';
import { TodoList } from './TodoList';
import { TodoFilter } from './TodoFilter';

class App extends Component {
  state = {
    todos: MOCK_TODOS,
    filter: ALL_STATUSES
  }

  handleCreateTodo = (todo) => {
    this.setState(state => ({todos: state.todos.concat(todo)})); // shallow merge new state onto old state
  }

  handleChangeStatus = (todo) => {
    this.setState(state => ({todos: state.todos.map(t => t.id === todo.id ? todo : t)}));
  }

  handleDeleteTodo = (todo) => {
    this.setState(state => ({todos: state.todos.filter(t => t.id !== todo.id)}));
  }

  handleFilterChange = (filter) => {
    this.setState({filter})
  }

  render() {
    return (
      <div className="App-header">
        <h2>React TODOs Demo</h2>
        <TodoInput  onCreateTodo={this.handleCreateTodo} />
        <TodoFilter onFilterChange={this.handleFilterChange} />
        <TodoList todos={this.state.todos} onChangeStatus={this.handleChangeStatus} 
          onDeleteTodo={this.handleDeleteTodo}/>
      </div>
    );
  }
}

export default App;
