import React from "react";

export default function Todo({ todo, toogleTodo }) {
  return (
    <div>
      <input
        onChange={() => {
          toogleTodo(todo.id);
        }}
        type="checkbox"
        checked={todo.completed}
      ></input>
      {`id: ${todo.id} task: ${todo.name}`}
    </div>
  );
}
