import TodoList from "./TodoList";
import React, { useState, useRef, useEffect } from "react";

const LOCAL_STORAGE_KEY = "todoAPP.todos";
function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodo) {
      setTodos(storedTodo);
    }
  }, []);

  useEffect(() => {
    console.log("hi");
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    todoNameRef.current.value = "";
    setTodos((prev) => {
      return [...prev, { id: todos.length, name: name, completed: false }];
    });
  }
  function handleClearTodo(e) {
    const newTodos = [];
    setTodos(newTodos);
  }
  function setTcheckBox(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((toto) => toto.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }
  return (
    <>
      <TodoList todos={todos} toogleTodo={setTcheckBox} />
      <input ref={todoNameRef} type="text"></input>
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodo}>clear all</button>
      <div> {todos.filter((todo) => !todo.completed).length} left to do</div>
    </>
  );
}

export default App;
