import React from "react";
import "./AboutUs.scss";
import Object1 from "../../assets/Object1.png";
import Object2 from "../../assets/Object2.png";
import Object3 from "../../assets/Object3.png";
import BgElem1 from "../../assets/bg-elem1.svg";
import ProfTeam from "../../assets/ProfTeam.svg";
import Rectangle1 from "../../assets/Rectangle1.svg";

const AboutServer = () => {
  return (
    <>
      <section className="about" id="price">
        <div className="container">
          <h2 className="about__title">Сервера для проектов любой сложности</h2>
          <div className="about__row">
            <div className="about__card price_card">
              <img src={Object1} alt="card" className="about__card__img" />
              <h4>Основной</h4>
              <ul className="about__card__text">
                <li>4 ядра</li>
                <li>6гб RAM</li>
                <li>SSD 128гб</li>
                <li>до 300Мбит/с</li>
                <li>+UPS, Генератор</li>
                <li>Техподдержка 24/7/365 </li>
                <li>Бесплатный бекап данных - 5 дней </li>
                <li class="grey">
                  <a href="/" class="price">
                    <span className="price__before">7500 сом</span>
                    5990 сом
                  </a>
                </li>
              </ul>
            </div>

            <div className="about__card price_card">
              <img src={Object2} alt="card" className="about__card__img" />
              <h4>Продвинутый</h4>
              <ul className="about__card__text">
                <li>8 ядер</li>
                <li>12гб RAM</li>
                <li>SSD 300гб</li>
                <li>до 300Мбит/с</li>
                <li>+UPS, Генератор</li>
                <li>Техподдержка 24/7/365 </li>
                <li>Бесплатный бекап данных - 5 дней </li>
                <li class="grey">
                  <a href="/" class="price">
                    <span className="price__before">16990 сом</span>
                    11990 сом
                  </a>
                </li>
              </ul>
            </div>

            <div className="about__card price_card">
              <img src={Object3} alt="card" className="about__card__img" />
              <h4>Индивидуальный</h4>
              <p className="price__text">
                Построим сервер под ваш запрос, учитывая ваши задачи и
                количество сотрудников.
              </p>
            </div>
          </div>
          <img src={BgElem1} alt="bg-elem" className="BgElem1" />
        </div>

        <img src={BgElem1} alt="bg-elem" className="BgElem2" />
      </section>

      <section className="team">
        <div className="container">
          <div className="team__row">
            <div className="team__content">
              <h2 className="team__content__title">
                Профессиональная команда{" "}
              </h2>
              <p className="team__content__text">
                Регламентные работы, настройка ПО и консультации. Команда
                ИТ-инженеров поддержки 24/7
              </p>
              <img
                src={Rectangle1}
                alt="Rectangle"
                className="team__rectangle"
              />
            </div>
            <div className="team__img">
              <img src={ProfTeam} alt="ProfTeam" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutServer;
