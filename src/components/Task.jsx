import React from "react";
import styles from "../styles/Task.module.scss";

const Task = () => {
  return (
    <div className={styles.task}>
      <p className={styles.task__text}>1</p>
      <p className={styles.task__text}>Cook dinner</p>
    </div>
  );
};

export default Task;
