import React from "react";
import styled from "styled-components";

const Text = styled.p`
  color: #b3b3b3;
  font-size: 1.4rem;
  font-weight: ${(props) => (props.light ? "300" : "400")};
`;

const Paragraph = ({ children, light }) => (
  <Text light={light}>{children}</Text>
);

export default Paragraph;
