import React from "react";
import styled from "styled-components";

const Text = styled.h1`
  font-size: 3.6rem;
  font-weight: 700;
`;
const Title = ({ children }) => <Text>{children}</Text>;

export default Title;
