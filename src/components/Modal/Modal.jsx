import React from "react";
import "./Modal.scss";
import FeedbackImg from "../../assets/feedback.svg";

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div class="modal" onClick={onClose}>
      <div class="modalContent" id="modalPopup">
        <img src={FeedbackImg} alt="FeedbackImg" />
        <p>
          Мы получили ваш номер телефона и свяжемся с Вами в ближайшее время!
        </p>
        <button class="accept" onClick={onClose}>
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default Modal;
