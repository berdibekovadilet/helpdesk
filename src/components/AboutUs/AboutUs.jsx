import React from "react";
import "./AboutUs.scss";
import Object1 from "../../assets/Object1.png";
import Object2 from "../../assets/Object2.png";
import Object3 from "../../assets/Object3.png";
import BgElem1 from "../../assets/bg-elem1.svg";
import ProfTeam from "../../assets/ProfTeam.svg";
import Rectangle1 from "../../assets/Rectangle1.svg";

const AboutUs = () => {
  return (
    <>
      <section className="about">
        <div className="container">
          <h2 className="about__title">
            Приходящий системный администратор для обслуживания вашего бизнеса
          </h2>
          <div className="about__row">
            <div className="about__card ">
              <img src={Object1} alt="card" className="about__card__img" />
              <h4 className="about__card__title">Компьютеры</h4>
              <p className="about__card__text">
                Обслуживание компьютеров, оргтехники и серверов компаний. А
                также установка лицензионного ПО от Microsoft, Adobe, 1C и
                других.
              </p>
            </div>

            <div className="about__card ">
              <h4 className="about__card__title title__monitoring">
                Мониторинг
              </h4>
              <p className="about__card__text">
                Внедрение круглосуточного мониторинга ИТ-структуры. И
                организация системы резервного копирования.
              </p>
              <img
                src={Object2}
                alt="card"
                className="about__card__img img__monitoring"
              />
            </div>

            <div className="about__card ">
              <img src={Object3} alt="card" className="about__card__img" />
              <h4 className="about__card__title title__cctv">
                Видеонаблюдение
              </h4>
              <p className="about__card__text">
                Монтаж видеонаблюдения от Hikvision, Dahua, Axis , Трассир и
                Линия.
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
            <div className="team__img">
              <img src={ProfTeam} alt="ProfTeam" />
            </div>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
