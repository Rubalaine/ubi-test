import React from "react";
import AppWrapper from "./components/wrappers/AppWrapper";
import Home from "./pages/Home";
import Add from "./pages/Add";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
const App = () => {
  return (
    <AppWrapper>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </Router>
    </AppWrapper>
  );
};

export default App;
