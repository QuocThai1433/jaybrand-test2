import React from "react";
import logo from "../../images/logo.svg";
import { navbar } from "../Json/navbar";
import "./HomePage.scss";
import facebookIcon from "../svg/homepage/icon-internet/zalo.svg";
import youtubeIcon from "../svg/homepage/icon-internet/zalo.svg";
import zaloIcon from "../svg/homepage/icon-internet/zalo.svg";
import logoutIcon from "../svg/homepage/icon-language/icon-logout.svg";
import vieIcon from "../svg/homepage/icon-language/vietnam-icon.svg";
import phoneIcon from "../svg/homepage/icon-internet/phone.svg";
import iconMenu from "../svg/icon-menu.svg";

import engIcon from "../svg/homepage/icon-language/eng.svg";
export const HomePage = () => {
  return (
    <header className="Header">
      <div className="Header__left">
        <img className="Header__logo" src={logo} alt="logo" />

        <div className="icon-menu">
          <img src={iconMenu} alt="" />
        </div>
      </div>

      <div className="Header__right">
        <div className="Header__social-login">
          <div className="Header__social-medias">
            <div className="Header__social-medias-item">
              <img
                className="Header__social-medias-item-icon"
                src={facebookIcon}
                alt="Facebook"
              />
              <span className="Header__social-medias-item-text">Facebook</span>
            </div>
            <div className="Header__social-medias-item">
              <img
                className="Header__social-medias-item-icon"
                src={youtubeIcon}
                alt="Youtube"
              />
              <span className="Header__social-medias-item-text">Youtube</span>
            </div>
            <div className="Header__social-medias-item">
              <img
                className="Header__social-medias-item-icon"
                src={zaloIcon}
                alt="Zalo"
              />
              <span className="Header__social-medias-item-text">Zalo</span>
            </div>
          </div>

          <div className="Header__social-login-separator"></div>

          <div className="Header__login-language">
            <div className="Header__login-action">
              <img
                className="Header__login-action-icon"
                src={logoutIcon}
                alt="login"
              />
              <span className="Header__login-action-text">ĐĂNG NHẬP</span>
            </div>
            <div className="Header__language-container">
              <img
                className="Header__language-item"
                src={vieIcon}
                alt="vn"
              ></img>
              <img
                className="Header__language-item"
                src={engIcon}
                alt="us"
              ></img>
            </div>
          </div>
        </div>

        <div className="Header__navigation">
          <div className="Header__navbar">
            <div className="Header__navbar-item">
              {navbar.map((item) => (
                <span>{item.name}</span>
              ))}

              <img
                className="Header__search-icon"
                src={phoneIcon}
                alt="search"
              />
            </div>
          </div>

          <div className="Header__hotline">
            <div className="Header__hotline-image-wrapper">
              <div className="Header__hotline-image">
                <img className="  " src={phoneIcon} alt="" />
              </div>
            </div>
            <div className="Header__hotline-separate"></div>

            <div className="Header__hotline-info">
              <span className="Header__hotline-info-text">HOTLINE</span>
              <span className="Header__hotline-info-number">0912.345.678</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
