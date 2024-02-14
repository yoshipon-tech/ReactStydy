import { FC } from "react";

// 関数型のコンポーネント定義
const App: FC = () => {
  return (
    <div>
      <h1>- Todoアプリ -</h1>

      ここにフォーム用のコンポーネント

      {/* ここにTodoListコンポーネントを表示
      孫にリストコンポーネント */}

      <p>残りTodo件数 : xx件</p>

      {/* ここに削除用のコンポーネントを作成 */}
    </div>
  );
};

export default App;
