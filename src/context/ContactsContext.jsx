import React, { createContext, useContext, useState } from "react";

const ContactsContext = createContext();
export const useContacts = () => useContext(ContactsContext);
const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState({
    list: [],
    filtered: [],
    editable: {},
  });
  return (
    <ContactsContext.Provider value={[contacts, setContacts]}>
      {children}
    </ContactsContext.Provider>
  );
};

export default ContactProvider;
