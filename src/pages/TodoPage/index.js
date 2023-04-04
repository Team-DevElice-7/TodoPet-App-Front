import React from "react";
import styled from "styled-components";
import Todolist from "../../components/Todolist";

const TodoPage = () => {
  return (
    <Container>
      <div>TodoPage에 들어갈 컴포넌트 1</div>
      <br />
      <div>TodoPage에 들어갈 컴포넌트 2</div>
      <br />
      <Todolist />
    </Container>
  );
};

export default TodoPage;

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;
