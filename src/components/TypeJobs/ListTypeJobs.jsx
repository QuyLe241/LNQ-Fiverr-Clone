import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Spin } from "antd";
import { congViecService } from "../../services/congViec.service";
import { pathDefault } from "../../common/path";
import "./style.scss";
import TypeJobs from "../../page/InfoListJobPage/TyepeJobs";
import HomeIconListJob from "../../page/InfoListJobPage/HomeIconListJob";

const ListTypeJobs = () => {
  const [searchParams] = useSearchParams();
  const [listTypeJobs, setListTypeJobs] = useState([]);

  useEffect(() => {
    let id = searchParams.get("id");
    // console.log(id);
    const getTypeJobs = async () => {
      try {
        const res = await congViecService.getJobByType(id);
        setListTypeJobs(res.data.content);
        // console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    getTypeJobs();
  }, [searchParams]);

  return (
    <div className="container">
      <div className="">
        <div className="container_type_jobs">
          <TypeJobs />
        </div>
        <div className="flex items-center pt-3">
          <div
            style={{ borderRadius: "10px" }}
            className="ml-2 p-1 hover:bg-slate-300"
          >
            <Link className="flex items-center" to={pathDefault.homePage}>
              <HomeIconListJob width={"20px"} height={"20px"} />
            </Link>
          </div>
          <div className="ml-2">
            <h2 className="" style={{ fontWeight: 700, fontSize: "22px" }}>
              <span style={{ color: "rgb(159 161 166)" }}>/</span> List Jobs
            </h2>
          </div>
        </div>
      </div>
      <div className="">
        {listTypeJobs.length > 0 ? (
          <div className="container my-3 mx-auto px-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
            {listTypeJobs.map((item, index) => {
              return (
                <div
                  className="rounded-md shadow-xl mt-2 pb-2 hover:bg-slate-200 duration-300"
                  key={index}
                >
                  <Link
                    className="item_jobs_search"
                    to={`${pathDefault.detail}?detail=${item.id}`}
                  >
                    <div className="item_image-search">
                      <img
                        className="w-full rounded-lg"
                        src={item.congViec.hinhAnh}
                        alt=""
                      />
                    </div>
                    {/* info */}
                    <div
                      style={{ overflow: "hidden" }}
                      className="flex px-3 space-x-3 items-center mt-2"
                    >
                      <img
                        src={item.avatar}
                        className="w-10 h-10 rounded-full"
                        alt=""
                      />
                      {/* tên tác giả */}
                      <div className="">
                        <h4 style={{ fontWeight: 600 }}>{item.tenNguoiTao}</h4>
                        <p>Cấp độ 2</p>
                      </div>
                    </div>
                    {/* tên công việc */}
                    <h3 className="px-1">{item.congViec.tenCongViec}</h3>
                    {/* đánh giá */}
                    <div className="space-x-1 px-1">
                      <span style={{ fontWeight: 600 }}>
                        {item.congViec.saoCongViec}
                      </span>
                      <i className="fa-solid fa-star text-yellow-500"></i>

                      <span>({item.congViec.danhGia})</span>
                    </div>
                    {/* yêu thích và giá tiền */}
                    <div className="flex items-center justify-center">
                      <i className="fa-solid fa-heart"></i>
                      <div className="space-x-3">
                        <span className="uppercase">Staring at</span>
                        <span className="font-semibold">
                          ${item.congViec.giaTien} USD
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="py-3">
            <div className="">
              <span
                className="flex justify-center text-blue-500"
                style={{ fontSize: "20px", fontWeight: 600 }}
              >
                Không có công việc nào cả !
              </span>
              <div className="flex justify-center py-3">
                <Spin size="large" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListTypeJobs;
