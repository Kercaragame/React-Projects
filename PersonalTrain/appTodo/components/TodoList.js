import React from "react";
import Todo from "./ToDo";

export default function TodoList({ list, handleCheck }) {
  return list.map((item, index) => {
    return <Todo key={index} todo={item} handleCheck={handleCheck} />;
  });
}
