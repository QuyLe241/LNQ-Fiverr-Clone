// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useSearchParams } from "react-router-dom";
// import { congViecService } from "../../services/congViec.service";
// import { pathDefault } from "../../common/path";
// import "./style.scss";
// import HomeIconListJob from "../InfoListJobPage/HomeIconListJob";
// import TypeJobs from "../InfoListJobPage/TyepeJobs";

// const ListJobPage = () => {
//   const [searchParam, setSearchParam] = useSearchParams();
//   const [listJob, setListJob] = useState([]);
//   //   console.log(searchParam.get("tenCongViec"));
//   //  dùng để lấy các phần tử ở trên thanh url.
//   //  ở sau tenCongViec. VD: ....tenCongViec=design   => clg: design

//   //  navigate
//   const navigate = useNavigate();
//   let resultSearch = searchParam.get("tenCongViec");
//   useEffect(() => {
//     let tenCongViec = searchParam.get("tenCongViec");
//     console.log(tenCongViec);
//     congViecService
//       .layCongViecTheoTen(tenCongViec)
//       .then((res) => {
//         console.log(res);
//         setListJob(res.data.content);
//       })
//       .catch((err) => {
//         // console.log(err);
//       });
//   }, []);

//   //    Tạo hàm function riêng để rander, tiện cho việc bảo trì code sau này
//   const handleRender = () => {
//     return (
//       <div className="py-3">
//         <div className="">
//           <div className="">
//             <div className="container_type_jobs">
//               <TypeJobs />
//             </div>
//             <div className="flex items-center pt-3">
//               <div
//                 style={{ borderRadius: "10px" }}
//                 className="ml-2 p-1 hover:bg-slate-300"
//               >
//                 <Link className="flex items-center" to={pathDefault.homePage}>
//                   <HomeIconListJob width={"20px"} height={"20px"} />
//                 </Link>
//               </div>
//               <div className="ml-2">
//                 <h2 className="" style={{ fontWeight: 700, fontSize: "22px" }}>
//                   <span style={{ color: "rgb(159 161 166)" }}>/</span> List Jobs
//                 </h2>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="">
//           <p style={{ fontSize: "", fontWeight: 600 }} className="">
//             Result for:{" "}
//             <span style={{ fontSize: "18px" }} className="">
//               {resultSearch}
//             </span>
//           </p>
//         </div>
//         <div className="container my-3 mx-auto px-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
//           {/*  */}
//           {listJob.map((item, index) => {
//             // console.log(item);
//             return (
//               <div
//                 className="rounded-md shadow-xl mt-2 pb-2 hover:bg-slate-200 duration-300"
//                 key={index}
//               >
//                 <Link
//                   className="item_jobs_search"
//                   to={`${pathDefault.detail}?detail=${item.id}`}
//                 >
//                   <div className="item_image-search">
//                     <img
//                       className="w-full rounded-lg"
//                       src={item.congViec.hinhAnh}
//                       alt=""
//                     />
//                   </div>
//                   {/* info */}
//                   <div
//                     style={{ overflow: "hidden" }}
//                     className="flex px-3 space-x-3 items-center mt-2"
//                   >
//                     <img
//                       src={item.avatar}
//                       className="w-10 h-10 rounded-full"
//                       alt=""
//                     />
//                     {/* tên tác giả */}
//                     <div className="">
//                       <h4 style={{ fontWeight: 600 }}>{item.tenNguoiTao}</h4>
//                       <p>Cấp độ 2</p>
//                     </div>
//                   </div>
//                   {/* tên công việc */}
//                   <h3 className="px-1">{item.congViec.tenCongViec}</h3>
//                   {/* đánh giá */}
//                   <div className="space-x-1 px-1">
//                     <span style={{ fontWeight: 600 }}>
//                       {item.congViec.saoCongViec}
//                     </span>
//                     <i className="fa-solid fa-star text-yellow-500"></i>

//                     <span>({item.congViec.danhGia})</span>
//                   </div>
//                   {/* yêu thích và giá tiền */}
//                   <div className="flex items-center justify-center">
//                     <i className="fa-solid fa-heart"></i>
//                     <div className="space-x-3">
//                       <span className="uppercase">Staring at</span>
//                       <span className="font-semibold">
//                         ${item.congViec.giaTien} USD
//                       </span>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   };

//   return <div>{handleRender()}</div>;
// };

// export default ListJobPage;

import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { congViecService } from "../../services/congViec.service";
import { pathDefault } from "../../common/path";
import "./style.scss";
import HomeIconListJob from "../InfoListJobPage/HomeIconListJob";
import TypeJobs from "../InfoListJobPage/TyepeJobs";
import { Spin } from "antd";

const ListJobPage = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const [listJob, setListJob] = useState([]);
  const navigate = useNavigate();
  let resultSearch = searchParam.get("tenCongViec");

  useEffect(() => {
    let tenCongViec = searchParam.get("tenCongViec");
    // console.log(tenCongViec);
    // console.log(tenCongViec);
    congViecService
      .layCongViecTheoTen(tenCongViec)
      .then((res) => {
        console.log(res);
        setListJob(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchParam]);
  console.log(searchParam);

  const handleRender = () => {
    return (
      <div className="py-3">
        <div className="">
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
        </div>
        <div className="">
          <p style={{ fontSize: "", fontWeight: 600 }} className="">
            Result for:{" "}
            <span style={{ fontSize: "18px" }} className="">
              {resultSearch}
            </span>
          </p>
        </div>
        {/* <div className="container my-3 mx-auto px-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
          {listJob.map((item, index) => {
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
                  <div
                    style={{ overflow: "hidden" }}
                    className="flex px-3 space-x-3 items-center mt-2"
                  >
                    <img
                      src={item.avatar}
                      className="w-10 h-10 rounded-full"
                      alt=""
                    />
                    <div className="">
                      <h4 style={{ fontWeight: 600 }}>{item.tenNguoiTao}</h4>
                      <p>Cấp độ 2</p>
                    </div>
                  </div>
                  <h3 className="px-1">{item.congViec.tenCongViec}</h3>
                  <div className="space-x-1 px-1">
                    <span style={{ fontWeight: 600 }}>
                      {item.congViec.saoCongViec}
                    </span>
                    <i className="fa-solid fa-star text-yellow-500"></i>
                    <span>({item.congViec.danhGia})</span>
                  </div>
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
        </div> */}
        <div className="">
          {listJob.length > 0 ? (
            <div className="container my-3 mx-auto px-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
              {listJob.map((item, index) => {
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
                      <div
                        style={{ overflow: "hidden" }}
                        className="flex px-3 space-x-3 items-center mt-2"
                      >
                        <img
                          src={item.avatar}
                          className="w-10 h-10 rounded-full"
                          alt=""
                        />
                        <div className="">
                          <h4 style={{ fontWeight: 600 }}>
                            {item.tenNguoiTao}
                          </h4>
                          <p>Cấp độ 2</p>
                        </div>
                      </div>
                      <h3 className="px-1">{item.congViec.tenCongViec}</h3>
                      <div className="space-x-1 px-1">
                        <span style={{ fontWeight: 600 }}>
                          {item.congViec.saoCongViec}
                        </span>
                        <i className="fa-solid fa-star text-yellow-500"></i>

                        <span>({item.congViec.danhGia})</span>
                      </div>
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
                  No Job !
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

  return <div>{handleRender()}</div>;
};

export default ListJobPage;
