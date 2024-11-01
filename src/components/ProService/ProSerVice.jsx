import React from "react";
import "./style.scss";
import Slider from "react-slick";
import BannerConnect from "../../assets/Img/bannerConnect1.png";
import connectImg from "../../assets/Img/connectImg.png";
import processImg1 from "../../assets/Img/processImg1.png";
import processImg2 from "../../assets/Img/processImg2.png";
import processImg3 from "../../assets/Img/processImg3.png";
import processImg4 from "../../assets/Img/processImg4.png";
import benefitsImg1 from "../../assets/Img/benefitsImg11.png";
import benefitsImg2 from "../../assets/Img/benefitsImg2.png";
import benefitsImg3 from "../../assets/Img/benefitsImg3.png";
import benefitsImg4 from "../../assets/Img/benefitsImg4.png";
import benefitsImg5 from "../../assets/Img/benefitsImg5.png";
import benefitsImg6 from "../../assets/Img/benefitsImg6.png";
import checkImg from "../../assets/Img/checkImg.png";
import proStories1 from "../../assets/Img/prostoriesImg1.png";
import proStories2 from "../../assets/Img/prostoriesImg2.png";
import proStories3 from "../../assets/Img/prostoriesImg3.png";

const ProSerVice = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      {/* Banner */}
      <div
        className="banner_connect  "
        style={{
          backgroundColor: "#003912",
          height: "450px",
        }}
      >
        <div className="container mx-auto px-2 flex items-center justify-around py-5">
          <div className="text-white space-y-5">
            <h1>
              <div className="">
                <p style={{ fontWeight: 600, fontSize: "39px" }}>
                  Connect with clients
                </p>
                <p style={{ fontWeight: 600, fontSize: "39px" }}>
                  in your <em>league</em>
                </p>
              </div>
            </h1>
            <p style={{ fontSize: "20px" }}>
              Fiverr Pro is the place for top-tier, vetted freelancers to <br />{" "}
              advance their careers and access exclusive opportunities.
            </p>
            <button
              className="text-black bg-white py-3 px-3 rounded-xl hover:bg-opacity-90"
              style={{ fontWeight: 600 }}
            >
              Submit your application
            </button>
          </div>
          <div className="">
            <img src={connectImg} alt="" />
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="benefits container max-w-[1110px] mx-auto px-2 ">
        <div className="py-16 px-6">
          <div className="pt-3 pb-9">
            <h3
              className="text-center"
              style={{ fontSize: "28px", fontWeight: 600 }}
            >
              Bring on the benefits
            </h3>
          </div>
          <div className="text-center flex justify-center space-x-3 pt-3 pb-9">
            <div className="w-1/3">
              <div className="flex justify-center">
                <img
                  src={benefitsImg1}
                  className=""
                  style={{ backgroundColor: "" }}
                  alt=""
                />
              </div>
              <div className="mt-5">
                <span
                  className=""
                  style={{ fontWeight: 600, fontSize: "18px" }}
                >
                  Pro badge
                </span>
                <p className="mt-3" style={{ color: "#62646a" }}>
                  Stand out with a blue Pro badge on your profile and services,
                  signifying your vetted status on Fiverr.
                </p>
              </div>
            </div>
            <div className="w-1/3">
              <div className="flex justify-center">
                <img src={benefitsImg2} alt="" />
              </div>
              <div className="mt-6">
                <span
                  className=""
                  style={{ fontWeight: 600, fontSize: "18px" }}
                >
                  Access to premium clients
                </span>
                <p className="mt-3" style={{ color: "#62646a" }}>
                  Take your place in a curated Pro catalog. Connect with clients
                  looking for bigger, ongoing projects.
                </p>
              </div>
            </div>
            <div className="w-1/3">
              <div className="flex justify-center">
                <img src={benefitsImg3} alt="" />
              </div>
              <div className="mt-5">
                <span
                  className=""
                  style={{ fontWeight: 600, fontSize: "18px" }}
                >
                  Get paid by the hour
                </span>
                <p className="mt-3" style={{ color: "#62646a" }}>
                  Expand your offerings to support flexible project scopes and
                  build ongoing, long-term relationships.
                </p>
              </div>
            </div>
          </div>
          <div className="flex text-center justify-center space-x-3 pt-5 pb-9">
            <div className="w-1/3">
              <div className="flex justify-center">
                <img src={benefitsImg4} alt="" />
              </div>
              <div className="mt-5">
                <span
                  className=""
                  style={{ fontWeight: 600, fontSize: "18px" }}
                >
                  Onboarding support
                </span>
                <p className="mt-3" style={{ color: "#62646a" }}>
                  Kickstart your Pro journey with a dedicated session where
                  we’ll go over expectations, benefits, and tips to work
                  effectively with business clients.
                </p>
              </div>
            </div>
            <div className="w-1/3">
              <div className="flex justify-center">
                <img src={benefitsImg5} alt="" />
              </div>
              <div className="mt-5">
                <span
                  className=""
                  style={{ fontWeight: 600, fontSize: "18px" }}
                >
                  Exclusive community
                </span>
                <p className="mt-3" style={{ color: "#62646a" }}>
                  Join our Pro-only hub for strategic partnerships, upskilling
                  opportunities, and perks.
                </p>
              </div>
            </div>
            <div className="w-1/3">
              <div className="flex justify-center">
                <img src={benefitsImg6} alt="" />
              </div>
              <div className="mt-5">
                <span
                  className=""
                  style={{ fontWeight: 600, fontSize: "18px" }}
                >
                  Customer protection
                </span>
                <p className="mt-3" style={{ color: "#62646a" }}>
                  We have your back. If a Pro client is unsatisfied and cancels
                  an order, you’ll still get paid within 14 days*.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Process */}
      <div
        className="flex justify-center items-center"
        style={{ backgroundColor: "rgb(255 245 248)", height: "567px" }}
      >
        <div
          className="max-w-[1200px] px-[63px] py-[50px] bg-white rounded-xl"
          style={{ borderTop: "6px solid #003912" }}
        >
          <div className="">
            <h3
              className="text-center"
              style={{ fontSize: "25px", fontWeight: 700 }}
            >
              The application process
            </h3>
            <p className="text-center mt-5" style={{ color: "#74767E" }}>
              To pass the Pro test, freelancers undergo a multi-stage process
              which includes hand-vetting by our Talent Evaluators.
            </p>
          </div>
          <div className="flex justify-around mt-6">
            <div className="w-1/4">
              <img src={processImg1} alt="" />
            </div>
            <div className="w-1/4">
              <img src={processImg2} alt="" />
            </div>
            <div className="w-1/4">
              <img src={processImg3} alt="" />
            </div>
            <div className="w-1/4">
              <img src={processImg4} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* how we vet */}
      <div className="container py-16 mx-auto px-2 max-w-[1110px]">
        <div className="">
          <h3
            className="text-center pb-10"
            style={{ fontWeight: 600, fontSize: "28px" }}
          >
            Here’s how we vet freelancers
          </h3>
        </div>
        <div className="flex space-x-3">
          <div className="w-1/3">
            <div className="flex justify-center">
              <img src={checkImg} alt="" />
            </div>
            <div className="text-center">
              <span className="" style={{ fontSize: "16px", fontWeight: 600 }}>
                Skills & expertise
              </span>
              <p style={{ fontSize: "15px", color: "#62646a" }}>
                Significant experience working in relevant Pro fields
              </p>
            </div>
          </div>
          <div className="w-1/3">
            <div className="flex justify-center">
              <img src={checkImg} alt="" />
            </div>
            <div className="text-center">
              <span className="" style={{ fontSize: "16px", fontWeight: 600 }}>
                Skills & expertise
              </span>
              <p style={{ fontSize: "15px", color: "#62646a" }}>
                Significant experience working in relevant Pro fields
              </p>
            </div>
          </div>
          <div className="w-1/3">
            <div className="flex justify-center">
              <img src={checkImg} alt="" />
            </div>
            <div className="text-center">
              <span className="" style={{ fontSize: "16px", fontWeight: 600 }}>
                Skills & expertise
              </span>
              <p style={{ fontSize: "15px", color: "#62646a" }}>
                Significant experience working in relevant Pro fields
              </p>
            </div>
          </div>
        </div>
        <div className="flex space-x-3 pt-16">
          <div className="w-1/3">
            <div className="flex justify-center">
              <img src={checkImg} alt="" />
            </div>
            <div className="text-center">
              <span className="" style={{ fontSize: "16px", fontWeight: 600 }}>
                Skills & expertise
              </span>
              <p style={{ fontSize: "15px", color: "#62646a" }}>
                Significant experience working in relevant Pro fields
              </p>
            </div>
          </div>
          <div className="w-1/3">
            <div className="flex justify-center">
              <img src={checkImg} alt="" />
            </div>
            <div className="text-center">
              <span className="" style={{ fontSize: "16px", fontWeight: 600 }}>
                Skills & expertise
              </span>
              <p style={{ fontSize: "15px", color: "#62646a" }}>
                Significant experience working in relevant Pro fields
              </p>
            </div>
          </div>
          <div className="w-1/3">
            <div className="flex justify-center">
              <img src={checkImg} alt="" />
            </div>
            <div className="text-center">
              <span className="" style={{ fontSize: "16px", fontWeight: 600 }}>
                Skills & expertise
              </span>
              <p style={{ fontSize: "15px", color: "#62646a" }}>
                Significant experience working in relevant Pro fields
              </p>
            </div>
          </div>
        </div>
        <div className="flex space-x-2 py-16">
          <div className="w-1/2">
            <div className="flex justify-center">
              <img src={checkImg} alt="" />
            </div>
            <div className="text-center">
              <span className="" style={{ fontSize: "16px", fontWeight: 600 }}>
                Skills & expertise
              </span>
              <p style={{ fontSize: "15px", color: "#62646a" }}>
                Significant experience working in relevant Pro fields
              </p>
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex justify-center">
              <img src={checkImg} alt="" />
            </div>
            <div className="text-center">
              <span className="" style={{ fontSize: "16px", fontWeight: 600 }}>
                Skills & expertise
              </span>
              <p style={{ fontSize: "15px", color: "#62646a" }}>
                Significant experience working in relevant Pro fields
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pro stories */}
      <div className="" style={{ backgroundColor: "#fafafa" }}>
        <div className="container mx-auto px-2 pt-9 pb-16">
          <div className="text-center py-8">
            <h3 style={{ fontSize: "25px", fontWeight: 600 }}>Pro stories</h3>
            <p
              className="mt-3"
              style={{ fontSize: "16px", fontWeight: "500", color: "#62646a" }}
            >
              {" "}
              See how Pro freelancers are achieving success
            </p>
          </div>
          {/* carousel */}
          <div className="stories_carousel flex justify-center">
            <div className="div_carousel w-2/3">
              <Slider className="p-3" {...settings}>
                <div className=" style_carousel" style={{}}>
                  <div className="flex justify-around items-center">
                    <div className="">
                      <img src={proStories1} alt="" />
                    </div>
                    <div className="text-center">
                      <p className="name">Alan Redondo</p>
                      <p className="decs">From broke to breaking the bank</p>
                      <button
                        className="py-2 px-5 rounded-md mt-8 hover:bg-slate-100"
                        style={{ border: "1px solid black", fontWeight: 600 }}
                      >
                        Read story
                      </button>
                    </div>
                  </div>
                </div>
                <div className="style_carousel ">
                  <div className="flex justify-around items-center">
                    <div className="">
                      <img src={proStories2} alt="" />
                    </div>
                    <div className="text-center">
                      <p className="name">Jacqui-Lee Katz</p>
                      <p className="decs">From broke to breaking the bank</p>
                      <button
                        className="py-2 px-5 rounded-md mt-8 hover:bg-slate-100"
                        style={{ border: "1px solid black", fontWeight: 600 }}
                      >
                        Read story
                      </button>
                    </div>
                  </div>
                </div>
                <div className="style_carousel ">
                  <div className="flex justify-around items-center">
                    <div className="">
                      <img src={proStories3} alt="" />
                    </div>
                    <div className=" text-center">
                      <p className="name">Heather Metcalfe</p>
                      <p className="decs">
                        Unleashing creativity and building long-term connections
                      </p>
                      <button
                        className="py-2 px-5 rounded-md mt-8 hover:bg-slate-100"
                        style={{ border: "1px solid black", fontWeight: 600 }}
                      >
                        Read story
                      </button>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>

      {/* Apply  */}
      <div className="" style={{ backgroundColor: "rgba(0, 57, 18, 1)" }}>
        <div className="container mx-auto px-2" style={{ height: "340px" }}>
          <div className="text-center">
            <p
              className="text-white py-3"
              style={{ fontSize: "55px", fontWeight: 600 }}
            >
              Apply to become a Fiverr <br /> Pro freelancer
            </p>
          </div>
          <div className="flex justify-center mt-10">
            <button
              className=" py-2 px-8 bg-white rounded-lg hover:opacity-90"
              style={{ fontWeight: 600, bottom: "" }}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProSerVice;
