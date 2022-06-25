import React from "react";
import "./Hero.scss";

import HeroImage from "../../assets/HeroServer.svg";
import Bg from "../../assets/bg.svg";

const HeroServer = () => {
  return (
    <section className="hero__section">
      <div className="container">
        <div className="hero__row">
          <div className="hero__content">
            <h1>Аренда серверов в Бишкеке</h1>
            <p>
              Аренда физических выделенных серверов в Бишкеке. Мощные серверы
              на базе AMD и Intel® в наличии.
            </p>
            <button className="button hollow">
              <a href="https://wa.me/+996552282553">Написать в WhatsApp</a>
            </button>
          </div>
          <div className="hero__image">
            <img src={HeroImage} alt="HeroImage" />
          </div>
        </div>
      </div>
      <img
        ref={(el) => {
          Animation = el;
        }}
        src={Bg}
        alt="background-elements"
        className="bg__elements"
      />
    </section>
  );
};

export default HeroServer;
