import React from "react";
import styles from "../styles/Table.module.scss";

const Table = ({ name, children }) => {
  return (
    <section className={styles.table}>
      <p className={styles.table__name}>{name}</p>
      <div className={styles.table__list}></div>
      {children}
    </section>
  );
};

export default Table;
