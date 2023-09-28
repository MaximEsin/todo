import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/Board.module.scss";
import Table from "./Table";
import Button from "../UI/button/Button";

const Board = ({ setActive, setTaskActive }) => {
  const { queueData, developmentData, doneData } = useSelector(
    (state) => state.dataReducer
  );
  return (
    <section className={styles.board}>
      <Table
        name="Queue"
        setActive={setActive}
        tasks={queueData}
        setTaskActive={setTaskActive}
      >
        <Button
          type="button"
          text="Add task"
          setActive={setActive}
          switcher="true"
        />
      </Table>
      <Table
        name="Development"
        tasks={developmentData}
        setTaskActive={setTaskActive}
      >
        <div className={styles.board__item}>Keep working</div>
      </Table>
      <Table name="Done" tasks={doneData} setTaskActive={setTaskActive}>
        <div className={styles.board__item}>Congratulations!</div>
      </Table>
    </section>
  );
};

export default Board;
