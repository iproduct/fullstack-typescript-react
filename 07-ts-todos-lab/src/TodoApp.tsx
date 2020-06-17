import React from 'react';
import './TodoApp.css';
import TodoList from './TodoList';
import MOCK_TODOS from './mock-todos';
import { Todo } from './todo.model';

export interface TodoAppState {
  items: Todo[];
}

export class TodoApp extends React.Component<{}, TodoAppState> {
  state = {
    items: MOCK_TODOS,
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>TODO Demo</h2>
          <TodoList
            todos={this.state.items}
            filter={undefined}
            onChangeStatus={this.noOpTodoListener}
            onUpdate={this.noOpTodoListener}
            onDelete={this.noOpTodoListener}
          />
        </header>
      </div>
    );
  }

  noOpTodoListener(todo: Todo) {}
}

export default TodoApp;
