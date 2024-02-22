/**
 * 入力されて値をstateに追加するコンポーネント
 */

import React, { useState } from "react";

import { Todo } from "../interface/Todo";

//propsを受け取る用のtype定義
type AddTodoProps = {
  addTodo: (newTodo: Todo) => void;
};

// 関数型のコンポーネント定義
const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  //onclick時のロジックをここに記入する
  const [text, setText] = useState<string>("");
  const [id, setId] = useState(1);

  const handleTodoChange = () => {
    setId(id + 1);
    addTodo({ id, text, done: false });
    setText("");
  };

  return (
    <>
      <input
        type="text"
        value={text}
        placeholder="Todoを追加"
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button type="submit" onClick={handleTodoChange}>
        送信
      </button>
    </>
  );
};

export default AddTodo;
