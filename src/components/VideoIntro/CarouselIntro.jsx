import React, { useState } from "react";
import { Modal } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Intro.scss";

const contentStyle = {
  height: "auto",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "",
  margin: "0 10px",
};

const CarouselIntro = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // custom arrow
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          left: "",
          right: "20px",
          display: "block",
          fontSize: "15px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          right: "",
          left: "20px",
          zIndex: "10",
          // background: "white",
          // padding: "10px",
          fontSize: "15px",
          // borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }

  // Cấu hình cho slick carousel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <div>
        <h2 className="text-5xl font-semibold my-16 fonttest">
          What they're saying about Fiverr
        </h2>
      </div>
      <div className="bg-white rounded-lg mx-4">
        <Slider {...settings}>
          <div>
            <div className="flex justify-between" style={contentStyle}>
              <div className="w-1/2 relative">
                <div
                  className="relative cursor-pointer"
                  onClick={showModal}
                  style={{ width: "100%", height: "100%" }}
                >
                  <img
                    src="/img/desktop.png"
                    className="w-20 top-44 right-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 absolute"
                    alt="Desktop"
                  />
                  <img
                    className="rounded-lg"
                    src="/img/testimonial-video-still-naadam.jpg"
                    alt="Testimonial"
                  />
                </div>
                <Modal
                  className="custom-modal"
                  width={1000}
                  title=""
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={null}
                >
                  <video
                    src="/img/plfa.mp4"
                    autoPlay
                    className="video-modal"
                    controls
                    role="video"
                    preload="auto"
                    crossOrigin="anonymous"
                    muted
                    style={{ width: "100%", height: "100%" }}
                  ></video>
                </Modal>
              </div>
              <div className="w-1/2">
                <div>
                  <h2 className="text-gray-400 fonttext2 text-2xl text-start my-8 font-extralight">
                    Caitlin Tormey, Chief Commercial Officer{" "}
                    <span className="pl-9 font-semibold">NAADAM</span>
                  </h2>
                  <p className="fonttest text-black text-3xl text-start">
                    "We've used Fiverr for Shopify web development, <br />{" "}
                    graphic design, and backend web development. <br /> Working
                    with Fiverr makes my job a little easier <br /> every day."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2 */}

          <div>
            <div className="flex justify-between" style={contentStyle}>
              <div className="w-1/2 relative">
                <div
                  className="relative cursor-pointer"
                  onClick={showModal}
                  style={{ width: "100%", height: "100%" }}
                >
                  <img
                    src="/img/desktop.png"
                    className="w-20 top-44 right-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 absolute"
                    alt="Desktop"
                  />
                  <img
                    className="rounded-lg"
                    src="/img/testi.jpg"
                    alt="Testimonial"
                  />
                </div>
                <Modal
                  className="custom-modal"
                  width={1000}
                  title=""
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={null}
                >
                  <video
                    src="../../../public/img/plfa.mp4"
                    autoPlay
                    className="video-modal"
                    controls
                    role="video"
                    preload="auto"
                    crossOrigin="anonymous"
                    muted
                    style={{ width: "100%", height: "100%" }}
                  ></video>
                </Modal>
              </div>

              {/* 3 */}

              <div className="w-1/2">
                <div>
                  <h2 className=" fonttext2 text-gray-400  text-2xl text-start my-8 font-thin">
                    Brighid Gannon (DNP, PMHNP-BC), Co-Founder
                    <span className="inline-block customeroot">
                      <img
                        src="../../../public/img/lavender-logo-x2.3fff9e7.png"
                        alt=""
                      />
                    </span>
                  </h2>
                  <p className=" fonttest text-black text-3xl text-start">
                    "We used Fiverr for SEO, our logo, website, copy, <br />{" "}
                    animated videos — literally everything. It was like <br />{" "}
                    working with a human right next to you versus being <br />{" "}
                    across the world."
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between" style={contentStyle}>
              <div className="w-1/2 relative">
                <div
                  className="relative cursor-pointer"
                  onClick={showModal}
                  style={{ width: "100%", height: "100%" }}
                >
                  <img
                    src="/img/desktop.png"
                    className="w-20 top-44 right-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 absolute"
                    alt="Desktop"
                  />
                  <img
                    className="rounded-lg"
                    src="../../../public/img/still-rooted.jpg"
                    alt="Testimonial"
                  />
                </div>
                <Modal
                  className="custom-modal"
                  width={1000}
                  title=""
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={null}
                >
                  <video
                    src="../../../public/img/plfa.mp4"
                    autoPlay
                    className="video-modal"
                    controls
                    role="video"
                    preload="auto"
                    crossOrigin="anonymous"
                    muted
                    style={{ width: "100%", height: "100%" }}
                  ></video>
                </Modal>
              </div>
              <div className="w-1/2">
                <div>
                  <h2 className="text-gray-400 fonttext2 text-2xl text-start my-8 font-extralight">
                    Kay Kim, Co-Founder
                    <span className="inline-block customeroot pl-6 ">
                      <img src="/img/rooted-logo-x2.7da3bc9.png" alt="" />
                    </span>
                  </h2>
                  <p className="fonttest text-black text-3xl text-start">
                    "It's extremely exciting that Fiverr has freelancers <br />{" "}
                    from all over the world — it broadens the talent pool.{" "}
                    <br /> One of the best things about Fiverr is that while
                    we're <br /> sleeping, someone's working."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 4 */}
          <div>
            <div className="flex justify-between" style={contentStyle}>
              <div className="w-1/2 relative">
                <div
                  className="relative cursor-pointer"
                  onClick={showModal}
                  style={{ width: "100%", height: "100%" }}
                >
                  <img
                    src="/img/desktop.png"
                    className="w-20 top-44 right-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 absolute"
                    alt="Desktop"
                  />
                  <img
                    className="rounded-lg"
                    src="/img/haerfest.jpg"
                    alt="Testimonial"
                  />
                </div>
                <Modal
                  className="custom-modal"
                  width={1000}
                  title=""
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={null}
                >
                  <video
                    src="/img/plfa.mp4"
                    autoPlay
                    className="video-modal"
                    controls
                    role="video"
                    preload="auto"
                    crossOrigin="anonymous"
                    muted
                    style={{ width: "100%", height: "100%" }}
                  ></video>
                </Modal>
              </div>

              <div className="w-1/2 mr-8">
                <div>
                  <h5 className=" fonttext2 text-gray-400 relative text-2xl text-start my-8 font-extralight">
                    Tim and Dan Joo, Co-Founders
                    <p className=" inline-block absolute  -top-2 right-36  font-semibold ">
                      <img
                        width={230}
                        src="/img/haerfest-logo-x2.934ab63.png"
                        alt=""
                      />
                    </p>
                  </h5>
                  <p className="fonttest text-black  text-3xl text-start leading-normal">
                    "When you want to create a business bigger than <br />{" "}
                    yourself, you need a lot of help. That's what Fiverr <br />{" "}
                    does."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CarouselIntro;
