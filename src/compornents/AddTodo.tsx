import React, { useState } from "react";

import { Todo } from "../interface/Todo";

//propsを受け取る用のtype定義
type AddTodoProps = {
  addTodo: (newTodo: Todo) => void;
};


// 関数型のコンポーネント定義
const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  //onclick時のロジックをここに記入する
  const [todo, setTodo] = useState("");

  const handleTodoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
    console.log("fuga");
  };

  return (
    <>
      <input
        type="text"
        value={todo}
        placeholder="Todoを追加"
        onChange={handleTodoChange}
      ></input>
      <button>送信</button>
    </>
  );
};

export default AddTodo;
