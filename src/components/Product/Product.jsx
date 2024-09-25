import React from "react";
import "./Product.scss";
import { Button } from "../Button/Button";
import youtubeIcon from "../svg/btn-icon-youtube.svg";
import iconProduct1 from "./svg-product/icon-product1.svg";
import logo from "./images-product1/logo.png";
import arrowRightPoduct4 from "../svg/ArrowRigth.svg";
import arrowLeftPoduct4 from "../svg/ArrowLeft.svg";

import imgProduct1 from "./images-product2/1.png";
import imgProduct2 from "./images-product2/2.png";
import imgProduct3 from "./images-product2/3.png";
import imgProduct4 from "./images-product2/4.png";
import imgProduct5 from "./images-product2/5.png";
import imgProduct6 from "./images-product2/6.png";
import imgProduct3_1 from "./images-product3/1.png";
import imgProduct3_2 from "./images-product3/2.png";
import imgProduct3_3 from "./images-product3/3.png";
import arrowRight from "../svg/arrow-right.svg";

export const Product = () => {
  return (
    <div className="product">
      <section className="product__1">
        <div className="image-container">
          <div className="image-item">
            <div className="outer-circle">
              <div className="logo-frame">
                <img src={logo} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="info">
          <div className="info__container">
            <div className="info__wrapper">
              <div className="info__wrapper-container-header">
                <div className="line-step">
                  <div className="line"></div>
                  <span className="step">01</span>
                </div>
                <span className="info__wrapper-container-header-title">
                  GIỚI THIỆU
                </span>
              </div>
              <div className="info__wrapper-content">
                <div className="info__wrapper-content-container">
                  <span className="info__about-title">
                    Về Kéo Hoàn Mỹ - HKK
                  </span>
                  <span className="info__about-description">
                    Hoàn thành thành lập năm 1989, là một trong những công ty đi
                    đầu tiên trong lĩnh vực sản xuất dây khóa tại Việt Nam. Với
                    công nghệ, hiện đại thiết bị và đồng bộ của Đức, Đài Loan
                    cùng với đội ngũ kỹ sư, nhân viên có trình độ nghiệp vụ cao,
                    sản phẩm dây kéo HKK được sản xuất theo tiêu chuẩn quốc tế
                    (ASTM D2016 : 2007, BS 3084: 2006, CNS, JIS-S 3015 ....).
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="profile">
            <div className="profile__experience-container">
              <div className="profile__background-icon">
                <img src={iconProduct1} alt="" />
              </div>
              <div className="experience-title">
                <span className="experience-title-step">+31</span>
                <span className="experience-title-label">NĂM KINH NGHIỆM</span>
              </div>
            </div>
            <div className="profile__citizens-container">
              <div className="profile__background-icon">
                <img src={iconProduct1} alt="" />
              </div>
              <span className="profile__citizens">+700</span>
              <span className="profile__label">CÔNG DÂN</span>
            </div>
            <div className="profile__distributors-container">
              <div className="profile__background-icon">
                <img src={iconProduct1} alt="" />
              </div>
              <span className="profile__distributors">+200</span>
              <span className="profile__label">NHÀ PHÂN PHỐI CHÍNH THỨC</span>
            </div>
            <div className="profile__btn-container">
              <Button icon={youtubeIcon} content="VIDEO GIỚI THIỆU" />
              <Button icon={youtubeIcon} content="TÌM HIỂU THÊM" />
            </div>
          </div>
        </div>
      </section>
      <section className="product__2">
        <div className="container">
          <div className="info">
            <div className="info__header">
              <div className="line-step">
                <div className="line"></div>
                <span className="step">02</span>
              </div>
              <span className="info__header__title">CÁC SẢN PHẨM HKK </span>
            </div>
            <span className="info__header__content">
              Biểu tượng của sự dẻo dai, bền bỉ, đại diện cho sức mạnh toàn thể
              công ty Sẵn sàng vượt qua mọi thử thách để đạt được tiêu chuẩn dài
              hạn là phát triển thương
            </span>
          </div>
          <div className="images">
            <div className="images__top-container">
              <div className="images__top-container-item">
                <div className="images__top-container-item-info">
                  <span className="images__top-container-item-info-step">
                    01
                  </span>
                  <span className="images__top-container-item-info-title">
                    NYLON ZIPPER
                  </span>
                </div>
                <img src={imgProduct1} alt="" />
              </div>
              <div className="images__top-container-item">
                <div className="images__top-container-item-info">
                  <span className="images__top-container-item-info-step">
                    02
                  </span>
                  <span className="images__top-container-item-info-title">
                    PLASTIC ZIPPER{" "}
                  </span>
                </div>
                <img src={imgProduct2} alt="" />
              </div>
              <div className="images__top-container-item">
                <img src={imgProduct3} alt="" />
                <div className="images__top-container-item-info">
                  <span className="images__top-container-item-info-step">
                    03
                  </span>
                  <span className="images__top-container-item-info-title">
                    METAL ZIPPER{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="images__bottom-container">
              <div className="images__bottom-container-item">
                <div className="images__bottom-container-item-info">
                  <span className="images__bottom-container-item-info-step">
                    04
                  </span>
                  <span className="images__bottom-container-item-info-title">
                    ZIPPER CHAIN
                  </span>
                </div>
                <img src={imgProduct4} alt="" />
              </div>
              <div className="images__bottom-container-item">
                <div className="images__bottom-container-item-info">
                  <span className="images__bottom-container-item-info-step">
                    05
                  </span>
                  <span className="images__bottom-container-item-info-title">
                    PULLER
                  </span>
                </div>
                <img src={imgProduct5} alt="" />
              </div>
              <div className="images__bottom-container-item">
                <img src={imgProduct6} alt="" />
                <div className="images__top-container-item-info">
                  <span className="images__bottom-container-item-info-step">
                    06
                  </span>
                  <span className="images__bottom-container-item-info-title">
                    SẢN PHẨM KHÁC
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product__3">
        <div className="container">
          <div className="info">
            <div className="info__header">
            <div className="line-step">
                  <div className="line"></div>
                  <span className="step">03</span>
                </div>
              <div className="tintuc-container">
                <span className="tintuc">TIN TỨC</span>
                <span className="noibat">NỔI BẬT</span>
              </div>
            </div>
          </div>
          <div className="item-container">
            <div className="wrapper">
              <div className="wrapper__item">
                <img
                  className="wrapper__item-image"
                  src={imgProduct3_1}
                  alt=""
                />
                <div className="wrapper__item-details">
                  <span className="wrapper__item-title">
                    Vị trí trưởng mang thương hiệu Việt hóa biển lớn ...
                  </span>
                  <span className="wrapper__item-content">
                    Là một trong những bước quan trọng hàng đầu để đảm bảo sự
                    thành công cho dự án, nghiên cứu thị trường là gì?, tầm quan
                    trọng của nghiên cứu...
                  </span>
                  <div className="wrapper__item-actions">
                    <span className="wrapper__item-read-more">Xem thêm</span>
                    <div className="wrapper__item-line"></div>
                  </div>
                </div>
              </div>
              <div className="wrapper__item">
                <img
                  className="wrapper__item-image"
                  src={imgProduct3_2}
                  alt=""
                />
                <div className="wrapper__item-details">
                  <span className="wrapper__item-title">
                    Vị trí trưởng mang thương hiệu Việt hóa biển lớn ...
                  </span>
                  <span className="wrapper__item-content">
                    Là một trong những bước quan trọng hàng đầu để đảm bảo sự
                    thành công cho dự án, nghiên cứu thị trường là gì?, tầm quan
                    trọng của nghiên cứu...
                  </span>
                  <div className="wrapper__item-actions">
                    <span className="wrapper__item-read-more">Xem thêm</span>
                    <div className="wrapper__item-line"></div>
                  </div>
                </div>
              </div>
              <div className="wrapper__item">
                <img
                  className="wrapper__item-image"
                  src={imgProduct3_3}
                  alt=""
                />
                <div className="wrapper__item-details">
                  <span className="wrapper__item-title">
                    Vị trí trưởng mang thương hiệu Việt hóa biển lớn ...
                  </span>
                  <span className="wrapper__item-content">
                    Là một trong những bước quan trọng hàng đầu để đảm bảo sự
                    thành công cho dự án, nghiên cứu thị trường là gì?, tầm quan
                    trọng của nghiên cứu...
                  </span>
                  <div className="wrapper__item-actions">
                    <span className="wrapper__item-read-more">Xem thêm</span>
                    <div className="wrapper__item-line"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="action-container">
              <Button icon={arrowRight} content="XEM THÊM TIN" />
            </div>
          </div>
        </div>
      </section>
      <section className="product__4">
        <div className="container">
          <div className="info">
            <div className="info-header">
              <div className="info-title-group">
              <div className="line-step">
                  <div className="line"></div>
                  <span className="step">04</span>
                </div>
                <div className="info-doitac-contaner">
                  <span className="info-doitac">ĐỐI TÁC</span>
                  <span className="info-cuahkk">CỦA HKK</span>
                </div>
              </div>
              <span className="info-partners">Partners</span>
            </div>
          </div>
          <div className="list-logo">
            <div className="list-logo-top">
              <div className="logo-item">
                <span>//Logo//</span>
              </div>
              <div className="logo-item">
                <span>//Logo//</span>
              </div>
              <div className="logo-item">
                <span>//Logo//</span>
              </div>
              <div className="logo-item">
                <span>//Logo//</span>
              </div>
            </div>
            <divc className="list-logo-bottom">
              <div className="logo-item">
                <span>//Logo//</span>
              </div>
              <div className="logo-item">
                <span>//Logo//</span>
              </div>
              <div className="logo-item">
                <span>//Logo//</span>
              </div>
              <div className="logo-item">
                <span>//Logo//</span>
              </div>
            </divc>
          </div>
          <div className="arrow-container">
            <img src={arrowLeftPoduct4} alt="" />
            <img src={arrowRightPoduct4} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};
