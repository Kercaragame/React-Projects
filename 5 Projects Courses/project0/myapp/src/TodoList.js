import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, toogleTodo }) {
  return todos.map((todo) => {
    return <Todo key={todo.id} todo={todo} toogleTodo={toogleTodo} />;
  });
}

/**
 *Liste avec for en html donc .map
 * @param {*} [str]
 * @returns html
 *

export default function TodoList({ todos }) {
  todos.forEach((element) => {
    return <div>element</div>;
  });
  return (
    <div>
      {todos.map((item, index) => {
        let t = `${item} at ${index}`;
        return <div>{t}</div>;
      })}
    </div>
  );
}*/
