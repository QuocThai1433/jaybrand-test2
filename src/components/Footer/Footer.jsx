import React from "react";
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";
import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="container__left">
          <span className="footer__company-name">
            CÔNG TY TNHH KHOÁ KÉO HOÀN MỸ
          </span>
          <div className="footer__office">
            <span className="footer__office-title">VĂN PHÒNG CHÍNH</span>
            <span className="footer__office-address">
              455 NGUYỄN ĐÌNH CHIỂU, PHƯỜNG 5, QUẬN 3, TP.HCM
            </span>
            <span className="footer__office-contact">
              028.3839.6231 – Fax: 028.3839.6235
            </span>
          </div>
          <div className="footer__factory">
            <span className="footer__factory-title">
              NHÀ MÁY HKK – Tân Uyên:
            </span>
            <span className="footer__factory-address">
              Đường DT747, Khu phố 7, P. Uyên Hưng, TX. Tân Uyên, Tỉnh Bình
              Dương
            </span>
          </div>
        </div>
        <div className="container__center">
          <span className="footer__quick-links">
            <span>Liên kết nhanh:</span>
            <ul>
              <li>Chính sách và Quy định chung</li>
              <li>Chính sách bảo mật</li>
              <li>Sản phẩm</li>
              <li>Hỗ trợ kỹ thuật</li>
            </ul>
          </span>
        </div>
        <div className="container__right">
          <img className="container__right-image" src={img1} alt="Logo 1" />
          <img className="container__right-image" src={img2} alt="Logo 2" />
          <img className="container__right-image" src={img3} alt="Logo 3" />
        </div>
      </div>
    </div>
  );
};
