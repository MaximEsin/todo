import React from "react";
import styles from "../styles/Table.module.scss";
import Task from "./Task";
import { useDrop } from "react-dnd";

const Table = ({ name, children, tasks, setTaskActive }) => {
  const [, drop] = useDrop({
    accept: 'task',
    drop(number) {
      dispatch(AddItem(itemId));
    },
  });

  return (
    <section className={styles.table}>
      <p className={styles.table__name}>{name}</p>
      <div ref={drop} className={styles.table__list}>
        {tasks.map((item, index) => {
          return (
            <Task
              data={item}
              key={index}
              setTaskActive={setTaskActive}
              status={name}
            />
          );
        })}
      </div>
      {children}
    </section>
  );
};

export default Table;
