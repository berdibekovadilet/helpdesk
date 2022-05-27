import React from "react";
import axios from "axios";
import fileDownload from "js-file-download";
import "./Footer.scss";
import TeamViewerLogo from "../../assets/TeamViewerLogo.svg";
import AnyDeskLogo from "../../assets/AnyDeskLogo.svg";

const Footer = () => {
  const downloadTeamViewer = (e) => {
    e.preventDefault();
    axios({
      url: "http://helpdesk.kg/",
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      console.log(res);
      fileDownload(res.data, "../public/apps/TeamViewerQS.exe");
    });
  };

  const downloadAnyDesk = (e) => {
    e.preventDefault();
    axios({
      url: "http://helpdesk.kg/",
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      console.log(res);
      fileDownload(res.data, "../public/apps/AnyDesk.exe");
    });
  };

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
            <button className="hollow" onClick={(e) => downloadTeamViewer(e)}>
              Нажмите чтобы скачать
            </button>
          </li>
          <li className="footer__list_item">
            <img src={AnyDeskLogo} alt="AnyDesklogo" />
            <p>Эффективное подключение к удаленному рабочему столу.</p>
            <p className="only-for-windows">Только для ОС Windows</p>
            <button className="hollow" onClick={(e) => downloadAnyDesk(e)}>
              Нажмите чтобы скачать
            </button>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
