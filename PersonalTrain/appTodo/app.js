import React, { useEffect, useRef } from "react";
import List1 from "./components/list";
import TodoList from "./components/todoList";
import { useState } from "react";

export default function App() {
  console.log("app run");
  const [list, setList] = useState([]);
  const inputIdRef = useRef();

  function handleCheck(_id) {
    console.log("hi");
    setList((prev) => {
      const list = [...prev];
      const itemToChange = list.find((item) => item.id == _id);
      itemToChange.isChecked = !itemToChange.isChecked;
      return list;
    });
  }
  function handleFormAdd() {
    const input = inputIdRef.current;
    const data = input.value;
    setList((prev) => [
      ...prev,
      { task: data, isChecked: false, id: prev.length },
    ]);
    input.value = null;
  }
  function handleFormClear() {
    setList([]);
  }

  useEffect(() => {
    const fetchList = JSON.parse(localStorage.getItem("todolist"));
    if (fetchList.length > 0) {
      setList(fetchList);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(list));
  }, [list]);
  return (
    <div>
      <h1>welcome</h1>
      <TodoList list={list} handleCheck={handleCheck} />
      <form>
        <input type="text" ref={inputIdRef}></input>
        <button type="button" onClick={handleFormAdd}>
          add
        </button>
        <button type="button" onClick={handleFormClear}>
          clear
        </button>
      </form>
      <p>{list.length} left to do</p>
    </div>
  );
}
