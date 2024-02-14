import { FC, useState } from "react";

// 関数型のコンポーネント定義
const AddTodo: FC = () => {
  //onclick時のロジックをここに記入する
  const [todo, setTodo] = useState("");

  const handleTodoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
    console.log("fuga");
  };

  // 関数としてaddTodoの定義が必要
  const addTodo = () => {
    console.log("hoge");
  };

  return (
    <>
      <input type="text" value={todo} onChange={handleTodoChange}></input>
      <button onClick={addTodo}>送信</button>
    </>
  );
};

export default AddTodo;
