import React from "react";
import styled from "styled-components";

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.8rem;
  width: 3.8rem;
  color: #3c0066;
  background-color: #f2f2f2;
  text-decoration: none;
  padding: 1rem;
  border-radius: 1rem;
`;
const IconButton = ({ children }) => {
  return <Button>{children}</Button>;
};

export default IconButton;
