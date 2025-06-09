"use client";
import React from "react";
import Modal from "react-modal";
import "./CustomModal.scss";
import { CustomModalProps } from "../../../types/others";

export const CustomModal: React.FC<CustomModalProps> = ({ isOpen, closeModal, children }) => {
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
