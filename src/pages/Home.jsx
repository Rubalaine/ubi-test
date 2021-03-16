import React from "react";
import SearchImput from "../components/Form/SearchImput.jsx";
import TopBar from "../components/Layout/TopBar";
import Title from "../components/Typography/Title";
import { FaPlus } from "react-icons/fa";
import Spacer from "../components/Utils/Spacer";
import ContactList from "../components/Layout/ContactList.jsx";
import IconButton from "../components/Button.jsx/IconButton.jsx";
import IconWrapper from "../components/wrappers/IconWrapper.jsx";
const Home = () => {
  return (
    <>
      <TopBar>
        <Title>Contactos</Title>
        <IconButton link to="/add" altern="true">
          <IconWrapper>
            <FaPlus />
          </IconWrapper>
        </IconButton>
      </TopBar>
      <Spacer size={2} />
      <SearchImput />
      <Spacer size={2} />

      <ContactList />
    </>
  );
};

export default Home;
