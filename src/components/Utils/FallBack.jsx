import React from "react";
import styled from "styled-components";
const StyledFallBack = styled.div`
  margin-top: 56%;
  text-align: center;
`;
const FallBack = ({ children }) => <StyledFallBack>{children}</StyledFallBack>;
export default FallBack;
