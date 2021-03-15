import React from "react";
import styled from "styled-components";

const Text = styled.p`
  color: black;
  font-size: 1.8rem;
  font-weight: 700;
`;

const HeadingSecondary = ({ children }) => <Text>{children}</Text>;

export default HeadingSecondary;
