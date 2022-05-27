import React from "react";
import "./Navbar.scss";
import Logo from "../../../assets/Logo.svg";
import { FaBars } from "react-icons/fa";

const Navbar = ({ menuToggler }) => {
  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span>Helpdesk</span>
        </div>
        <div className="mobile-icon" onClick={menuToggler}>
          <FaBars />
        </div>
        <ul className="nav__list">
          <li className="nav__list_item">
            <a href="#services">Услуги</a>
          </li>
          <li className="nav__list_item">
            <a href="#gettouch">Контакты</a>
          </li>
          <li className="nav__list_item">
            <a href="#footer">Приложения</a>
          </li>
          <li className="nav__list_btn">
            <a href="tel:+996552282553" target="blank">
              (0552) 282-553
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
