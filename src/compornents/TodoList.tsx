import React, { FC } from "react";

import { Todo } from "../interface/Todo";

//propsを受け取る用のtype定義
type TodoListProps = {
  todos: Todo[];
};

// 関数型のコンポーネント定義
const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li>
          {todo.id}
          {todo.text}
          {todo.done}あいうえお
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
