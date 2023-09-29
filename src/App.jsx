import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Board from "./components/Board";
import Modal from "./components/Modal";
import Form from "./components/Form";
import TaskCard from "./components/TaskCard";
import { useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const [modalFormActive, setModalFormActive] = useState(false);
  const [modalTaskActive, setModalTaskActive] = useState(false);
  const { currentTask } = useSelector((state) => state.dataReducer);

  const closeModal = () => {
    setModalFormActive(false);
    setModalTaskActive(false);
  };

  return (
    <div className="App">
      <Header />
      <main className="Main">
        <DndProvider backend={HTML5Backend}>
          <Board
            setActive={setModalFormActive}
            setTaskActive={setModalTaskActive}
          />
        </DndProvider>
      </main>
      <Modal active={modalFormActive} closeModal={closeModal}>
        <Form
          setActive={setModalFormActive}
          active={modalFormActive}
          closeModal={closeModal}
        />
      </Modal>
      <Modal active={modalTaskActive} closeModal={closeModal}>
        <TaskCard currentTask={currentTask} active={modalTaskActive} />
      </Modal>
    </div>
  );
}

export default App;
