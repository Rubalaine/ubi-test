import React from "react";
import styled from "styled-components";
const Wrapper = styled.main`
  max-width: 400px;
  margin: 0 auto;
  padding: 1.5rem;
  background-color: white;
  min-height: 100vh;
`;
const AppWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default AppWrapper;
