import React from "react";
import styles from "../styles/Board.module.scss";
import Table from "./Table";

const Board = ({ setActive }) => {
  return (
    <section className={styles.board}>
      <Table name="Queue" setActive={setActive} />
      <Table name="Development" setActive={setActive} />
      <Table name="Done" setActive={setActive} />
    </section>
  );
};

export default Board;
