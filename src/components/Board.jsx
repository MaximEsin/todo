import React from "react";
import styles from "../styles/Board.module.scss";
import Table from "./Table";

const Board = () => {
  return (
    <section className={styles.board}>
      <Table name="Queue" />
      <Table name="Development" />
      <Table name="Done" />
    </section>
  );
};

export default Board;
