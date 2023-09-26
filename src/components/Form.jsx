import React from "react";
import styles from "../styles/Form.module.scss";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";

const Form = ({ setActive }) => {
  return (
    <form className={styles.form}>
      <span className={styles.form__taskNumber}>Task number 1</span>
      <div className={styles.form__listContainer}>
        <div className={styles.form__list}>
          <Input
            placeholder="Name"
            name="name"
            type="text"
            requirement="true"
            minLength="2"
            maxLength="30"
          />

          <Input
            placeholder="Finish date"
            name="Finish date"
            type="text"
            requirement="true"
            minLength="10"
            maxLength="10"
          />
          <Input
            placeholder="Priority"
            name="Priority"
            type="number"
            requirement="true"
            minLength="1"
            maxLength="1"
          />
        </div>
        <div className={styles.form__list}>
          <Input
            placeholder="Description"
            name="Description"
            type="text"
            requirement="true"
            minLength="2"
            maxLength="300"
          />
          <Input
            placeholder="Commentary"
            name="Comment"
            type="text"
            requirement="true"
            minLength="2"
            maxLength="300"
          />
        </div>
      </div>

      <Button
        type="submit"
        text="Create task"
        setActive={setActive}
        switcher="false"
      />
    </form>
  );
};

export default Form;
