import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoCreate from "./TodoCreate";

const Todolist = () => {
  // Localstorage 조회
  const todo = JSON.parse(localStorage.getItem("todo"));
  const [todoList, setTodoList] = useState(todo);

  return (
    <div className="TodoList">
      <TodoCreate todo={todoList} setTodo={setTodoList} />
      <TodoItem todo={todoList} setTodo={setTodoList} />
      <br />
    </div>
  );
};

export default Todolist;

//전체 Todo를 간략히 보여주기
//여기에 특정 TodoItem을 누르면 단일 Todo 정보를 보여주기
//Read
