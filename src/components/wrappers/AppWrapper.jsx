import React from "react";
import styled from "styled-components";
const Wrapper = styled.main`
  max-width: 400px;
  margin: 2rem auto 0;
  padding: 1.5rem;
`;
const AppWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default AppWrapper;
