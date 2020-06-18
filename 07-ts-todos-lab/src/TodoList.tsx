import React, { Component } from 'react';
import { Todo, TodoStatus } from './todo.model';
import './TodoList.css';
import { TodoItem } from './TodoItem';
import { TodoListener } from './TodoApp';

// export type TodoListener =  (todo: Todo) => void;

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
    const {todos, filter, ...rest} = this.props;
    return (
      <div className="TodoList">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} {...rest} />
        ))}
      </div>
    );
  }
}
