import React from "react";
import styles from "../styles/Modal.module.scss";
import ModalOverlay from "./ModalOverlay";

const Modal = ({ children, active, closeModal }) => {
  return (
    <ModalOverlay active={active} closeModal={closeModal}>
      <section className={styles.modal}>
        <div
          className={styles.modal__closeIcon}
          onClick={() => closeModal()}
        ></div>
        {children}
      </section>
    </ModalOverlay>
  );
};

export default Modal;
