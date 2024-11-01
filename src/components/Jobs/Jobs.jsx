import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CustomSlider.scss"; // Đảm bảo bạn đã có file CSS tùy chỉnh này
import AwholeWord from "./AwholeWord";

const PreviousArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} `}
      style={{ ...style, display: "block", right: "25px", zIndex: 1 }}
      onClick={onClick}
    >
      <i className="fa fa-chevron-left "></i>
    </div>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className}`}
      style={{ ...style, display: "block", right: "10px", zIndex: 1 }}
      onClick={onClick}
    >
      <i className="fa fa-chevron-right"></i>
    </div>
  );
};

const Jobs = () => {
  const settings = {
    infinite: true,
    slidesToShow: 6, // Hiển thị 5 ảnh cùng lúc
    slidesToScroll: 2, // Cuộn 1 ảnh mỗi lần
    centerMode: false, // Đảm bảo ảnh không bị kéo về giữa
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
    variableWidth: false, // Đảm bảo chiều rộng ảnh đồng đều
  };

  return (
    <div className="my-4 space-y-8 container mx-auto px-2">
      <div>
        <h2 className="text-5xl font-medium">Popular services</h2>
      </div>
      <div className="slider-wrapper text-xl font-medium text-white  ">
        <Slider {...settings}>
          <div className="slider-item">
            <div className="customeborder bg-green-600 hover:opacity-90 ">
              <a href="">
                <h2 className="text ">Website development</h2>
                <img
                  src="/img/website-development.png"
                  alt=""
                  className="w-full h-auto rounded-lg"
                />
              </a>
            </div>
          </div>

          {/* 2   */}
          <div className="slider-item">
            <div className="customeborder Pr8Nkbn hover:opacity-90 ">
              <a href="">
                <h2 className="text pb-7">Logo Design </h2>
                <img
                  src="../../../public/img/logo-design.png"
                  alt=""
                  className="w-full h-auto rounded-lg"
                />
              </a>
            </div>
          </div>

          {/* 3 */}

          <div className="slider-item">
            <div className="customeborder tLUiXHr  hover:opacity-90 ">
              <a href="">
                <h2 className="pb-7 text">SEO</h2>
                <img
                  src="../../../public/img/seo.png"
                  alt=""
                  className="w-full h-auto rounded-lg"
                />
              </a>
            </div>
          </div>

          {/* 4 */}
          <div className="slider-item">
            <div className="customeborder bg-pink-900 hover:opacity-90 ">
              <a href="">
                <h2 className="text ">Architecture & Interior Design</h2>
                <img
                  src="/img/architecture-design.png"
                  alt=""
                  className="w-full h-auto rounded-lg"
                />
              </a>
            </div>
          </div>

          {/* 5 */}
          <div className="slider-item">
            <div className="customeborder colorimg5 hover:opacity-90 ">
              <a href="">
                <h2 className="text">Social Media Marketing</h2>
                <img
                  src="/img/social-media-marketing.png"
                  alt=""
                  className="w-full h-auto rounded-lg"
                />
              </a>
            </div>
          </div>

          {/* 6 */}
          <div className="slider-item">
            <div className="customeborder colorimg6 hover:opacity-90 ">
              <a href="">
                <h2 className="pb-7 text">Voice Over</h2>
                <img
                  src="/img/voice-over.png"
                  alt=""
                  className="w-full h-auto rounded-lg"
                />
              </a>
            </div>
          </div>
          {/* 7 */}
          <div className="slider-item">
            <div className="customeborder colorimg7 hover:opacity-90 ">
              <a href="">
                <h2 className="text">Software Development</h2>
                <img
                  src="/img/software-development.png"
                  alt=""
                  className="w-full h-auto rounded-lg"
                />
              </a>
            </div>
          </div>
          {/* 8 */}
          <div className="slider-item">
            <div className="customeborder bg-red-700 hover:opacity-90 ">
              <a href="">
                <h2 className=" text">Data Science & ML</h2>
                <img
                  src="/img/data-science.png"
                  alt=""
                  className="w-full h-auto rounded-lg"
                />
              </a>
            </div>
          </div>
          {/* 9 */}
          <div className="slider-item">
            <div className="customeborder colorimg9 hover:opacity-90 ">
              <a href="">
                <h2 className="text ">Product Photography</h2>
                <img
                  src="/img/product-photography.png"
                  alt=""
                  className="w-full h-auto rounded-lg"
                />
              </a>
            </div>
          </div>
          {/* 10 */}
          <div className="slider-item">
            <div className="customeborder bg-green-500 hover:opacity-90 ">
              <a href="">
                <h2 className="text">E-Commerce Marketing</h2>
                <img
                  src="/img/e-commerce.png"
                  alt=""
                  className="w-full h-auto rounded-lg"
                />
              </a>
            </div>
          </div>
          {/* 11 */}
          <div className="slider-item">
            <div className="customeborder bg-pink-700 hover:opacity-90 ">
              <a href="">
                <h2 className="pb-7 text">Video Editing</h2>
                <img
                  src="/img/video-editing.png"
                  alt=""
                  className="w-full h-auto rounded-lg"
                />
              </a>
            </div>
          </div>
        </Slider>
      </div>
      <AwholeWord />
    </div>
  );
};

export default Jobs;
