import React, { useState } from "react";
import styled from "styled-components";

const TodoCreate = ({ todo, setTodo }) => {
  const [todoInput, setTodoInput] = useState("");

  const onChangeTodo = (e) => setTodoInput(e.target.value);

  const onSubmitTodo = (e) => {
    e.preventDefault();

    // Localstarage add todo
    localStorage.setItem(
      "todo",
      JSON.stringify([
        ...(todo || []),
        { content: todoInput, isCompleted: false },
      ])
    );

    setTodo((todo) => {
      const newTodo = [
        ...(todo || []),
        { content: todoInput, isCompleted: false },
      ];
      return newTodo;
    });

    setTodoInput("");
  };

  return (
    <Form onSubmit={onSubmitTodo} className="TodoCreate">
      <Input
        type="text"
        value={todoInput}
        placeholder="할 일을 입력해줘!"
        required
        onChange={onChangeTodo}
      />
      <Button type="submit">+</Button>
    </Form>
  );
};

export default TodoCreate;

//Todo 생성 기능
//Create

const Form = styled.form`
  display: flex;
  background: white;
  margin: 20px;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: black;
  /* 버튼을 제외한 영역을 모두 차지하기 */
  flex: 1;
`;
const Button = styled.button`
  background: skyblue;
  font-size: 20px;
  flex: 0.1;
`;
