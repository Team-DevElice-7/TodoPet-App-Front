import React from "react";
import styled from "styled-components";
import Todolist from "../../components/Todolist";

const TodoPage = () => {
  return (
    <Container>
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
