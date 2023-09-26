import React, { useEffect } from "react";
import styles from "../styles/Modal.module.scss";

const ModalOverlay = ({ children, active, closeModal }) => {
  const isOpen = active;

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    function closeByEscape(evt) {
      if (evt.key === "Escape") {
        closeModal();
      }
    }
    document.addEventListener("keydown", closeByEscape);
    return () => {
      document.removeEventListener("keydown", closeByEscape);
    };
  }, [isOpen]);

  return (
    <div
      className={active ? styles.modalOverlay__active : styles.modalOverlay}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          closeModal();
        }
      }}
    >
      {children}
    </div>
  );
};

export default ModalOverlay;
