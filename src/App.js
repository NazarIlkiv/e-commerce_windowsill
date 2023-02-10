import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Homepage from "../src/Components/Homepage/Homepage";
import Footer from "./Components/Footer/Footer";
import Products from "./Components/Products/Products";
import Services from "./Components/Services/Services";
import Contacts from "./Components/Contacts/Contacts";
import Popup from "./Components/PopUp/Popup";
import Feedback_form from "./Components/Feedback_form/Feedback_form";
import { Routes, Route } from "react-router-dom";
import { redirect } from "react-router-dom";
import NoMatch from "./Components/NoMatch/NoMatch";

function App() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <div className="wrapper">
        <Header activePopup={setModalActive} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/products"
            element={<Products activePopup={setModalActive} />}
          />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/*" element={<NoMatch />} />
        </Routes>
        <Popup active={modalActive} setActive={setModalActive}>
          <Feedback_form />
        </Popup>
        <Footer />
      </div>
    </>
  );
}

export default App;
