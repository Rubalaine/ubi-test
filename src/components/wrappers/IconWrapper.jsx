import React from "react";
import styled from "styled-components";
const Icon = styled.div`
  display: inline-block;
  color: currentColor;
  font-size: ${(props) => props.size || 1.6}rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 2rem;
`;

const IconWrapper = ({ size, children }) => (
  <Icon size={size || 2}>{children}</Icon>
);

export default IconWrapper;
