import React, { useEffect, useState } from "react";
import { congViecService } from "../../services/congViec.service";
import "./styleTypeJobs.scss";
import { Link, NavLink, useLocation } from "react-router-dom";
import { pathDefault } from "../../common/path";

const TypeJobs = () => {
  const [listTypeJob, setListTypeJob] = useState([]);
  useEffect(() => {
    const getTypeJob = async () => {
      try {
        const res = await congViecService.getTypeJob();
        setListTypeJob(res.data.content);
        // console.log(res.data.content);
        // console.log("listTypeJob", listTypeJob);
      } catch (error) {
        console.log(error);
      }
    };
    getTypeJob();
  }, []);
  return (
    <div className="container_typeJobs">
      <div className="flex">
        {listTypeJob.map((item, index) => {
          let id = item.id;
          return (
            <div key={index} className="type_jobs px-3">
              <NavLink
                to={`${pathDefault.listTypeJobs}?id=${id}`}
                className={({ isActive, isPending }) => {
                  return isActive ? "text-green-500" : "";
                }}
              >
                <div className="type_jobs__title px-1 py-2 text-gray-500 hover:text-green-500 active:bg-green-100 duration-100">
                  {" "}
                  {item.tenLoaiCongViec}
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TypeJobs;
