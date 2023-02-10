import React, { useState } from "react";
import "../Styles/App.css";
import logo from "./img/logo.svg";
import { Link } from "react-router-dom";

document.addEventListener("click", documentClick);

function documentClick(e) {
  const targetItem = e.target;
  if (targetItem.closest(".icon-menu")) {
    document.documentElement.classList.toggle("menu-open");
  }
}

export default function Header({ activePopup }) {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <Link to="/" className="header__logo">
            <img src={logo} alt="logo" />
          </Link>
          <nav className="header__menu menu">
            <div className="menu__body">
              <ul className="menu__list">
                <li className="menu__item">
                  <a href="/" className="menu__link">
                    Головна
                  </a>
                </li>
                <li className="menu__item">
                  <a href="/products" className="menu__link">
                    Підвіконня
                  </a>
                </li>
                <li className="menu__item">
                  <a href="/services" className="menu__link">
                    Послуги
                  </a>
                </li>
                <li className="menu__item">
                  <a href="/contacts" className="menu__link">
                    Контакти
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <button
            onClick={() => activePopup(true)}
            className="header__button button"
          >
            Безкоштовна консультація
          </button>
          <button className="icon-menu">
            <span></span>
          </button>
        </div>
      </header>
    </>
  );
}
