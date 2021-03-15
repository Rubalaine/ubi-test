import React from "react";
import styled from "styled-components";

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
`;
const TopBar = ({ children }) => {
  return <Bar>{children}</Bar>;
};

export default TopBar;
