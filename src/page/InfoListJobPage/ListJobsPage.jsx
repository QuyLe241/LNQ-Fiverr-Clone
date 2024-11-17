import React, { useEffect, useState } from "react";
import "./styleListJobs.scss";
import { congViecService } from "../../services/congViec.service";
import { Link } from "react-router-dom";
import Star from "./Star";
import { pathDefault } from "../../common/path";
import HomeIconListJob from "./HomeIconListJob";
import TypeJobs from "./TyepeJobs";

const ListJobsPage = () => {
  const [listJobs, setListJobs] = useState([]);
  const [listTypeJob, setListTypeJob] = useState([]);
  //   const listJobs = () => {};
  //   listJobs ,layCongViecTheoTen
  useEffect(() => {
    congViecService
      .listJobs()
      .then((res) => {
        // console.log(res);
        setListJobs(res.data.content);
      })
      .catch((err) => {});
  }, []);

  useEffect(() => {}, []);
  return (
    <div>
      <div className="container px-1 mx-auto ">
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
              <h2 className="" style={{ fontWeight: 700, fontSize: "25px" }}>
                <span style={{ color: "rgb(159 161 166)" }}>/</span> List Jobs
              </h2>
            </div>
          </div>
        </div>
        <div className="list_jobs">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
            {listJobs.map((item, index) => {
              //   console.log(item);
              return (
                <div
                  className="my-3 pb-2 shadow-xl rounded-md hover:bg-slate-200 duration-300"
                  key={index}
                >
                  <Link to={`${pathDefault.detail}?detail=${item.id}`}>
                    <div className="item_jobs_style">
                      <div className="image_jobs">
                        <img
                          className="w-full rounded-lg"
                          src={item.hinhAnh}
                          alt=""
                        />
                      </div>
                      <div className="name_jobs mt-1 px-1">
                        <span className="" style={{ color: "#404145" }}>
                          {item.tenCongViec}
                        </span>
                      </div>
                      <div className="px-2">
                        <div className="rate flex items-center mt-2">
                          <Star />
                          <span
                            style={{ color: "#e1a01b" }}
                            className="ml-1 font-bold"
                          >
                            {item.saoCongViec}
                          </span>
                          <span className="ml-1">({item.danhGia})</span>
                        </div>
                        <div className="star"></div>
                      </div>
                      <div className="price mt-1 px-2">
                        <span className="font-bold">
                          From{" "}
                          {item.giaTien.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}
                        </span>
                      </div>
                      <div className="see_details">
                        <span>See details</span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListJobsPage;
