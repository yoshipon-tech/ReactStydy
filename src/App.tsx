import { FC } from "react";

// css
import "/src/App.css";

// compornents
import AddTodo from "./compornents/AddTodo";
import TodoList from "./compornents/TodoList";
import DeleteTodo from "./compornents/DeleteTodo";

// 関数型のコンポーネント定義
const App: FC = () => {
  return (
    <div>
      <h1>- Todoアプリ -</h1>
      {/* ここにフォーム用のコンポーネント */}
      <AddTodo />

      {/* ここにTodoListコンポーネントを表示
      孫にリストコンポーネント */}
      <TodoList />

      <p>残りTodo件数 : xx件</p>

      {/* ここに削除用のコンポーネントを作成 */}
      <DeleteTodo />
    </div>
  );
};

export default App;
