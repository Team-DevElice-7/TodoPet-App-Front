import React from "react";
import styled from "styled-components";

const TodoItem = ({ todo, setTodo }) => {
  // isCompleted handling
  const onChangeIsCompleted = (idx, value) => {
    todo[idx].isCompleted = value;
    localStorage.setItem("todo", JSON.stringify(todo));

    setTodo((todo) => {
      const newTodo = [...todo];
      return newTodo;
    });
  };

  return (
    <ol className="TodoItem">
      {(todo &&
        todo.map((item, idx) => {
          return (
            <Li key={idx}>
              <Span className={item.isCompleted ? "checked" : ""}>
                {item.content}
              </Span>
              <CheckBox
                type="checkbox"
                defaultChecked={item.isCompleted}
                onChange={(e) => onChangeIsCompleted(idx, e.target.checked)}
              />
            </Li>
          );
        })) || <DivNothingTodo>할일이 없습니다.</DivNothingTodo>}
    </ol>
  );
};

export default TodoItem;

//여기에 TodoItem 내부 기능
//Update, Delete

const Li = styled.li`
  color: black;
  background: white;
  padding: 1rem;
  display: flex;
  margin: 0 100px 0 100px;
  align-items: center; // 세로 중앙 정렬
  & + & {
    border-top: 1px solid #dee2e6;
  }
`;
const CheckBox = styled.input`
  width: 50px;
  cursor: pointer;
  display: flex;
  align-items: center; // 세로 중앙 정렬
`;
const Span = styled.span`
  margin-left: 0.5rem;
  flex: 1; // 차지할 수 있는 영역 모두 차지
  &.checked {
    color: #adb5bd;
    text-decoration: line-through;
  }
`;

const DivNothingTodo = styled.div`
  text-align: center;
`;
