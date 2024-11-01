import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import GuideBanner from "../../assets/Img/Guides-Banner.png";
import { pathDefault } from "../../common/path.js";
import { Carousel } from "antd";
import GuideItem1 from "../../assets/Img/guide-item1.png";
import GuideItem2 from "../../assets/Img/guide-item2.png";
import GuideItem3 from "../../assets/Img/guide-item3.png";
import GuideItem4 from "../../assets/Img/guide-item4.png";
import GuideItem5 from "../../assets/Img/guide-item5.png";
import Mof1 from "../../assets/Img/mof11.png";
import Mof2 from "../../assets/Img/mof2.png";
import Mof3 from "../../assets/Img/mof3.png";
import Mof4 from "../../assets/Img/mof4.png";
import Mof5 from "../../assets/Img/mof5.png";
import Mof6 from "../../assets/Img/mof6.png";
import Mof7 from "../../assets/Img/mof7.png";
import Mof8 from "../../assets/Img/mof8.png";
import Mof9 from "../../assets/Img/mof9.png";
import Mof10 from "../../assets/Img/mof10.png";
import Mof12 from "../../assets/Img/mof12.png";
import Mof13 from "../../assets/Img/mof13.png";
import Mof14 from "../../assets/Img/mof14.png";
import Mof15 from "../../assets/Img/mof15.png";
import Slider from "react-slick";
import ChevronRight from "./Arrow/ChevronRight.jsx";
import ChevronLeft from "./Arrow/ChevronLeft.jsx";

