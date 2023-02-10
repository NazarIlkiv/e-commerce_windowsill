import React from "react";
import "../Styles/App.css";
import logo from "./img/logo.svg";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__main main-footer">
          <div className="main-footer__container">
            <div className="main-footer__column">
              <a href="/" className="main-footer__logo">
                <img src={logo} alt="logo"></img>
              </a>
              <div className="main-footer__text text">
                <p>
                  <b>NiK</b> - це сучасний онлайн-магазин підвіконня з
                  багаторічним досвідом. Ми з радістю допоможемо допоможе Вам
                  знайти найкраще рішення для оздоблення Вашого приміщення
                  красивим підвіконням!
                </p>
              </div>
            </div>
            <div className="main-footer__column">
              <div className="main-footer__label">Сторінки</div>
              <nav className="main-footer__menu menu-footer">
                <ul className="menu-footer__list">
                  <li className="menu-footer__item">
                    <a href="/" className="menu-footer__link">
                      Головна
                    </a>
                  </li>
                  <li className="menu-footer__item">
                    <a href="/products" className="menu-footer__link">
                      Підвіконня
                    </a>
                  </li>
                  <li className="menu-footer__item">
                    <a href="/services" className="menu-footer__link">
                      Послуги
                    </a>
                  </li>
                  <li className="menu-footer__item">
                    <a href="/contacts" className="menu-footer__link">
                      Контакти
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="main-footer__column">
              <div className="main-footer__label">Підвіконня</div>
              <nav className="main-footer__menu menu-footer">
                <ul className="menu-footer__list">
                  <li className="menu-footer__item">
                    <a href="/products" className="menu-footer__link">
                      Plastolit
                    </a>
                  </li>
                  <li className="menu-footer__item">
                    <a href="/products" className="menu-footer__link">
                      Sauberg
                    </a>
                  </li>
                  <li className="menu-footer__item">
                    <a href="/products" className="menu-footer__link">
                      Crystalit
                    </a>
                  </li>
                  <li className="menu-footer__item">
                    <a href="/products" className="menu-footer__link">
                      Kraft
                    </a>
                  </li>
                  <li className="menu-footer__item">
                    <a href="/products" className="menu-footer__link">
                      WDS
                    </a>
                  </li>
                  <li className="menu-footer__item">
                    <a href="/products" className="menu-footer__link">
                      Ganz
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="main-footer__column">
              <div className="main-footer__label">Підпишися на наші новини</div>
              <div className="main-footer__text text">
                Вкажіть Вашу електронну пошту, щоб бути повідомленим про останні
                новини
              </div>
              <form action="" className="subscribe">
                <input
                  type="email"
                  placeholder="Введіть е-пошту"
                  required
                  className="subscribe__input"
                ></input>
                <button type="submit" className="subscribe__button button">
                  Підписатися
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer__bottom bottom-footer">
          <div className="bottom-footer__container">
            <div className="bottom-footer__copy">
              Website created by {""}
              <a
                className="developer__caption"
                href="https://github.com/NazarIlkiv"
              >
                Nazar Ilkiv
              </a>{" "}
              | © 2023
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
