import React, { FC, useState } from "react";
// css
import "/src/App.css";

import { Todo } from "./interface/Todo";

// compornents
import AddTodo from "./compornents/AddTodo";
import TodoList from "./compornents/TodoList";
import DeleteTodo from "./compornents/DeleteTodo";

const dummyTodos: Todo[] = [
  { id: 1, text: "Learn React", done: false },
  { id: 2, text: "Build a React App", done: true },
  { id: 3, text: "Explore React Hooks", done: false },
];

// 関数型のコンポーネント定義
const App: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const addTodo = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);
  }
  return (
    <div>
      <h1>- Todoアプリ -</h1>
      {/* ここにフォーム用のコンポーネント */}
      <AddTodo addTodo={addTodo}/>

      {/* ここにTodoListコンポーネントを表示
      孫にリストコンポーネント */}
      <TodoList todos={dummyTodos}/>

      <p>残りTodo件数 : xx件</p>

      {/* ここに削除用のコンポーネントを作成 */}
      <DeleteTodo />
    </div>
  );
};

export default App;
