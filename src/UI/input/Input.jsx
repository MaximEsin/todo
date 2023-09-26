import React from "react";
import styles from "./Input.module.scss";

const Input = ({ placeholder, name, requirement, minLength, maxLength }) => {
  return (
    <input
      minLength={minLength}
      maxLength={maxLength}
      required={requirement}
      placeholder={placeholder}
      className={styles.input}
      name={name}
    ></input>
  );
};

export default Input;
