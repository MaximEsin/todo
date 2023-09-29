import React, { useState, useEffect } from "react";
import styles from "../styles/ModalContent.module.scss";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";
import { storeQueueData } from "../services/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import TextArea from "../UI/textarea/TextArea";

const Form = ({ active, closeModal }) => {
  useEffect(() => {
    setName("");
    setDescription("");
    setFinishDate("");
    setPriority("");
    setComment("");
  }, [active]);

  const dispatch = useDispatch();
  const { queueData } = useSelector((state) => state.dataReducer);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [finishDate, setFinishDate] = useState("");
  const [priority, setPriority] = useState("");
  const [comment, setComment] = useState("");

  const closeFormSendData = () => {
    dispatch(storeQueueData(name, description, finishDate, priority, comment));
    closeModal();
  };

  return (
    <form className={styles.form}>
      <span className={styles.form__taskNumber}>
        Task number {queueData.length + 1}
      </span>
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
          <TextArea
            placeholder="Description"
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
      <Button type="submit" text="Create task" setActive={closeFormSendData} />
    </form>
  );
};

export default Form;
