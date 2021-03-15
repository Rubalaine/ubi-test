import React, { useEffect, useState } from "react";
import ContactCard from "./ContactCard";
import axios from "axios";
const ContactList = () => {
  const [contacts, setContacts] = useState({ contacts: [] });
  let numbers;
  useEffect(() => {
    async function fetchContacts() {
      try {
        console.log("loading");
        const contactNumbers = await axios({
          method: "GET",
          url: "http://ubi-moz.ml/contacts/list/3000",
        });
        console.log(contactNumbers.data);
        setContacts({ ...contacts, ...contactNumbers.data });
        console.log("[contacts] ", contacts);
        numbers = contacts.contacts.map((contact) => {
          <ContactCard
            image=""
            key={contact.id}
            name={contact.name}
            contact={"+258 " + contact.phone}
          />;
        });
      } catch (error) {
        console.log(error);
      }
    }
    fetchContacts();
    console.log("[contacts] ", contacts);
  }, []);
  return (
    contacts.contacts.length &&
    contacts.contacts.map((contact) => (
      <ContactCard
        image=""
        key={contact.id}
        name={contact.name}
        contact={"+258 " + contact.phone}
      />
    ))
  );
};

export default ContactList;
