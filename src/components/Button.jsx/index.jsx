import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Btn = styled.button`
  font-size: 2rem;
  font-weight: 700;
  background-color: #3c0066;
  color: white;
  padding: 1rem;
  text-align: center;
  border-radius: 3px;
`;
const Lnk = styled(Link)`
  background-color: #3c0066;
  color: white;
  font-size: 2rem;
  padding: 1rem;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  border-radius: 3px;
  cursor: pointer;
`;
const Button = ({ children, link, to }) => {
  return link ? <Lnk to={to}>{children}</Lnk> : <Btn>{children}</Btn>;
};

export default Button;
