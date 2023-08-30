import React from "react";

export default function Todo({ todo, handleCheck }) {
  console.log(handleCheck);
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.isChecked}
        onChange={() => handleCheck(todo.id)}
      ></input>
      <p style={{ display: "inline" }}>{todo.task}</p>
    </div>
  );
}
