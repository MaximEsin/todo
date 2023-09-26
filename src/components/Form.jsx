import React, { useState } from "react";
import styles from "../styles/Form.module.scss";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";
import { storeQueueData } from "../services/actions";
import { useDispatch } from "react-redux";

const Form = ({ setActive }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [finishDate, setFinishDate] = useState("");
  const [priority, setPriority] = useState("");
  const [comment, setComment] = useState("");

  return (
    <form
      className={styles.form}
      onSubmit={() =>
        dispatch(
          storeQueueData(name, description, finishDate, priority, comment)
        )
      }
    >
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
            value={name || ""}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            placeholder="Finish date"
            name="Finish date"
            type="text"
            requirement="true"
            minLength="10"
            maxLength="10"
            value={finishDate || ""}
            onChange={(e) => setFinishDate(e.target.value)}
          />
          <Input
            placeholder="Priority"
            name="Priority"
            type="number"
            requirement="true"
            minLength="1"
            maxLength="1"
            value={priority || ""}
            onChange={(e) => setPriority(e.target.value)}
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
            value={description || ""}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Input
            placeholder="Commentary"
            name="Comment"
            type="text"
            requirement="true"
            minLength="2"
            maxLength="300"
            value={comment || ""}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
      </div>
      <Button
        type="submit"
        text="Create task"
        setActive={() =>
          dispatch(
            storeQueueData(name, description, finishDate, priority, comment)
          )
        }
      />
    </form>
  );
};

export default Form;
