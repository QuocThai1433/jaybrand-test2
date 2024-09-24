import React from "react";
import "./Button.scss";

export const Button = ({ icon, content }) => {
  return (
    <div className="btn">
      <div className="btn__content">
        <img src={icon} alt="icon" />
        <p>{content}</p>
      </div>
      <div className="btn__back-ground"></div>
    </div>
  );
};
