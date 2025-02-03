"use client";

import React, { ReactNode } from "react";
import Modal from "react-modal";
import "./CustomModal.scss";

type Props = {
  children: ReactNode;
  isOpen: boolean;
  closeModal: () => void; // Приймаємо функцію, яка вже обгорнута в dispatch
};

export const CustomModal: React.FC<Props> = ({ isOpen, closeModal, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      overlayClassName={"modal-overlay"}
      className={"modal-content"}
      closeTimeoutMS={300}
      onRequestClose={closeModal} // Використовуємо передану функцію напряму
      ariaHideApp={false}
    >
      <div className="modal__close--wrapper">
        <button className="modal__close" onClick={closeModal}>
          {/* <CloseIcon /> */}
        </button>
      </div>
      {children}
    </Modal>
  );
};
