import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Thankyou from "./component/Thankyou";
import { ContaxtApi } from "./component/ContaxtApi";
import Modal from "./component/Modal";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(true);
    console.log("Hi");
  };
  const handlecloseModal = () => {
    setShowModal(false);
    console.log("Hello");
  };
  const closingModal = () => {
    setShowModal(false);
    console.log("Hello  every one");
  };
  return (
    <>
      <ContaxtApi.Provider
        value={{
          handleShowModal: handleShowModal,
          handlecloseModal: handlecloseModal,
          closingModal: closingModal,

          showModal,
          setShowModal,
        }}
      >
        <BrowserRouter>
          {showModal ? (
            <Modal />
          ) : (
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/thankyouPage/:name" element={<Thankyou />}></Route>
              <Route path="/modal" element={<Modal />}></Route>
            </Routes>
          )}
        </BrowserRouter>
      </ContaxtApi.Provider>
    </>
  );
}

export default App;
