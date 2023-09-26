import React from "react";
import styles from "./Button.module.scss";

const Button = ({ text, setActive, type, switcher }) => {
  return (
    <button
      type={type}
      className={styles.button}
      onClick={(e) => e.preventDefault(setActive(switcher))}
    >
      {text}
    </button>
  );
};

export default Button;
