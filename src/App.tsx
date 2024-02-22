/**
 * それぞれのコンポーネントを呼び出している親
 */

import { useState, FC } from "react";

// css
import "/src/App.css";

import { Todo } from "./interface/Todo";

// compornents
import AddTodo from "./compornents/AddTodo";
import TodoList from "./compornents/TodoList";

// 関数型のコンポーネント定義
const App: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (todoId: number) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div>
      <h1>- Todoアプリ -</h1>
      {/* TODO変化させるuseStateを渡してこれを用いて更新させる */}
      <AddTodo addTodo={addTodo} />

      {/* 入力されたTODOを渡してそれを利用して表示させる */}
      <TodoList todos={todos} deleteTodo={deleteTodo} />

      <p>残りTodo件数 : {todos.length}件</p>
    </div>
  );
};

export default App;
