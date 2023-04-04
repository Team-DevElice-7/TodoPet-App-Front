import React from "react";
import styled from "styled-components";

const HomePage = () => {
  return (
    <Container>
      <div>홈페이지에 들어갈 컴포넌트 1</div>
      <br />
      <div>홈페이지에 들어갈 컴포넌트 2</div>
    </Container>
  );
};

export default HomePage;

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;
