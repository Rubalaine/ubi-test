import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Lnk = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.8rem;
  width: 3.8rem;
  color: ${(props) => (props.altern ? "white" : "#3c0066")};
  background-color: ${(props) => (!props.altern ? "#f2f2f2" : "#3c0066")};
  text-decoration: none;
  border-radius: ${(props) => (props.altern ? "3px" : "1rem")};
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.8rem;
  width: 3.8rem;
  color: ${(props) => (props.altern ? "white" : "#3c0066")};
  background-color: ${(props) => (!props.altern ? "#f2f2f2" : "#3c0066")};
  text-decoration: none;
  border-radius: ${(props) => (props.altern ? "3px" : "1rem")};
  &:focus {
    outline: none;
  }
`;
const IconButton = ({ children, to, altern, action, link }) => {
  return link ? (
    <Lnk to={to} altern={altern} onClick={action}>
      {children}
    </Lnk>
  ) : (
    <Button altern={altern} onClick={action}>
      {children}
    </Button>
  );
};

export default IconButton;
