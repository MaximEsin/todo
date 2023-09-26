import React from "react";
import styles from "./Input.module.scss";

const Input = ({
  placeholder,
  name,
  requirement,
  minLength,
  maxLength,
  value,
  onChange,
}) => {
  return (
    <input
      minLength={minLength}
      maxLength={maxLength}
      required={requirement}
      placeholder={placeholder}
      className={styles.input}
      name={name}
      value={value}
      onChange={onChange}
    ></input>
  );
};

export default Input;
