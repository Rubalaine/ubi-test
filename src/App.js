import React from "react";
import AppWrapper from "./components/wrappers/AppWrapper";
import Home from "./pages/Home";
import Add from "./pages/Add";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Edit from "./pages/Edit";
import ContactsContext from "./context/ContactsContext";
const App = () => {
  return (
    <ContactsContext>
      <AppWrapper>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Add />} />
            <Route path="/edit" element={<Edit />} />
          </Routes>
        </Router>
      </AppWrapper>
    </ContactsContext>
  );
};

export default App;
