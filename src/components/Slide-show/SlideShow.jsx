import React, { useState } from "react";
import "./SlideShow.scss";
import arrowRight from "../svg/arrow-right.svg";
import { Button } from "../Button/Button";
import arrowRightSlide from "./svg/aright-row.svg";
import arrowLeftSlide from "./svg/left-row.svg";
export const SlideShow = () => {
  const [activePoint, setActivePoint] = useState(2);

  const handleMouseHover = () => {
    setActivePoint(-1);
  };

  const handleMouseLeave = () => {
    setActivePoint(2);
  };

  return (
    <div className="slide-show">
      <div className="slide-show__title">
        <label>CHÀO MỪNG ĐẾN VỚI</label>
        <span>KHÓA KÉO HOÀN MỸ - HKK</span>
        <p className="content">
          Thương hiệu dây khoá kéo HKK của Công ty TNHH Khóa kéo Hoàn Mỹ (HKK)
          đã gia nhập hàng loạt thị trường vốn được đánh giá là khó tính trong
          khu vực và trên thế giới. Chặng đường 31 năm của thương hiệu này là
          một hành trình nỗ lực không ngừng, với quyết tâm và tầm nhìn của những
          người lèo lái "con thuyền" HKK vươn ra biển lớn.
        </p>

        <Button icon={arrowRight} content="Tìm Hiểu Thêm" />
      </div>
      <div
        className="slide-show__points"
        onMouseEnter={handleMouseHover}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`point ${activePoint === 0 ? "point-active" : ""}`}
        ></div>
        <div
          className={`point ${activePoint === 1 ? "point-active" : ""}`}
        ></div>
        <div
          className={`point ${activePoint === 2 ? "point-active" : ""}`}
        ></div>
        <div
          className={`point ${activePoint === 3 ? "point-active" : ""}`}
        ></div>
        <div
          className={`point ${activePoint === 4 ? "point-active" : ""}`}
        ></div>
      </div>
      <div className="arrow-container">
        <img src={arrowLeftSlide} alt="" />
        <img src={arrowRightSlide} alt="" />
      </div>
    </div>
  );
};
