import React from "react";
import styles from "../styles/Table.module.scss";
import Task from "./Task";

const Table = ({ name, children, tasks, setTaskActive }) => {
  return (
    <section className={styles.table}>
      <p className={styles.table__name}>{name}</p>
      <div className={styles.table__list}>
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
