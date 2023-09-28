import React from "react";
import styles from "../styles/Task.module.scss";
import { useDispatch } from "react-redux";
import { getTask } from "../services/actions";

const Task = ({ data, setTaskActive, status }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={styles.task}
      onClick={() => {
        setTaskActive(true);
        dispatch(
          getTask(
            data.number,
            data.name,
            data.description,
            data.finishDate,
            data.comment,
            data.date,
            data.priority,
            status,
            data.day,
            data.month,
            data.year
          )
        );
      }}
    >
      <p className={styles.task__text}>{data.number}</p>
      <p className={styles.task__text}>{data.name}</p>
    </div>
  );
};

export default Task;
