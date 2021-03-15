import React from "react";
import styled from "styled-components";

const Text = styled.p`
  color: #b3b3b3;
  font-size: 1.4rem;
  font-weight: 400;
`;

const Paragraph = ({ children }) => <Text>{children}</Text>;

export default Paragraph;
