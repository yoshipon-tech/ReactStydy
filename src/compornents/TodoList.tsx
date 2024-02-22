/**
 * 変化したstateをキャッチして表示する部分
 */
import React, { FC } from "react";

import { Todo } from "../interface/Todo";

//propsを受け取る用のtype定義
type TodoListProps = {
  todos: Todo[];
  deleteTodo: (todoId: number) => void;
};

// 関数型のコンポーネント定義
const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li>
          <input type="checkbox" checked={todo.done} onChange={() => deleteTodo(todo.id)} />
          {todo.id}
          {todo.text}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
