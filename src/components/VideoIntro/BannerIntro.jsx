import React from "react";
import ImgFiver from "./ImgFiver";
import "./Intro.scss";
import CarouselIntro from "./CarouselIntro";
function BannerIntro() {
  return (
    <div>
      <div className="my-32 colorbg py-8  rounded-lg flex items-center ">
        <div className=" ml-12 py-7 text-white w-1/2">
          <ImgFiver />
          <span className="text-6xl custometext">
            New e-Commerce <br />
            project management <br /> service
          </span>
          <span className="font-bold text-6xl"> made for your business</span>
          <p className="my-4 text-sm">
            An experienced e-Commerce project manager will plan, coordinate, and{" "}
            <br /> execute your project. Overseeing a team of e-Commerce
            experts, they'll <br /> handle everything from site building, design
            and content to optimization, <br /> marketing strategies, and UGC
            videos.
          </p>
          <p className="mb-4 text-base font-medium">
            To get started, you should have:
          </p>
          <ul className="text text-base pb-7">
            <li>An e-Commerce project requiring expertise in various fields</li>
            <li>A budget exceeding $1000</li>
            <li>A desire to get things done, without the hassle</li>
          </ul>
          <button className="px-5 py-2 bg-orange-600 text-white rounded-md hover:opacity-90">
            Get started
          </button>
        </div>
        <div className="w-1/2">
          <img
            width={650}
            className=""
            src="../../../public/img/X1.png"
            alt=""
          />
        </div>
      </div>
      <CarouselIntro />
    </div>
  );
}

export default BannerIntro;
