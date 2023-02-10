import React from "react";
import "../Styles/App.css";
import axios from "axios";
import emblem from "./emblem.png";
import "./contacts.css";
import { useState, useEffect } from "react";

function Contacts() {
  let name = React.createRef();
  let phone = React.createRef();

  const TOKEN = "5890874983:AAEup1uS8SsfirbXPdiFCZ8k_8Dhmizu7II";
  const CHAT_ID = "-1001832750116";
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  function sendForm(event) {
    let message = `<b>Заявка зі сайту!</b>\n`;
    message += `<b>Ім'я: ${name.current.value} </b>\n`;
    message += `<b>Номер телефону: ${phone.current.value} </b> \n`;

    axios.post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    });

    alert(
      "Дякую, що обираєте нас! Наш спеціаліст невдовзі сконтактується з Вами!"
    );
  }

  const [username, setUsername] = useState("");
  const [number, setNumber] = useState("");
  const [usernameDirty, setUsernameDirty] = useState(false);
  const [numberDirty, setNumberDirty] = useState(false);
  const [numberError, setNumberError] = useState(
    "Будь ласка введіть номер телефону"
  );
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (numberError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [numberError]);

  const numberHandler = (e) => {
    setNumber(e.target.value);
    if (e.target.value < 8 || e.target.value.length > 14) {
      setNumberError("Некоректний номер телефону");
      if (!e.target.value) setNumberError("Будь ласка введіть номер телефону");
    } else {
      setNumberError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "username":
        setUsernameDirty(true);
        break;
      case "telephone-number":
        setNumberDirty(true);
        break;
    }
  };

  return (
    <>
      <section className="page__contacts">
        <div className="contacts__container contacts">
          <div className="contacts__info">
            <div className="contacts__office">
              <div className="contacts-office__title">Офіс</div>
              <div className="contacts-office__address">
                <div className="contacts-office__text">Вул.Луганська 1</div>
                <div className="contacts-office__text">м.Львів, Україна</div>
              </div>
              <div className="contacts-office__text">096-362-9939</div>
              <div className="contacts-office__text">
                nik.windowsill@gmail.com
              </div>
            </div>
            <img src={emblem}></img>
          </div>

          <div className="contacts__questions">
            <div className="questions__column contacts-questions__body">
              <div className="main-footer__label contacts-question__label">
                Є запитання? Наш спеціаліст залюбки відповість на всі питання,
                що Вас цікавлять
              </div>
              <form action="" className="subscribe contacts-question__form">
                <input
                  onBlur={(e) => blurHandler(e)}
                  ref={name}
                  name="username"
                  type="text"
                  placeholder="Введіть Ваше ім'я"
                  required
                  className="subscribe__input contacts-question__input"
                ></input>
                {numberError && numberDirty && (
                  <div style={{ color: "white" }}>{numberError}</div>
                )}
                <input
                  onChange={(e) => numberHandler(e)}
                  value={number}
                  onBlur={(e) => blurHandler(e)}
                  ref={phone}
                  type="text"
                  placeholder="Введіть Ваш номер телефону"
                  required
                  className="subscribe__input contacts-question__input"
                ></input>
              </form>
              <div className="contacts__actions">
                <button
                  disabled={!formValid}
                  onClick={sendForm}
                  type="submit"
                  className="subscribe__button button contacts-question__button"
                >
                  Надіслати
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="reply__body">
          <p id="reply_form"></p>
        </div>

        <div className="products-title__body">
          <h2 className="header-main__title contacts__attention">
            Під час військового стану працюємо онлайн
          </h2>
        </div>
      </section>
    </>
  );
}

export default Contacts;