const MadeOnFiverr = () => {
  const contentStyle = {
    margin: 0,
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  const styleArrowRight = {
    position: "absolute",
    right: "20px",
    top: "50%",
    backgroundColor: "#fff",
    padding: "12px",
    borderRadius: "50%",
  };
  const styleArrowLeft = {
    position: "absolute",
    left: "20px",
    top: "50%",
    backgroundColor: "#fff",
    padding: "12px",
    borderRadius: "50%",
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
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="container mx-auto px-2 my-3 pb-10 ">
      <h2
        className="mx-3 mt-5 mb-3"
        style={{ fontWeight: 600, fontSize: "45px" }}
      >
        Made on Fiverr
      </h2>
      {/* layout */}
      <div className="grid grid-cols-4 gap-3">
        <div className="">
          <div className="items">
            <div className="child_items flex items-end">
              <div className="child_items_content">
                <p style={{ fontWeight: 500, color: "#fff" }}>
                  Feature in: Logo Design
                </p>
                <span style={{ fontWeight: 500, color: "#fff" }} className="">
                  by: armisbahuddin
                </span>
              </div>
            </div>
            <img src={Mof1} alt="" />
          </div>
          <div className="items">
            <div className="child_items flex items-end">
              <div className="child_items_content">
                <p style={{ fontWeight: 500, color: "#fff" }}>
                  Feature in: Logo Design
                </p>
                <span style={{ fontWeight: 500, color: "#fff" }} className="">
                  by: janellechoi
                </span>
              </div>
            </div>
            <img src={Mof2} alt="" />
          </div>
          <div className="items">
            <div className="child_items flex items-end">
              <div className="child_items_content">
                <p style={{ fontWeight: 500, color: "#fff" }}>
                  Feature in: Logo Design
                </p>
                <span style={{ fontWeight: 500, color: "#fff" }} className="">
                  by: armisbahuddin
                </span>
              </div>
            </div>
            <img src={Mof3} alt="" />
          </div>
          <div className="items">
            <div className="child_items flex items-end">
              <div className="child_items_content">
                <p style={{ fontWeight: 500, color: "#fff" }}>
                  Feature in: Logo Design
                </p>
                <span style={{ fontWeight: 500, color: "#fff" }} className="">
                  by: janellechoi
                </span>
              </div>
            </div>
            <img src={Mof7} alt="" />
          </div>
          <div className="items">
            <div className="child_items flex items-end">
              <div className="child_items_content">
                <p style={{ fontWeight: 500, color: "#fff" }}>
                  Feature in: Logo Design
                </p>
                <span style={{ fontWeight: 500, color: "#fff" }} className="">
                  by: armisbahuddin
                </span>
              </div>
            </div>
            <img src={Mof15} alt="" />
          </div>
        </div>
        <div className="">
          <div className="items">
            <div className="child_items flex items-end">
              <div className="child_items_content">
                <p style={{ fontWeight: 500, color: "#fff" }}>
                  Feature in: Logo Design
                </p>
                <span style={{ fontWeight: 500, color: "#fff" }} className="">
                  by: janellechoi
                </span>
              </div>
            </div>
            <img src={Mof4} alt="" />
          </div>
          <div className="items">
            <div className="child_items flex items-end">
              <div className="child_items_content">
                <p style={{ fontWeight: 500, color: "#fff" }}>
                  Feature in: Logo Design
                </p>
                <span style={{ fontWeight: 500, color: "#fff" }} className="">
                  by: dynamostudioo
                </span>
              </div>
            </div>
            <img src={Mof6} alt="" />
          </div>
          <div className="items">
            <div className="child_items flex items-end">
              <div className="child_items_content">
                <p style={{ fontWeight: 500, color: "#fff" }}>
                  Feature in: Logo Design
                </p>
                <span style={{ fontWeight: 500, color: "#fff" }} className="">
                  by: janellechoi
                </span>
              </div>
            </div>
            <img src={Mof8} alt="" />
          </div>
          <div className="items">
            <div className="child_items flex items-end">
              <div className="child_items_content">
                <p style={{ fontWeight: 500, color: "#fff" }}>
                  Feature in: Logo Design
                </p>
                <span style={{ fontWeight: 500, color: "#fff" }} className="">
                  by: dynamostudioo
                </span>
              </div>
            </div>
            <img src={Mof14} alt="" />
          </div>
        </div>
        <div className="">
          <div className="items">
            <div className="child_items flex items-end">
              <div className="child_items_content">
                <p style={{ fontWeight: 500, color: "#fff" }}>
                  Feature in: Logo Design
                </p>
                <span style={{ fontWeight: 500, color: "#fff" }} className="">
                  by: dynamostudioo
                </span>
              </div>
            </div>
            <img src={Mof9} alt="" />
          </div>
          <div className="items">
            <div className="child_items flex items-end">
              <div className="child_items_content">
                <p style={{ fontWeight: 500, color: "#fff" }}>
                  Feature in: Logo Design
                </p>
                <span style={{ fontWeight: 500, color: "#fff" }} className="">
                  by: dynamostudioo
                </span>
              </div>
            </div>
            <img src={Mof5} alt="" />
          </div>
          <div className="items">
            <div className="child_items flex items-end">
              <div className="child_items_content">
                <p style={{ fontWeight: 500, color: "#fff" }}>
                  Feature in: Logo Design
                </p>
                <span style={{ fontWeight: 500, color: "#fff" }} className="">
                  by: dynamostudioo
                </span>
              </div>
            </div>
            <img src={Mof4} alt="" />
          </div>
        </div>
        <div className="">
          <div className="items">
            <div className="child_items flex items-end">
              <div className="child_items_content">
                <p style={{ fontWeight: 500, color: "#fff" }}>
                  Feature in: Logo Design
                </p>
                <span style={{ fontWeight: 500, color: "#fff" }} className="">
                  by: dynamostudioo
                </span>
              </div>
            </div>
            <img src={Mof10} alt="" />
          </div>
          <div className="items">
            <div className="child_items flex items-end">
              <div className="child_items_content">
                <p style={{ fontWeight: 500, color: "#fff" }}>
                  Feature in: Logo Design
                </p>
                <span style={{ fontWeight: 500, color: "#fff" }} className="">
                  by: MacAnhHao
                </span>
              </div>
            </div>
            <img src={Mof13} alt="" />
          </div>
          <div className="items">
            <div className="child_items flex items-end">
              <div className="child_items_content">
                <p style={{ fontWeight: 500, color: "#fff" }}>
                  Feature in: Logo Design
                </p>
                <span style={{ fontWeight: 500, color: "#fff" }} className="">
                  by: LeNhatQuy
                </span>
              </div>
            </div>
            <img src={Mof12} alt="" />
          </div>
        </div>
      </div>
      {/* Guides */}

      <div className="guides py-8 slider-container">
        <div className="py-5 my-3">
          <h3 style={{ fontSize: "45px", fontWeight: 600 }}>
            Guides to help you grow
          </h3>
        </div>
        <Slider {...settings}>
          <div className="slide">
            <a href="">
              <div className="">
                <img src={GuideItem1} alt="" />
              </div>
              <span>Start a side business</span>
            </a>
          </div>
          <div className="slide">
            <a href="">
              <div>
                <img src={GuideItem2} alt="" />
              </div>
              <span>Ecommerce business ideas</span>
            </a>
          </div>
          <div className="slide">
            <a href="">
              <div className="">
                <img src={GuideItem3} alt="" />
              </div>
              <span>Start an online business and work from home</span>
            </a>
          </div>
          <div className="slide">
            <a href="">
              <div className="">
                <img src={GuideItem4} alt="" />
              </div>
              <span>Build a website from scratch</span>
            </a>
          </div>
          <div className="slide">
            <a href="">
              <div className="">
                <img src={GuideItem5} alt="" />
              </div>
              <span>Grow your business with AI</span>
            </a>
          </div>
        </Slider>
      </div>
      {/* guides banner */}
      <div className="guides_banner py-6">
        <div className=""></div>
        <div
          className="w-full flex justify-center items-end "
          style={{
            backgroundImage: `url(${GuideBanner})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "276px",
          }}
        >
          <div className=""></div>
          <div className="mb-8" style={{}}>
            <Link
              to={pathDefault.login}
              style={{
                backgroundColor: "#fff",
                color: "#222325",
                fontWeight: 600,
              }}
              className="py-3 px-5 rounded-lg hover:bg-gray-300 hover:opacity-90"
            >
              Join Fiverr
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MadeOnFiverr;
