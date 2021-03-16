import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useContacts } from "../../context/ContactsContext.jsx";
import Button from "../Button.jsx";
import TopBar from "../Layout/TopBar.jsx";
import HeadingSecondary from "../Typography/HeadingSecondary.jsx";
import Spacer from "../Utils/Spacer.jsx";
import AddField from "./AddField.jsx";

const Form = styled.form`
  text-decoration: none;
`;

const EditContactForm = () => {
  const [contact, setContact] = useState({});
  const [contacts, ,] = useContacts();
  useEffect(() => {
    console.log("[new contacts ]", contacts);
    // eslint-disable-next-line
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(contact);
    try {
      const newContact = await axios({
        method: "PUT",
        url: `http://ubi-moz.ml/contacts/update/3000/${contacts.editable.id}`,
        data: {
          name: contact.name || contacts.editable.name,
          phone: contact.number || contacts.editable.contact,
        },
      });
      console.log(newContact);
      alert("contacto modificado com sucesso");
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
        <HeadingSecondary>Editar contacto</HeadingSecondary>
        <Button large>Guardar</Button>
      </TopBar>
      <Spacer size={3} />
      <AddField
        label="Nome"
        type="text"
        name="name"
        placeholder="introduz o nome completo"
        changed={handleChange}
        value={contacts.editable.name}
      />
      <Spacer size={3} />

      <AddField
        label="Número de celular"
        type="text"
        name="number"
        placeholder="introduz o numero"
        changed={handleChange}
        value={contacts.editable.contact}
      />
    </Form>
  );
};

export default EditContactForm;
