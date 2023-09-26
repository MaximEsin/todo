import React from "react";
import styles from "../styles/Table.module.scss";
import Button from "../UI/button/Button";

const Table = ({ name, setActive }) => {
  return (
    <section className={styles.table}>
      <p className={styles.table__name}>{name}</p>
      <div className={styles.table__list}></div>
      <Button text="Add Task" setActive={setActive} switcher="true" />
    </section>
  );
};

export default Table;
