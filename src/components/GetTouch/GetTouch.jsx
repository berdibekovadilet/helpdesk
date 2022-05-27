import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./GetTouch.scss";
import Modal from "../Modal/Modal";
import Telephone from "../../assets/phone.svg";
import Whatsapp from "../../assets/whatsapp.svg";
import Telegram from "../../assets/telegram.svg";
import Instagram from "../../assets/instagram.svg";

const GetTouch = () => {
  const [openModal, setOpenModal] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_60x8mgj",
        "template_stjkhre",
        form.current,
        "33e4AgAJ74-ybJh8T"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section className="gettouch" id="gettouch">
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
      <div className="container">
        <div className="gettouch__bg">
          <h2 className="gettouch__title">Cвязаться с нами</h2>
          <div className="gettouch__content">
            <form className="gettouch__input" ref={form} onSubmit={sendEmail}>
              <input type="tel" placeholder="Ваш номер телефона" name="phone" />
              <button
                className="hollow"
                type="submit"
                value="Send"
                onClick={() => setOpenModal(true)}
              >
                Отправить
              </button>
            </form>

            <div className="gettouch__icons">
              <a
                href="tel:+996552282553"
                target="_blank"
                rel="noreferrer noopener"
                className="grow"
              >
                <img src={Telephone} alt="Telephone" />
              </a>

              <a
                href="https://wa.me/+996552282553"
                target="_blank"
                rel="noreferrer noopener"
                className="grow"
              >
                <img src={Whatsapp} alt="Whatsapp" />
              </a>

              <a
                href="https://t.me/+996552282553"
                target="_blank"
                rel="noreferrer noopener"
                className="grow"
              >
                <img src={Telegram} alt="Telegram" />
              </a>

              <a
                href="https://www.instagram.com/helpdesk.kg/"
                target="_blank"
                rel="noreferrer noopener"
                className="grow"
              >
                <img src={Instagram} alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetTouch;
