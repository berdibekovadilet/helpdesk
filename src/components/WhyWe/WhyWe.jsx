import React from "react";
import "./WhyWe.scss";
import ResponsibilityImg from "../../assets/Responsibility.png";
import iconList from "../../assets/iconList.svg";
import iconFire from "../../assets/iconFire.svg";
import iconTime from "../../assets/iconTime.svg";
import IconRocket from "../../assets/Rocket.png";
import IconMoney from "../../assets/Money.png";
import IconCup from "../../assets/IconCup.png";

const WhyWe = () => {
  return (
    <>
      <section className="respons">
        <div className="container">
          <div className="respons__row">
            <div className="respons__img">
              <img src={ResponsibilityImg} alt="ResponsibilityImg" />
            </div>
            <div className="respons__content">
              <h2 className="respons__content__title">
                Несём ответственность за ваши данные
              </h2>
              <div className="respons__content__list">
                <div className="respons__content__item">
                  <img src={iconList} alt="iconList" className="iconItem" />
                  <p>Система регламентных операций</p>
                </div>
                <div className="respons__content__item">
                  <img src={iconFire} alt="iconFire" className="iconItem" />
                  <p>Схема действий в форс-мажорных ситуациях</p>
                </div>
                <div className="respons__content__item">
                  <img src={iconTime} alt="iconTime" className="iconItem" />
                  <p>Круглосуточный мониторинг системы</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="why">
      <div className="container">
        <div className="why__row">
          <div className="why__card ">
            <img src={IconRocket} alt="card" />
            <h4>Оперативность</h4>
            <p>
              Оперативно реагируем на Ваши запросы и в кратчайшие сроки решаем
              возникающие проблемы
            </p>
          </div>

          <div className="why__card ">
            <img src={IconMoney} alt="card" />
            <h4>Экономичность</h4>
            <p>
              Снижаем Ваши затраты на содержание штата техподдержки и
              приобретение техники
            </p>
          </div>

          <div className="why__card ">
            <img src={IconCup} alt="card" />
            <h4>Ответственность</h4>
            <p>
              Берем на себя все заботы по IT‑поддержке Вашей компании. Несем
              полную ответственность.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default WhyWe;
