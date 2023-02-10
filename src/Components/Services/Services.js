import React from "react";
import "../Styles/App.css";
import "./Services.css";
import serv01 from "./img/services/01.svg";
import serv02 from "./img/services/02.svg";
import serv03 from "./img/services/03.svg";
import serv04 from "./img/services/04.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <sections className="page__services services">
        <div className="services__container">
          <div className="services__content">
            <div className="services__header header-main">
              <a className="header-main__label">Послуги</a>
              <h2 className="header-main__title">Послуги, які ми надаємо</h2>
              <div className="header-main__actions">
                <Link to="/contacts" className="header-main__button button">
                  Контакти
                </Link>
              </div>
            </div>
          </div>
          <div className="services__items">
            <div className="services__column">
              <article className="services__item item-service">
                <div className="item-service__icon">
                  <img src={serv01}></img>
                </div>
                <h4 className="item-service__title">
                  Пошук підвіконня, який задовольнить Ваші потреби
                </h4>
              </article>
              <article className="services__item item-service">
                <div className="item-service__icon">
                  <img src={serv02}></img>
                </div>
                <h4 className="item-service__title">
                  Безкоштовна консультація
                </h4>
              </article>
            </div>
            <div className="services__column">
              <article className="services__item item-service">
                <div className="item-service__icon">
                  <img src={serv03}></img>
                </div>
                <h4 className="item-service__title">
                  Продаж підвіконня за приємними цінами
                </h4>
              </article>
              <article className="services__item item-service">
                <div className="item-service__icon">
                  <img src={serv04}></img>
                </div>
                <h4 className="item-service__title">Виклик замірника</h4>
              </article>
            </div>
          </div>
        </div>
      </sections>
    </>
  );
}
