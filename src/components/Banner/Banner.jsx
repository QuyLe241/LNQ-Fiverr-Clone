import React from "react";
import BannerImg from "../../assets/Img/Banner0.png";
import { pathDefault } from "../../common/path";
import { Link, NavLink } from "react-router-dom";
import Program from "../../assets/Img/program1.png";
import Graphic from "../../assets/Img/graphic1.png";
import Digital from "../../assets/Img/digital1.png";
import Writing from "../../assets/Img/writing1.png";
import Video from "../../assets/Img/video1.png";
import AiService from "../../assets/Img/AiService1.png";
import Music from "../../assets/Img/Music1.png";
import Business from "../../assets/Img/business1.png";
import Consul from "../../assets/Img/consul1.png";
import "./style.scss";

const Banner = () => {
  return (
    <div className="container mx-auto px-2 my-6">
      <div
        style={{
          backgroundImage: `url(${BannerImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          borderRadius: "18px",
        }}
        className="banner h-[580px] w-full flex justify-center items-center"
      >
        <h1
          className="px-5"
          style={{ color: "#fff", fontSize: "60px", fontWeight: 600 }}
        >
          Find the right
          <em style={{ color: "rgb(29, 191, 115)" }}> freelance</em> <br />
          service, right away
        </h1>
      </div>
      <div className="listJob_item">
        {/* hover:bg-color 
        background: rgb(29,191,115);
        background: radial-gradient(circle, rgba(29,191,115,1) 0%, rgba(135,221,181,1) 0%, rgba(255,255,255,1) 80%);
      */}
        {/* <div className="grid grid-cols-9 grid-rows-1 gap-3 env_item py-3">
          <div className="shadow-lg rounded-xl item" style={{ height: "" }}> */}
        <div className="grid grid-cols-9 my-12 grid-rows-1 gap-3 env_item">
          <div className="shadow-lg rounded-xl box item" style={{ height: "" }}>
            <Link
              to={pathDefault.listJobsPage}
              className={""}
              style={{ height: "" }}
            >
              <div className="" style={{ height: "" }}>
                <img src={Program} className="ml-3 mt-3" alt="" />
              </div>
              <p className="ml-3">Programming & Rech</p>
            </Link>
          </div>
          <div className="shadow-lg rounded-xl item">
            <Link to={pathDefault.listJobsPage} className={""}>
              <div className="">
                <img src={Graphic} className="ml-3 mt-3" alt="" />
              </div>
              <p className="ml-3">Graphics & Design</p>
            </Link>
          </div>
          <div className="shadow-lg rounded-xl item">
            <Link to={pathDefault.listJobsPage} className={""}>
              <div className="">
                <img src={Digital} className="ml-3 mt-3" alt="" />
              </div>
              <p className="ml-3">Digital Marketing</p>
            </Link>
          </div>
          <div className="shadow-lg rounded-xl item">
            <Link to={pathDefault.listJobsPage} className={"shadow-lg"}>
              <div className="">
                <img src={Writing} className="ml-3 mt-3" alt="" />
              </div>
              <p className="ml-3">Writing & Translation</p>
            </Link>
          </div>
          <div className="shadow-lg rounded-xl item">
            <Link to={pathDefault.listJobsPage} className={"shadow-lg"}>
              <div className="">
                <img src={Video} className="ml-3 mt-3" alt="" />
              </div>
              <p className="ml-3">Video & Animation</p>
            </Link>
          </div>
          <div className="shadow-lg rounded-xl item">
            <Link to={pathDefault.listJobsPage} className={"shadow-lg"}>
              <div className="">
                <img src={AiService} className="ml-3 mt-3" alt="" />
              </div>
              <p className="ml-3">AI Service</p>
            </Link>
          </div>
          <div className="shadow-lg rounded-xl item">
            <Link to={pathDefault.listJobsPage} className={"shadow-lg"}>
              <div className="">
                <img src={Music} className="ml-3 mt-3" alt="" />
              </div>
              <p className="ml-3">Music & Audio</p>
            </Link>
          </div>
          <div className="shadow-lg rounded-xl item">
            <Link to={pathDefault.listJobsPage} className={"shadow-lg"}>
              <div className="">
                <img src={Business} className="ml-3 mt-3" alt="" />
              </div>
              <p className="ml-3">Business</p>
            </Link>
          </div>
          <div className="shadow-lg rounded-xl item">
            <Link to={pathDefault.listJobsPage} className={"shadow-lg"}>
              <div className="">
                <img src={Consul} className="ml-3 mt-3" alt="" />
              </div>
              <p className="ml-3">Consulting</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
