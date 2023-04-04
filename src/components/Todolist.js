import React from "react";
import TodoItem from "./TodoItem";
import TodoCreate from "./TodoCreate";

const Todolist = () => {
  return (
    <div>
      <h1>Todolist</h1>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <br />
      <TodoCreate />
    </div>
  );
};

export default Todolist;

//전체 Todo를 간략히 보여주기
//여기에 특정 TodoItem을 누르면 단일 Todo 정보를 보여주기
//Read
