import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Board from "./components/Board";
import Modal from "./components/Modal";
import Form from "./components/Form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function App() {
  const [modalFormActive, setModalFormActive] = useState(false);
  const [modalTaskActive, setModalTaskActive] = useState(false);

  const { queueData } = useSelector((state) => state.dataReducer);
  console.log(queueData);

  const closeModal = () => {
    setModalFormActive(false);
    setModalTaskActive(false);
  };

  return (
    <div className="App">
      <Header />
      <main className="Main">
        <Board setActive={setModalFormActive} />
      </main>
      <Modal active={modalFormActive} closeModal={closeModal}>
        <Form setActive={setModalFormActive} />
      </Modal>
      <Modal active={modalTaskActive} closeModal={closeModal} />
    </div>
  );
}

export default App;
