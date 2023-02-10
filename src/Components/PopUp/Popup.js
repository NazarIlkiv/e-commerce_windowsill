import React from "react";
import "../Styles/App.css";
import "./popup.css";

function Popup({ active, setActive, children }) {
  return (
    <div
      className={active ? "popup__body active" : "popup__body"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "popup__content active" : "popup__content"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default Popup;
