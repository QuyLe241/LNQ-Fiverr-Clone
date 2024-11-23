// import React, { useEffect, useState } from "react";
// import "./styleListJobs.scss";
// import { congViecService } from "../../services/congViec.service";
// import { Link } from "react-router-dom";
// import Star from "./Star";
// import { Spin, Modal, Button, Slider, Switch } from "antd";
// import { pathDefault } from "../../common/path";
// import HomeIconListJob from "./HomeIconListJob";
// import TypeJobs from "./TyepeJobs";
// import FilterIcon from "./FilterIcon";

// const ListJobsPage = () => {
//   const [listJobs, setListJobs] = useState([]);
//   const [listTypeJob, setListTypeJob] = useState([]);
//   //   const listJobs = () => {};
//   //   listJobs ,layCongViecTheoTen
//   useEffect(() => {
//     congViecService
//       .listJobs()
//       .then((res) => {
//         // console.log(res);
//         setListJobs(res.data.content);
//       })
//       .catch((err) => {});
//   }, []);

//   // Modal
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const showModal = () => {
//     setIsModalOpen(true);
//   };
//   const handleOk = () => {
//     setIsModalOpen(false);
//   };
//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };

//   useEffect(() => {}, []);
//   return (
//     <div>
//       <div className="container px-1 mx-auto ">
//         <div className="">
//           <div className="container_type_jobs">
//             <TypeJobs />
//           </div>
//           <div className="flex justify-between items-center">
//             <div className="flex items-center pt-3">
//               <div
//                 style={{ borderRadius: "10px" }}
//                 className="ml-2 p-1 hover:bg-slate-300"
//               >
//                 <Link className="flex items-center" to={pathDefault.homePage}>
//                   <HomeIconListJob width={"20px"} height={"20px"} />
//                 </Link>
//               </div>
//               <div className=""></div>
//               <div className="ml-2">
//                 <h2 className="" style={{ fontWeight: 700, fontSize: "25px" }}>
//                   <span style={{ color: "rgb(159 161 166)" }}>/</span> List Jobs
//                 </h2>
//               </div>
//             </div>
//             <div className="filter_jobs">
//               <Button
//                 style={{ border: "2px black solid", fontWeight: 600 }}
//                 type=""
//                 className="hover:text-green-500"
//                 onClick={showModal}
//               >
//                 <FilterIcon width={"16px"} height={"16px"} fill={"black"} />
//                 Filter
//               </Button>
//               <Modal
//                 className="modal_filter"
//                 title="Filter Jobs"
//                 open={isModalOpen}
//                 onCancel={handleCancel}
//               >
//                 <div className="">
//                   <form action="">
//                     <Slider
//                       range
//                       min={0}
//                       max={1000}
//                       step={10}
//                       defaultValue={[50, 500]}
//                       onChangeComplete={(value) => {
//                         console.log(value);
//                       }}
//                     />
//                     <div className="mt-5 flex justify-end space-x-3">
//                       <button
//                         type="button"
//                         className="py-1 px-5 border-2 border-gray-900 rounded-xl duration-200 hover:bg-black hover:text-white"
//                         onClick={() => {
//                           handleCancel();
//                         }}
//                       >
//                         Cancel
//                       </button>
//                       <button
//                         type="button"
//                         className="py-1 px-5 border-2 border-green-500 text-green-600 duration-200 rounded-xl hover:bg-green-500 hover:text-white"
//                         onClick={() => {
//                           handleOk();
//                         }}
//                       >
//                         Filter
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </Modal>
//             </div>
//           </div>
//         </div>
//         <div className="list_jobs">
//           {listJobs.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
//               {listJobs.map((item, index) => {
//                 //   console.log(item);
//                 return (
//                   <div
//                     className="my-3 pb-2 shadow-xl rounded-md hover:bg-slate-200 duration-300"
//                     key={index}
//                   >
//                     <Link to={`${pathDefault.detail}?detail=${item.id}`}>
//                       <div className="item_jobs_style">
//                         <div className="image_jobs">
//                           <img
//                             className="w-full rounded-lg"
//                             src={item.hinhAnh}
//                             alt=""
//                           />
//                         </div>
//                         <div className="name_jobs mt-1 px-1">
//                           <span className="" style={{ color: "#404145" }}>
//                             {item.tenCongViec}
//                           </span>
//                         </div>
//                         <div className="px-2">
//                           <div className="rate flex items-center mt-2">
//                             <Star />
//                             <span
//                               style={{ color: "#e1a01b" }}
//                               className="ml-1 font-bold"
//                             >
//                               {item.saoCongViec}
//                             </span>
//                             <span className="ml-1">({item.danhGia})</span>
//                           </div>
//                           <div className="star"></div>
//                         </div>
//                         <div className="price mt-1 px-2">
//                           <span className="font-bold">
//                             From{" "}
//                             {item.giaTien.toLocaleString("en-US", {
//                               style: "currency",
//                               currency: "USD",
//                             })}
//                           </span>
//                         </div>
//                         <div className="see_details">
//                           <span>See details</span>
//                         </div>
//                       </div>
//                     </Link>
//                   </div>
//                 );
//               })}
//             </div>
//           ) : (
//             <div className="loading_jobs py-5">
//               <div className="">
//                 <p
//                   className="flex justify-center text-blue-500"
//                   style={{ fontSize: "20px", fontWeight: 600 }}
//                 >
//                   Loading Jobs
//                 </p>
//               </div>
//               <div className="flex justify-center py-3">
//                 <Spin size="large" />
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ListJobsPage;

import React, { useEffect, useState } from "react";
import "./styleListJobs.scss";
import { congViecService } from "../../services/congViec.service";
import { Link } from "react-router-dom";
import Star from "./Star";
import { Spin, Modal, Button, Slider } from "antd";
import { pathDefault } from "../../common/path";
import HomeIconListJob from "./HomeIconListJob";
import TypeJobs from "./TyepeJobs";
import FilterIcon from "./FilterIcon";

const ListJobsPage = () => {
  const [listJobs, setListJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    congViecService
      .listJobs()
      .then((res) => {
        setListJobs(res.data.content);
        setFilteredJobs(res.data.content);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    applyFilter();
    console.log("filteredJobs", filteredJobs);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const applyFilter = () => {
    const filtered = listJobs.filter(
      (job) => job.giaTien >= priceRange[0] && job.giaTien <= priceRange[1]
    );
    setFilteredJobs(filtered);
  };

  return (
    <div>
      <div className="container px-1 mx-auto ">
        <div className="">
          <div className="container_type_jobs">
            <TypeJobs />
          </div>
          <div className="flex justify-between items-center content_top_env">
            <div className="flex items-center pt-3">
              <div
                style={{ borderRadius: "10px" }}
                className="ml-2 p-1 hover:bg-slate-300"
              >
                <Link className="flex items-center" to={pathDefault.homePage}>
                  <HomeIconListJob width={"20px"} height={"20px"} />
                </Link>
              </div>
              <div className=""></div>
              <div className="ml-2">
                <h2 className="" style={{ fontWeight: 700, fontSize: "25px" }}>
                  <span style={{ color: "rgb(159 161 166)" }}>/</span> List Jobs
                </h2>
              </div>
            </div>
            <div className="filter_jobs">
              <Button
                style={{ border: "2px black solid", fontWeight: 600 }}
                type=""
                className=" btn_modal_filter"
                onClick={showModal}
              >
                <FilterIcon width={"16px"} height={"16px"} fill={"black"} />
                Filter
              </Button>
              <Modal
                className="modal_filter"
                title="Filter Jobs"
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
              >
                <div className="">
                  <form action="">
                    <div className="">
                      <span style={{ fontWeight: 600 }}>Price</span>
                    </div>
                    <Slider
                      range
                      min={0}
                      max={200}
                      step={2}
                      defaultValue={priceRange}
                      onChange={(value) => {
                        setPriceRange(value);
                      }}
                    />
                    <div className="mt-5 flex justify-end space-x-3">
                      <button
                        type="button"
                        className="py-1 px-5 border-2 border-gray-900 rounded-xl duration-200 hover:bg-black hover:text-white"
                        onClick={handleCancel}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="btn_handle_filter py-1 px-5 border-2 border-green-500 text-green-600 duration-200 rounded-xl hover:bg-green-500 hover:text-white"
                        onClick={handleOk}
                      >
                        Filter
                      </button>
                    </div>
                  </form>
                </div>
              </Modal>
            </div>
          </div>
        </div>
        <div className="list_jobs">
          {filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
              {filteredJobs.map((item, index) => (
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
              ))}
            </div>
          ) : (
            <div className="loading_jobs py-5">
              <div className="">
                <p
                  className="flex justify-center text-blue-500"
                  style={{ fontSize: "20px", fontWeight: 600 }}
                >
                  No Jobs
                </p>
              </div>
              <div className="flex justify-center py-3">
                <Spin size="large" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListJobsPage;
