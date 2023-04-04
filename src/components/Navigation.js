import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./Navigation.css";

const Navigation = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    const innerT = e.target.textContent;
    switch (innerT) {
      case "HomePage":
        navigate("/");
        return;
      case "TodoPage":
        navigate("/todo");
        return;
      default:
        return;
    }
  };

  return (
    <NavWrapper>
      <ul className="nav-header">
        <li>
          <div onClick={handleClick}>HomePage</div>
        </li>
        <li>
          <div onClick={handleClick}>TodoPage</div>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Navigation;

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: #6e6e6e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 3px;
  z-index: 3;
`;
