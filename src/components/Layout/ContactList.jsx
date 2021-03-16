import React, { useEffect } from "react";
import ContactCard from "./ContactCard";
import axios from "axios";
import { useContacts } from "../../context/ContactsContext";
import Paragraph from "../Typography/Paragraph";
import Spacer from "../Utils/Spacer";
const ContactList = () => {
  const [contacts, setContacts] = useContacts();
  useEffect(() => {
    async function fetchContacts() {
      try {
        console.log("loading");
        const contactNumbers = await axios({
          method: "GET",
          url: "http://ubi-moz.ml/contacts/list/3000",
        });
        console.log(contactNumbers.data);
        setContacts({
          ...contacts,
          list: [...contactNumbers.data.contacts],
          filtered: [...contactNumbers.data.contacts],
        });
        console.log("[contacts] ", contacts);
      } catch (error) {
        console.log(error);
      }
    }
    fetchContacts();
    console.log("[contacts] ", contacts);
    // eslint-disable-next-line
  }, []);
  return contacts.filtered.length ? (
    contacts.filtered.map((contact) => (
      <ContactCard
        image=""
        id={contact.id}
        key={contact.id}
        name={contact.name}
        contact={contact.phone}
      />
    ))
  ) : (
    <>
      <Spacer size={16} />
      <Paragraph>Nenhum contacto a apresentar</Paragraph>
    </>
  );
};

export default ContactList;
