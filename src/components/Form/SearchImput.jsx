import React, { useState } from "react";
import styled from "styled-components";
import searchIcon from "./../../assets/search-24px.svg";
import IconWrapper from "./../wrappers/IconWrapper";
const Search = styled.form`
  background-color: #f2f2f2;
  color: #b3b3b3;
  display: flex;
  border-radius: 2px;
  align-items: center;
`;
const Input = styled.input`
  color: inherit;
  padding: 1.4rem 2rem;
  font-size: 1.4rem;
  border-radius: 2px;
  font-weight: 500;
  font-style: italic;
  width: 100%;
  margin-right: -3.5rem;
  background-color: inherit;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: inherit;
    font: inherit;
  }
`;

const SearchImput = () => {
  const [searchText, setSearchText] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleChange = (event) => {
    setSearchText(event.target.value);
  };
  return (
    <Search>
      <Input type="text" placeholder="Pesquisar" onChange={handleChange} />
      <IconWrapper>
        <use xlinkHref={searchIcon + "#search"}></use>
      </IconWrapper>
    </Search>
  );
};

export default SearchImput;
