import React from "react";
import "./MobileMenu.scss";
import { FaTimes } from "react-icons/fa";

const MobileMenu = ({ menuOpen, menuToggler }) => {
  return (
    <div
      className={`${
        menuOpen ? "sidebar__container-open" : "sidebar__container"
      }`}
      onClick={menuToggler}
    >
      <div className="sidebar__icon" onClick={menuToggler}>
        <FaTimes />
      </div>
      <div className="sidebar__wrapper">
        <ul className="sidebar__list">
          <li className="sidebar__list_item">
            <a href="#services">Услуги</a>
          </li>
          <li className="sidebar__list_item">
            <a href="#gettouch">Контакты</a>
          </li>
          <li className="sidebar__list_item">
            <a href="#footer">Приложения</a>
          </li>
          <li className="sidebar__list_btn">
            <a href="tel:+996552282553" target="blank">
              (0552) 282 553
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
