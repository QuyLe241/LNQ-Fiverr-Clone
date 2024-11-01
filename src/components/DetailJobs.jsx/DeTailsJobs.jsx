import React, { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { congViecService } from "../../services/congViec.service";
import "./styleDetail.scss";
import HomeIcon from "./Icon/HomeIcon";
import LoveIcon from "./Icon/LoveIcon";
import Star from "./Icon/Star";
import CheckIcon from "./Icon/CheckIcon";
import StarRate from "./Icon/StarRate";
import Ktm from "../../assets/Img/ktm.png";
import Fiverrimglogo from "../../assets/Img/fiverrimglogo.png";
import { Tabs } from "antd";
import TickIcon from "./Icon/TickIcon";
import ArrowIcon from "./Icon/ArrowIcon";

const DeTailsJobs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParam.get("deTail"));
  // console.log(searchParam);
  const { id } = useParams();
  const [listJob, setListJob] = useState([]);

  //
  useEffect(() => {
    const idCongViec = searchParams.get("detail");
    // console.log(idCongViec);
    congViecService
      .detailJob(idCongViec)
      .then((res) => {
        // console.log(res.data);
        setListJob(res.data.content);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, [searchParams]);

  //  Tabs
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: (
        <div className="label_tab flex items-center justify-center">
          <span>Basic</span>
        </div>
      ),
      children: (
        <div className="">
          {listJob.map((item, index) => {
            let money = item.congViec.giaTien;
            return (
              <div className="px-3" key={index}>
                <div className="">
                  <h3 className="font-bold " style={{ fontSize: "20px" }}>
                    US{" "}
                    {money.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </h3>
                  <p className="font-semibold" style={{ fontSize: "15px" }}>
                    Save up to 15% with{" "}
                    <span style={{ color: "#026a5d", fontSize: "18px" }}>
                      Subscribe to Save
                    </span>
                  </p>
                </div>
                <div className="py-3">
                  <p className="font-semibold" style={{ color: "#222325" }}>
                    <span
                      className="font-semibold"
                      style={{ fontSize: "17px" }}
                    >
                      Calm Cove Collection
                    </span>{" "}
                    <span className="text-green-600">30 Days</span> Management |
                    | 12 SEO POSTS (9 Static, 3 Reels) | Caption, Hashtags &
                    Emoji
                  </p>
                </div>
                <div className="">
                  <div className="flex justify-around font-bold py-2">
                    <p>14-day delivery</p>
                    <p>Unlimited Revisions</p>
                  </div>
                  <div className="space-y-2 py-3">
                    <div className="flex items-center">
                      <TickIcon
                        width={"15px"}
                        height={"15px"}
                        fill={"currentFill"}
                      />
                      <span
                        className="font-semibold ml-3"
                        style={{ color: "#95979d" }}
                      >
                        2 platforms
                      </span>
                    </div>
                    <div className="flex items-center">
                      <TickIcon
                        width={"15px"}
                        height={"15px"}
                        fill={"currentFill"}
                      />
                      <span
                        className="font-semibold ml-3"
                        style={{ color: "#95979d" }}
                      >
                        Page/channel evaluation
                      </span>
                    </div>
                    <div className="flex items-center">
                      <TickIcon
                        width={"15px"}
                        height={"15px"}
                        fill={"currentFill"}
                      />
                      <span
                        className="font-semibold ml-3"
                        style={{ color: "#95979d" }}
                      >
                        2 platforms
                      </span>
                    </div>
                    <div className="flex items-center">
                      <TickIcon
                        width={"15px"}
                        height={"15px"}
                        fill={"currentFill"}
                      />
                      <span
                        className="font-semibold ml-3"
                        style={{ color: "#95979d" }}
                      >
                        Page/channel evaluation
                      </span>
                    </div>
                    <div className="flex items-center">
                      <TickIcon
                        width={"15px"}
                        height={"15px"}
                        fill={"currentFill"}
                      />
                      <span
                        className="font-semibold ml-3"
                        style={{ color: "#95979d" }}
                      >
                        Engagement with followers
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-5 py-5">
                  <div className="flex justify-center">
                    <button
                      style={{ border: "1px black solid" }}
                      className="flex items-center justify-center bg-black text-white w-3/4 py-2 rounded-lg font-bold hover:bg-slate-100 hover:text-black duration-500"
                    >
                      Continue{" "}
                      {/* <ArrowIcon width={"16px"} height={"16px"} fill={""} /> */}
                    </button>
                  </div>
                  <div className="flex justify-center ">
                    <button
                      className="w-3/4 rounded-lg py-2 font-semibold hover:bg-black hover:text-white duration-500"
                      style={{ border: "1px black solid" }}
                    >
                      Contact me
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="label_tab flex items-center justify-center">
          <span>Standard</span>
        </div>
      ),
      children: (
        <div className="">
          {listJob.map((item, index) => {
            let money = item.congViec.giaTien * 2;
            return (
              <div className="px-3" key={index}>
                <div className="">
                  <h3 className="font-bold " style={{ fontSize: "20px" }}>
                    US{" "}
                    {money.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </h3>
                  <p className="font-semibold" style={{ fontSize: "15px" }}>
                    Save up to 15% with{" "}
                    <span style={{ color: "#026a5d", fontSize: "18px" }}>
                      Subscribe to Save
                    </span>
                  </p>
                </div>
                <div className="py-3">
                  <p className="font-semibold" style={{ color: "#222325" }}>
                    <span
                      className="font-semibold"
                      style={{ fontSize: "17px" }}
                    >
                      Calm Cove Collection
                    </span>{" "}
                    <span className="text-green-600">30 Days</span> Management |
                    | 12 SEO POSTS (9 Static, 3 Reels) | Caption, Hashtags &
                    Emoji
                  </p>
                </div>
                <div className="">
                  <div className="flex justify-around font-bold py-2">
                    <p>21-day delivery</p>
                    <p>Unlimited Revisions</p>
                  </div>
                  <div className="space-y-2 py-3">
                    <div className="flex items-center">
                      <TickIcon
                        width={"15px"}
                        height={"15px"}
                        fill={"currentFill"}
                      />
                      <span
                        className="font-semibold ml-3"
                        style={{ color: "#95979d" }}
                      >
                        2 platforms
                      </span>
                    </div>
                    <div className="flex items-center">
                      <TickIcon
                        width={"15px"}
                        height={"15px"}
                        fill={"currentFill"}
                      />
                      <span
                        className="font-semibold ml-3"
                        style={{ color: "#95979d" }}
                      >
                        Page/channel evaluation
                      </span>
                    </div>
                    <div className="flex items-center">
                      <TickIcon
                        width={"15px"}
                        height={"15px"}
                        fill={"currentFill"}
                      />
                      <span
                        className="font-semibold ml-3"
                        style={{ color: "#95979d" }}
                      >
                        2 platforms
                      </span>
                    </div>
                    <div className="flex items-center">
                      <TickIcon
                        width={"15px"}
                        height={"15px"}
                        fill={"currentFill"}
                      />
                      <span
                        className="font-semibold ml-3"
                        style={{ color: "#95979d" }}
                      >
                        Page/channel evaluation
                      </span>
                    </div>
                    <div className="flex items-center">
                      <TickIcon
                        width={"15px"}
                        height={"15px"}
                        fill={"currentFill"}
                      />
                      <span
                        className="font-semibold ml-3"
                        style={{ color: "#95979d" }}
                      >
                        Engagement with followers
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-5 py-5">
                  <div className="flex justify-center">
                    <button
                      style={{ border: "1px black solid" }}
                      className="flex items-center justify-center bg-black text-white w-3/4 py-2 rounded-lg font-bold hover:bg-slate-100 hover:text-black duration-500"
                    >
                      Continue{" "}
                      {/* <ArrowIcon width={"16px"} height={"16px"} fill={""} /> */}
                    </button>
                  </div>
                  <div className="flex justify-center ">
                    <button
                      className="w-3/4 rounded-lg py-2 font-semibold hover:bg-black hover:text-white duration-500"
                      style={{ border: "1px black solid" }}
                    >
                      Contact me
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div className="label_tab flex items-center justify-center">
          <span>Premium</span>
        </div>
      ),
      children: (
        <div className="">
          {listJob.map((item, index) => {
            let money = item.congViec.giaTien * 3;
            return (
              <div className="px-3" key={index}>
                <div className="">
                  <h3 className="font-bold " style={{ fontSize: "20px" }}>
                    US{" "}
                    {money.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </h3>
                  <p className="font-semibold" style={{ fontSize: "15px" }}>
                    Save up to 15% with{" "}
                    <span style={{ color: "#026a5d", fontSize: "18px" }}>
                      Subscribe to Save
                    </span>
                  </p>
                </div>
                <div className="py-3">
                  <p className="font-semibold" style={{ color: "#222325" }}>
                    <span
                      className="font-semibold"
                      style={{ fontSize: "17px" }}
                    >
                      Calm Cove Collection
                    </span>{" "}
                    <span className="text-green-600">30 Days</span> Management |
                    | 12 SEO POSTS (9 Static, 3 Reels) | Caption, Hashtags &
                    Emoji
                  </p>
                </div>
                <div className="">
                  <div className="flex justify-around font-bold py-2">
                    <p>30-day delivery</p>
                    <p>Unlimited Revisions</p>
                  </div>
                  <div className="space-y-2 py-3">
                    <div className="flex items-center">
                      <TickIcon
                        width={"15px"}
                        height={"15px"}
                        fill={"currentFill"}
                      />
                      <span
                        className="font-semibold ml-3"
                        style={{ color: "#95979d" }}
                      >
                        2 platforms
                      </span>
                    </div>
                    <div className="flex items-center">
                      <TickIcon
                        width={"15px"}
                        height={"15px"}
                        fill={"currentFill"}
                      />
                      <span
                        className="font-semibold ml-3"
                        style={{ color: "#95979d" }}
                      >
                        Page/channel evaluation
                      </span>
                    </div>
                    <div className="flex items-center">
                      <TickIcon
                        width={"15px"}
                        height={"15px"}
                        fill={"currentFill"}
                      />
                      <span
                        className="font-semibold ml-3"
                        style={{ color: "#95979d" }}
                      >
                        2 platforms
                      </span>
                    </div>
                    <div className="flex items-center">
                      <TickIcon
                        width={"15px"}
                        height={"15px"}
                        fill={"currentFill"}
                      />
                      <span
                        className="font-semibold ml-3"
                        style={{ color: "#95979d" }}
                      >
                        Page/channel evaluation
                      </span>
                    </div>
                    <div className="flex items-center">
                      <TickIcon
                        width={"15px"}
                        height={"15px"}
                        fill={"currentFill"}
                      />
                      <span
                        className="font-semibold ml-3"
                        style={{ color: "#95979d" }}
                      >
                        Engagement with followers
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-5 py-5">
                  <div className="flex justify-center">
                    <button
                      style={{ border: "1px black solid" }}
                      className="flex items-center justify-center bg-black text-white w-3/4 py-2 rounded-lg font-bold hover:bg-slate-100 hover:text-black duration-500"
                    >
                      Continue{" "}
                      {/* <ArrowIcon width={"16px"} height={"16px"} fill={""} /> */}
                    </button>
                  </div>
                  <div className="flex justify-center ">
                    <button
                      className="w-3/4 rounded-lg py-2 font-semibold hover:bg-black hover:text-white duration-500"
                      style={{ border: "1px black solid" }}
                    >
                      Contact me
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ),
    },
  ];
  return (
    <div className="container px-1 mx-auto">
      {listJob.map((item, index) => {
        return (
          <div key={index} className="">
            <div className="flex justify-between">
              <div className="flex p-2 items-center">
                <div
                  className="p-2 hover:bg-slate-300"
                  style={{ borderRadius: "50%" }}
                >
                  <Link to={"/"} className="">
                    <HomeIcon width={"16px"} height={"16px"} />
                  </Link>
                </div>
                <div className="px-2" style={{ color: "#c5c6c9" }}>
                  /
                </div>
                <div className="">{item.tenChiTietLoai}</div>
                <div className=""></div>
              </div>
              <div className="flex items-center">
                <div
                  className="flex items-center py-1 px-3 rounded-md"
                  style={{ border: "1px #dadbdd solid" }}
                >
                  <LoveIcon width={"16px"} height={"16px"} />
                  <div className="px-2">{item.congViec.danhGia}</div>
                </div>
              </div>
            </div>
            <div className="flex space-x-5">
              <div className="w-3/5 content_left pr-5 my-3 pb-5">
                <h3 className="font-bold" style={{ fontSize: "22px" }}>
                  {item.congViec.tenCongViec}
                </h3>
                <div className="flex info_creater space-x-5 py-3">
                  <div className="">
                    <img
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                      src={item.avatar}
                      alt=""
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="flex space-x-1 ">
                      <span className="font-semibold">{item.tenNguoiTao}</span>
                      <div
                        className="flex items-center justify-center px-1 rounded-md text-white space-x-1"
                        style={{ backgroundColor: "#2e25ad" }}
                      >
                        <CheckIcon
                          width={"12px"}
                          height={"12px"}
                          fill={"currentColor"}
                        />
                        <span className="font-semibold">Pro</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star height={"16px"} width={"16px"} />
                      <span className="font-semibold">4.9</span>
                      <span style={{ color: "#74767e" }}>
                        ({item.congViec.danhGia})
                      </span>
                    </div>
                  </div>

                  <div className="">
                    <div
                      className="flex items-center px-1 rounded-md"
                      style={{ backgroundColor: "#ffe0b3", color: "#421300" }}
                    >
                      <div className="">
                        <span className="font-semibold px-1 rounded-md">
                          Top Rated
                        </span>
                      </div>
                      <div className="flex space-x-1">
                        <StarRate width={"8px"} height={"8px"} />
                        <StarRate width={"8px"} height={"8px"} />
                        <StarRate width={"8px"} height={"8px"} />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="line py-5 "
                  style={{ borderTop: "1px #e2e2e8 solid" }}
                >
                  <div
                    className="flex space-x-5 justify-center"
                    style={{ fontSize: "14px" }}
                  >
                    <div className="">
                      <span className="font-semibold">Among my clients</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <img src={Ktm} style={{ height: "20px" }} alt="" />
                      <span style={{ color: "#62646a" }}>
                        KLM Royal Dutch Airlines
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <img
                        src={Fiverrimglogo}
                        style={{ height: "25px" }}
                        alt=""
                      />
                      <span>Fiverr</span>
                    </div>
                  </div>
                </div>

                <div className="py-3">
                  <div className="flex justify-center py-1 content_img">
                    <img
                      className="img_job rounded-md"
                      src={item.congViec.hinhAnh}
                      style={{ width: "60%" }}
                      alt=""
                    />
                  </div>
                </div>

                <div className="decsription mt-5 py-3">
                  <div className="">
                    <h3
                      className="font-semibold my-5"
                      style={{ fontSize: "18px" }}
                    >
                      About this gig
                    </h3>
                  </div>
                  <div
                    className="pb-5 font-semibold"
                    style={{ color: "#62646a" }}
                  >
                    {item.congViec.moTa}
                  </div>
                </div>

                <div className="works_it rounded-lg py-6">
                  <div className="title">
                    <h4
                      className="font-semibold py-1"
                      style={{ fontSize: "20px" }}
                    >
                      How it works
                    </h4>
                  </div>
                  <div className="">
                    <p
                      className="font-semibold py-1"
                      style={{ fontSize: "", color: "#62646a" }}
                    >
                      Here are the steps to complete your{" "}
                      <span>Basic package</span> project:
                    </p>
                  </div>
                  <div className="list space-y-5 px-5 py-3">
                    <div className="list_decs flex space-x-3">
                      <div className="">
                        <div className="number flex items-center">
                          <span>1</span>
                        </div>
                      </div>
                      <div className="decs_job  ">
                        <span>Requirements</span>
                        <p>
                          We make sure I have everything I need to complete your
                          project successfully.
                        </p>
                      </div>
                    </div>
                    <div className="list_decs flex space-x-3">
                      <div className="number flex items-center">
                        <span>2</span>
                      </div>
                      <div className="decs_job ">
                        <span>Research - competitive landscape</span>
                        <p>
                          I'll conduct competitive research on your product,
                          your industry, and your unique selling proposition.
                        </p>
                      </div>
                    </div>
                    <div className="list_decs flex space-x-3">
                      <div className="number flex items-center">
                        <span>3</span>
                      </div>
                      <div className="decs_job ">
                        <span>Concept</span>
                        <p>I'll create the concept for the logo.</p>
                      </div>
                    </div>
                    <div className="list_decs flex space-x-3">
                      <div className="number flex items-center">
                        <span>4</span>
                      </div>
                      <div className="decs_job ">
                        <span>Finalization and Delivery</span>
                        <p>I'll design the final logo for your product.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center py-5">
                  <div
                    className="w-4/5 py-3 px-5 space-y-2"
                    style={{ border: "1px #dadbdd solid" }}
                  >
                    <div className="">
                      <p
                        className="font-bold"
                        style={{ color: "rgb(34, 35, 37)" }}
                      >
                        Delivery style preference
                      </p>
                    </div>
                    <div className="">
                      <p style={{ color: "#62646a", fontSize: "15px" }}>
                        Please inform the freelancer of any preferences or
                        concerns regarding the use of AI tools in the completion
                        and/or delivery of your order.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-3">
                  <div className="ml-3">
                    <h3 className="font-semibold" style={{ fontSize: "18px" }}>
                      Get to
                    </h3>
                  </div>
                  <div className="flex info_creater space-x-5 py-3">
                    <div className="">
                      <img
                        style={{
                          width: "90px",
                          height: "90px",
                          borderRadius: "50%",
                        }}
                        src={item.avatar}
                        alt=""
                      />
                    </div>

                    <div className="space-y-1">
                      <div className="flex space-x-1 ">
                        <span className="font-semibold">
                          {item.tenNguoiTao}
                        </span>
                        <div
                          className="flex items-center justify-center px-1 rounded-md text-white space-x-1"
                          style={{ backgroundColor: "#2e25ad" }}
                        >
                          <CheckIcon
                            width={"12px"}
                            height={"12px"}
                            fill={"currentColor"}
                          />
                          <span className="font-semibold">Pro</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star height={"16px"} width={"16px"} />
                        <span className="font-semibold">4.9</span>
                        <span style={{ color: "#74767e" }}>
                          ({item.congViec.danhGia})
                        </span>
                      </div>
                    </div>

                    <div className="">
                      <div
                        className="flex items-center px-1 rounded-md"
                        style={{ backgroundColor: "#ffe0b3", color: "#421300" }}
                      >
                        <div className="">
                          <div className="">
                            <span className="font-semibold px-1 rounded-md">
                              Top Rated
                            </span>
                          </div>
                        </div>
                        <div className="flex space-x-1">
                          <StarRate width={"8px"} height={"8px"} />
                          <StarRate width={"8px"} height={"8px"} />
                          <StarRate width={"8px"} height={"8px"} />
                        </div>
                      </div>
                      <div className="mt-1">
                        <span style={{ color: "rgb(98, 100, 106)" }}>
                          {item.tenLoaiCongViec}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="font-semibold " style={{}}>
                    <Link
                      to={"/"}
                      className="rounded-md py-2 px-5 hover:bg-black hover:text-white"
                      style={{ border: "1px black solid" }}
                    >
                      Contact me
                    </Link>
                  </div>

                  <div className="my-5 py-3 container_aboutUser">
                    <div className="title title_aboutUser px-6 py-3 space-y-2">
                      <p>
                        The Fiverr Pro catalog and has been hand-picked by a
                        dedicated Fiverr Pro team for their skills and
                        expertise.
                      </p>
                      <span className="font-semibold ">Expert in:</span>
                      <div className="flex items-center">
                        <CheckIcon
                          height={"15px"}
                          width={"15px"}
                          fill={"#2E25AD"}
                        />
                        <span className="font-medium ml-2">
                          {item.tenChiTietLoai}
                        </span>
                      </div>
                    </div>
                    <div className="px-3">
                      <div className="flex inforUser mx-3 py-5">
                        <div className="w-1/2 info_user space-y-2">
                          <div className="">
                            <span>From</span>
                            <p>Netherlands</p>
                          </div>
                          <div className="">
                            <span>Avg. response time</span>
                            <p>4 hours</p>
                          </div>
                          <div className="">
                            <span>Languages</span>
                            <p>English, Dutch, Spanish</p>
                          </div>
                        </div>
                        <div className="w-1/2 info_user space-y-2">
                          <div className="">
                            <span>Member since</span>
                            <p>Apr 2012</p>
                          </div>
                          <div className="">
                            <span>Last delivery</span>
                            <p>1 day</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-3 ">
                      <div className="decsShort_job mx-3 py-5">
                        <p>{item.congViec.moTaNgan}</p>
                        <p></p>
                      </div>
                    </div>
                    <div className="">
                      <div className="flex space-x-3 p-2 mt-2">
                        <div className="">
                          <span className="font-semibold">
                            Among my clients
                          </span>
                        </div>
                        <div className="title_new">
                          <span className="px-2 rounded-md">NEW</span>
                        </div>
                      </div>
                      <div className="flex among_clients p-5">
                        <div className="flex decs_clients items-center space-x-3 w-1/2">
                          <div className="">
                            <img
                              src={Ktm}
                              style={{ width: "25px", height: "25px" }}
                              alt=""
                            />
                          </div>
                          <div className="about_clients">
                            <span>KLM Royal Dutch Airlines</span>
                            <p> Transportation Services</p>
                          </div>
                        </div>
                        <div className="flex decs_clients items-center space-x-3 w-1/2">
                          <div className="">
                            <img
                              src={Fiverrimglogo}
                              style={{ width: "35px", height: "35px" }}
                              alt=""
                            />
                          </div>
                          <div className="about_clients">
                            <span>Fiverr</span>
                            <p> Internet Software & Services</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="review">
                    <div className="">
                      <h5></h5>
                    </div>
                  </div>
                  <div className=""></div>
                  <div className=""></div>
                  <div className=""></div>
                </div>
              </div>

              <div className="w-2/5 content_right">
                <div className="sidebar_content w-3/4">
                  <Tabs
                    defaultActiveKey="1"
                    items={items}
                    onChange={onChange}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DeTailsJobs;
