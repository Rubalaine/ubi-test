import React from "react";
import styled from "styled-components";

const Text = styled.p`
  color: black;
  font-size: 1.6rem;
  font-weight: 700;
`;

const HeadingTertiary = ({ children }) => <Text>{children}</Text>;

export default HeadingTertiary;
