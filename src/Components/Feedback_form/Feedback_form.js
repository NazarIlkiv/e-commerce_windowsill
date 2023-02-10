import React, { createRef, useEffect, useState } from "react";
import "../Styles/App.css";
import "./feedback_form.css";
import axios from "axios";

function Feedback_form() {
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
  const [usernameError, setUsernameError] = useState(
    "Будь ласка введіть Ваше ім'я"
  );
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
      <div className="feedback__container feedback">
        <form className="subscribe feedback__form">
          {usernameDirty && usernameError && (
            <div style={{ color: "white" }}>{usernameError}</div>
          )}
          <input
            onBlur={(e) => blurHandler(e)}
            ref={name}
            name="username"
            type="text"
            placeholder="Введіть Ваше ім'я"
            className="subscribe__input feedback__input"
          ></input>
          {numberError && numberDirty && (
            <div style={{ color: "white" }}>{numberError}</div>
          )}
          <input
            onChange={(e) => numberHandler(e)}
            value={number}
            onBlur={(e) => blurHandler(e)}
            ref={phone}
            name="telephone-number"
            type="text"
            placeholder="Введіть Ваш номер телефону"
            className="subscribe__input feedback__input"
          ></input>
          <button
            disabled={!formValid}
            onClick={sendForm}
            type="submit"
            className="subscribe__button button feedback__button"
          >
            Надіслати
          </button>
          <p id="reply"></p>
        </form>
      </div>
    </>
  );
}

export default Feedback_form;
