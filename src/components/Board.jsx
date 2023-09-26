import React from "react";
import styles from "../styles/Board.module.scss";
import Table from "./Table";
import Button from "../UI/button/Button";

const Board = ({ setActive }) => {
  return (
    <section className={styles.board}>
      <Table name="Queue" setActive={setActive}>
        <Button
          type="button"
          text="Add task"
          setActive={setActive}
          switcher="true"
        />
      </Table>
      <Table name="Development">
        <div className={styles.board__item}>Keep working</div>
      </Table>
      <Table name="Done">
        <div className={styles.board__item}>Congratulations!</div>
      </Table>
    </section>
  );
};

export default Board;
