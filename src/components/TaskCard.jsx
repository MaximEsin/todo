import React, { useEffect, useState } from "react";
import styles from "../styles/ModalContent.module.scss";
import Input from "../UI/input/Input";
import TextArea from "../UI/textarea/TextArea";
import Button from "../UI/button/Button";
import { useDispatch } from "react-redux";
import { editTask } from "../services/actions";

const TaskCard = ({ currentTask, active }) => {
  const dispatch = useDispatch();

  console.log(currentTask);

  useEffect(() => {
    setName(currentTask.name);
    setDescription(currentTask.description);
    setFinishDate(currentTask.finishDate);
    setPriority(currentTask.priority);
    setComment(currentTask.comment);
  }, [active]);

  const [name, setName] = useState(currentTask.name);
  const [description, setDescription] = useState(currentTask.description);
  const [finishDate, setFinishDate] = useState(currentTask.finishDate);
  const [priority, setPriority] = useState(currentTask.priority);
  const [comment, setComment] = useState(currentTask.comment);

  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const countTimeInWork = () => {
    let yearsInWork = year - currentTask.year;
    let monthsInWork = month - currentTask.month;
    let daysInWork = day - currentTask.day;
    if (yearsInWork > 0) {
      const monthsToAdd = 12 - monthsInWork;
      monthsInWork = monthsInWork + monthsToAdd;
    }
    if (monthsInWork < 0) {
      const positiveMonths = -monthsInWork;
      const monthsLeft = 12 - positiveMonths;
      monthsInWork = monthsLeft;
    }
    if (daysInWork < 0) {
      const positiveDays = -daysInWork;
      const daysLeft = 30 - positiveDays;
      daysInWork = daysLeft;
    }
    return `${daysInWork}-${monthsInWork}-${yearsInWork}`;
  };

  return (
    <section className={styles.form}>
      <span className={styles.form__taskNumber}>
        Task number {currentTask.number}
      </span>
      <div className={styles.form__listContainer}>
        <div className={styles.form__list}>
          <div className={styles.item__container}>
            <p className={styles.item__name}>Name</p>
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
          </div>
          <div className={styles.item__container}>
            <p className={styles.item__name}>Creation date</p>
            <p className={styles.item__data}>{currentTask.date}</p>
          </div>
          <div className={styles.item__container}>
            <p className={styles.item__name}>Time in work</p>
            <p className={styles.item__data}>{countTimeInWork()}</p>
          </div>
          <div className={styles.item__container}>
            <p className={styles.item__name}>Finish date</p>
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
          </div>
          <div className={styles.item__container}>
            <p className={styles.item__name}>Priority</p>
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
        </div>
        <div className={styles.form__list}>
          <div className={styles.item__container}>
            <p className={styles.item__name}>Status</p>
            <p className={styles.item__data}>{currentTask.status}</p>
          </div>
          <div className={styles.item__container}>
            <p className={styles.item__name}>Description</p>
            <TextArea
              value={description || ""}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className={styles.item__container}>
            <p className={styles.item__name}>Comments</p>
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
      </div>
      <Button
        text="Edit task"
        setActive={() =>
          dispatch(
            editTask(
              currentTask.number,
              name,
              description,
              finishDate,
              currentTask.comments,
              currentTask.date,
              priority,
              currentTask.status,
              currentTask.day,
              currentTask.month,
              currentTask.year
            )
          )
        }
      />
    </section>
  );
};

export default TaskCard;
