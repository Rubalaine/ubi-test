import React, { useEffect, useState } from "react";
import styled from "styled-components";
import IconWrapper from "./../wrappers/IconWrapper";
import { MdSearch } from "react-icons/md";
import { useContacts } from "../../context/ContactsContext";
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
  const [contacts, setContacts] = useContacts();
  const [filterText, setFilterText] = useState("");
  useEffect(() => {
    console.log(filterText);
    setContacts({
      ...contacts,
      filtered: contacts.list.filter((el) =>
        el.name.toLowerCase().includes(filterText)
      ),
    });
    // eslint-disable-next-line
  }, [filterText]);
  const filter = (event) => {
    setFilterText(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <Search onSubmit={handleSubmit}>
      <Input type="text" placeholder="Pesquisar" onChange={filter} />
      <IconWrapper>
        <MdSearch />
      </IconWrapper>
    </Search>
  );
};

export default SearchImput;
