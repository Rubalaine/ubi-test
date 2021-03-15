import React from "react";
import styled from "styled-components";
import Button from "../components/Button.jsx";
import SearchImput from "../components/Form/SearchImput.jsx";
import TopBar from "../components/Layout/TopBar";
import Title from "../components/Typography/Title";
import addIcon from "./../assets/add_box-24px.svg";
import Spacer from "../components/Utils/Spacer";
import ContactList from "../components/Layout/ContactList.jsx";
const Icon = styled.object`
  color: #3c0066;
  background-color: #3c0066;
`;
const Home = () => {
  return (
    <>
      <TopBar>
        <Title>Contactos</Title>
        <Button link to="/add">
          add
          {/* <Icon data={addIcon} type="image/svg+xml"></Icon> */}
        </Button>
      </TopBar>
      <Spacer size={2} />
      <SearchImput />
      <Spacer size={2} />

      <ContactList />
    </>
  );
};

export default Home;
