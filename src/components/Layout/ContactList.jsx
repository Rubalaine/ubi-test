import React, { useEffect } from "react";
import ContactCard from "./ContactCard";
import axios from "axios";
import { useContacts } from "../../context/ContactsContext";
import Paragraph from "../Typography/Paragraph";
import picture from "./../../assets/person-24px.svg";
import FallBack from "../Utils/FallBack";

const ContactList = () => {
  const [contacts, setContacts] = useContacts();
  useEffect(() => {
    async function fetchContacts() {
      try {
        const contactNumbers = await axios({
          method: "GET",
          url: "http://ubi-moz.ml/contacts/list/3000",
        });
        setContacts({
          ...contacts,
          list: [...contactNumbers.data.contacts],
          filtered: [...contactNumbers.data.contacts],
        });
      } catch (error) {
        console.log(error);
      }
    }
    fetchContacts();
    // eslint-disable-next-line
  }, []);
  return contacts.filtered.length ? (
    contacts.filtered.map((contact) => (
      <ContactCard
        image={picture}
        id={contact.id}
        key={contact.id}
        name={contact.name}
        contact={contact.phone}
      />
    ))
  ) : (
    <FallBack>
      <Paragraph light>Nenhum contacto a apresentar</Paragraph>
    </FallBack>
  );
};

export default ContactList;
