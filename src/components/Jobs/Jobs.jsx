import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CustomSlider.scss"; // Đảm bảo bạn đã có file CSS tùy chỉnh này
import AwholeWord from "./AwholeWord";
import DesignImg from "../../../public/img/logo-design.png";
import SeoImg from "../../../public/img/seo.png";
import ChevronRight from "../MadeOnFiverr/Arrow/ChevronRight";
import ChevronLeft from "../MadeOnFiverr/Arrow/ChevronLeft";

const styleArrowRight = {
  position: "absolute",
  right: "15px",
  top: "50%",
  backgroundColor: "#fff",
  padding: "12px",
  borderRadius: "50%",
  border: "1px solid #d0cdcd",
};
const styleArrowLeft = {
  position: "absolute",
  left: "15px",
  top: "50%",
  backgroundColor: "#fff",
  padding: "12px",
  borderRadius: "50%",
  border: "1px solid #d0cdcd",
  zIndex: "2",
};

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="cursor-pointer hover:bg-slate-500"
      style={styleArrowRight}
      onClick={onClick}
    >
      <ChevronRight height={"15px"} width={"15px"} />
    </div>
  );
}
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="cursor-pointer hover:bg-slate-500"
      style={styleArrowLeft}
      onClick={onClick}
    >
      <ChevronLeft width={"15px"} height={"15px"} />
    </div>
  );
}

const Jobs = () => {
  const settings = {
    infinite: true,
    slidesToShow: 6, // Hiển thị 5 ảnh cùng lúc
    slidesToScroll: 2, // Cuộn 1 ảnh mỗi lần
    centerMode: false, // Đảm bảo ảnh không bị kéo về giữa
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    variableWidth: false, // Đảm bảo chiều rộng ảnh đồng đều
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      // {
      //   breakpoint: 450,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //     initialSlide: 2,
      //   },
      // },
    ],
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
                  src={DesignImg}
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
                <img src={SeoImg} alt="" className="w-full h-auto rounded-lg" />
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
