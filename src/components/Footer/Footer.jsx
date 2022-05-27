import React from "react";
import "./Footer.scss";
import AnyDeskLogo from "../../assets/apps/AnyDeskLogo.svg";
import TeamViewerLogo from "../../assets/apps/TeamViewerLogo.svg";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <h2 className="footer__title">
          Скачайте приложения для удаленного доступа
        </h2>
        <ul className="footer__list">
          <li className="footer__list_item">
            <img src={TeamViewerLogo} alt="TeamViewerLogo" />
            <p>Срочная помощь с использованием удаленного рабочего стола.</p>
            <p className="only-for-windows">Только для ОС Windows</p>
            <a href="../../assets/apps/TeamViewerQS.exe" className="hollow" download>
              Нажмите чтобы скачать
            </a>
          </li>
          <li className="footer__list_item">
            <img src={AnyDeskLogo} alt="AnyDesklogo" />
            <p>Эффективное подключение к удаленному рабочему столу.</p>
            <p className="only-for-windows">Только для ОС Windows</p>
            <a href="../../assets/apps/AnyDesk.exe" className="hollow" download>
              Нажмите чтобы скачать
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
