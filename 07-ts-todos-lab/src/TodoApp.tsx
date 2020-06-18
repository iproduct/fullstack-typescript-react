import React from 'react';
import './TodoApp.css';
import TodoList from './TodoList';
import MOCK_TODOS from './mock-todos';
import { Todo, TodoStatus } from './todo.model';
import TodoInput from './TodoInput';

export interface TodoListener {
  (todo: Todo): void;
}

export interface TodoAppState {
  todos: Todo[];
  filter: TodoStatus | undefined;
}

export class TodoApp extends React.Component<{}, TodoAppState> {
  state = {
    todos: MOCK_TODOS,
    filter: undefined
  };
  constructor(props: {}) {
    super(props);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleCreateTodo = this.handleCreateTodo.bind(this);
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>TODO Demo</h2>
          <TodoInput onCreateTodo={this.handleCreateTodo} />
          <TodoList
            todos={this.state.todos}
            filter={undefined}
            onChangeStatus={this.handleStatusChange}
            onUpdate={this.noOpTodoListener}
            onDelete={this.noOpTodoListener}
          />
        </header>
      </div>
    );
  }

  noOpTodoListener(todo: Todo) {}

  handleStatusChange(todo: Todo) {
    this.setState(({todos}) => ({
      todos: this.state.todos.map(td => td.id === todo.id? todo: td)
    }));
  }

  handleCreateTodo(todo: Todo) {
    this.setState(({todos}) => ({
      todos: this.state.todos.concat(todo)
    }));
  }

  handleRemoveTodo(todo: Todo) {
    this.setState(({todos}) => ({
      todos: this.state.todos.filter(td => td.id !== todo.id)
    }));
  }
}

export default TodoApp;
