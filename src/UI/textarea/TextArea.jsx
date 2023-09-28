import React from "react";
import styles from "./TextArea.module.scss";

const TextArea = ({ value, onChange, placeholder }) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      className={styles.textArea}
      placeholder={placeholder}
    ></textarea>
  );
};

export default TextArea;
