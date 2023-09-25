import React from "react";
import styles from "../styles/Header.module.scss";

const Header = () => {
  return (
    <section className={styles.header}>
      <p className={styles.header__logo}>ToDo</p>
    </section>
  );
};

export default Header;
