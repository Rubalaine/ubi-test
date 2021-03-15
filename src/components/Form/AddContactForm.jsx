import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button.jsx";
import TopBar from "../Layout/TopBar.jsx";
import HeadingSecondary from "../Typography/HeadingSecondary.jsx";
import Spacer from "../Utils/Spacer.jsx";
import AddField from "./AddField.jsx";

const Form = styled.form`
  text-decoration: none;
`;

const AddContactForm = () => {
  const [contact, setContact] = useState({});
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(contact);
    try {
      const newContact = await axios({
        method: "post",
        url: "http://ubi-moz.ml/contacts/create/3000",
        data: {
          name: contact.name,
          phone: contact.number,
        },
      });
      console.log(newContact);
      alert("contacto adicionado com sucesso");
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (event) => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <TopBar>
        <HeadingSecondary>Novo contacto</HeadingSecondary>
        <Button large>Guardar</Button>
      </TopBar>
      <Spacer size={3} />
      <AddField
        label="Nome"
        type="text"
        name="name"
        placeholder="introduz o nome completo"
        changed={handleChange}
      />
      <Spacer size={3} />

      <AddField
        label="Número de celular"
        type="number"
        name="number"
        placeholder="introduz o numero"
        changed={handleChange}
      />
    </Form>
  );
};

export default AddContactForm;
