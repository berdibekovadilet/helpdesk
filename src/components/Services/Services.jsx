import React from "react";
import "./Services.scss";
import Img1c from "../../assets/1c.png";
import Cctv from "../../assets/cctv.png";
import Windows from "../../assets/windows.png";
import Bg from "../../assets/bg.svg";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="services__title">Виды услуг</h2>
        <div className="services__grid">
          <div className="services__item">
            <h3 className="services__title">
              Настройка серверов Windows Server
            </h3>
            <p className="services__text">
              Настройка серверов Windows Server 2008r2, 2012r2,2016,2019,2022
            </p>
          </div>

          <div className="services__item">
            <h3 className="services__title">Настройка контролёра домена</h3>
            <p className="services__text">
              Настройка контролёра домена, ДНС, DHCP, GPO, FTP SERVER,
              ТЕРМИНАЛЬНЫЙ СЕРВЕР, ВЕБ СЕРВЕР, VPN SERVER и т.д.
            </p>
          </div>

          <div className="services__item">
            <h3 className="services__title">Настройка сетевого оборудования</h3>
            <p className="services__text">
              Cisco, HP, Dell, Avaya, Juniper, Huawei, Mikrorik, Kerio, Tp-link,
              D-link, Ubiquiti и т.д
            </p>
          </div>

          <div className="services__item">
            <h3 className="services__title">
              Связь между офисами для работы в одной локальной сети
            </h3>
            <p className="services__text">
              VPN SERVER PPTP, L2TP, OPEN VPN, IPSEC, DNS, DHCP, настройка
              маршрутизации, веб прокси, FTP, HOTSPOT, проброс портов, настройка
              firewall, балансировка каналов, бесшовный WI-FI, настройка Vlan
              виртуальных сетей, настройка нескольких провайдеров.
            </p>
          </div>

          <div className="services__item">
            <div className="services__img">
              <img src={Cctv} alt="Cctv" />
            </div>
            <h3 className="services__title">Монтаж видеонаблюдения</h3>
            <p className="services__text">
              Установка и монтаж видеонаблюдения Hikvision, Dahua, Axis ,
              Трассир , Линия.
            </p>
          </div>

          <div className="services__item">
            <div className="services__img">
              <img src={Windows} alt="Windows" />
            </div>
            <h3 className="services__title">Установка лицензионного ПО</h3>
            <p className="services__text">
              Установка всех версий OC Windows, Microsoft Office, Adobe
              Photoshop, Illustrator, AutoCAD, 3dsmax, MapInfo, Archicad,
              SketchUp, CorelDraw.
            </p>
          </div>

          <div className="services__item">
            <h3 className="services__title">Офис под ключ</h3>
            <p className="services__text">
              Монтаж локальной сети, установка видеонаблюдения, установка скуд,
              установка и закуп компьютеров, установка и закуп оргтехники,
              установка серверов АТС ( телефония), установка софта
            </p>
          </div>

          <div className="services__item">
            <div className="services__img">
              <img src={Img1c} alt="1c" />
            </div>
            <h3 className="services__title">Установка 1С</h3>
            <p className="services__text">
              1С Предприятия, Бухгалтерия, Торговый комплекс, Розница.
            </p>
          </div>

          <div className="services__item">
            <h3 className="services__title">Создание корпоративной почты </h3>
            <p className="services__text">
              Создание корпоративной почты Регистрация доменов Перенос
              корпоративной почты
            </p>
          </div>

          <div className="services__item">
            <h3 className="services__title">Установка антивирусов</h3>
            <p className="services__text">
              Касперский, Eset not 32, Avast,McAfee и т.д
            </p>
          </div>

          <div className="services__item">
            <h3 className="services__title">Резервное копирование</h3>
            <p className="services__text">
              Настройка резервного копирования в облако и на локальные диски
              Veeam Backup, Acronis и т.д
            </p>
          </div>
        </div>
      </div>
      <img src={Bg} alt="background-elements" className="bg__elements" />
    </section>
  );
};

export default Services;
