import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.8rem;
  width: 3.8rem;
  color: #3c0066;

  background-color: #f2f2f2;
  text-decoration: none;
  /* padding: 1rem; */
  border-radius: 1rem;
`;
const IconButton = ({ children, to, altern }) => {
  return (
    <Button to={to} altern={altern}>
      {children}
    </Button>
  );
};

export default IconButton;
