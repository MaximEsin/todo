import React from "react";
import "./App.css";
import Header from "./components/Header";
import Board from "./components/Board";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="Main">
        <Board />
      </main>
    </div>
  );
}

export default App;
