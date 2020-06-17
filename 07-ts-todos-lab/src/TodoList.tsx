import React, { Component } from 'react';
import { Todo, TodoStatus } from './todo.model';
import './TodoList.css';

// export type TodoListener =  (todo: Todo) => void;

export interface TodoListener {
  (todo: Todo): void;
}

interface Props {
  todos: Todo[];
  filter: TodoStatus | undefined;
  onChangeStatus: TodoListener;
  onUpdate: TodoListener;
  onDelete: TodoListener;
}
interface State {}

export default class TodoList extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div className="TodoList">
        {this.props.todos.map((todo) => (
          <div className="TodoList-item" key={todo.id}>
            <span className="TodoList-item-text">
              <span className="TodoList-item-id">{todo.id}.</span>
              {todo.text}
            </span>
            <span className="TodoList-item-status">{TodoStatus[todo.status]}</span>
          </div>
        ))}
      </div>
    );
  }
}
