import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { congViecService } from "../../services/congViec.service";
import { pathDefault } from "../../common/path";
import "./style.scss";

const ListJobPage = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const [listJob, setListJob] = useState([]);
  //   console.log(searchParam.get("tenCongViec"));
  //  dùng để lấy các phần tử ở trên thanh url.
  //  ở sau tenCongViec. VD: ....tenCongViec=design   => clg: design

  //  navigate
  const navigate = useNavigate();
  let resultSearch = searchParam.get("tenCongViec");
  useEffect(() => {
    let tenCongViec = searchParam.get("tenCongViec");
    console.log(tenCongViec);
    congViecService
      .layCongViecTheoTen(tenCongViec)
      .then((res) => {
        console.log(res);
        setListJob(res.data.content);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  //    Tạo hàm function riêng để rander, tiện cho việc bảo trì code sau này
  const handleRender = () => {
    return (
      <div className="py-3">
        <div className=""></div>
        <div className="">
          <p style={{ fontSize: "", fontWeight: 600 }} className="">
            Kết quả tìm kiếm về:{" "}
            <span style={{ fontSize: "18px" }} className="">
              {resultSearch}
            </span>
          </p>
        </div>
        <div className="container my-5 mx-auto px-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
          {/*  */}
          {listJob.map((item, index) => {
            // console.log(item);
            return (
              <div
                className="rounded-md shadow-xl hover:bg-slate-200 duration-300"
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
                  <div className="flex px-3 space-x-3 items-center mt-2">
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
                  <h3>{item.congViec.tenCongViec}</h3>
                  {/* đánh giá */}
                  <div className="space-x-2">
                    <i className="fa-solid fa-star text-yellow-500"></i>
                    <span style={{ fontWeight: 600 }}>
                      {item.congViec.saoCongViec}
                    </span>
                    <span>({item.congViec.danhGia})</span>
                  </div>
                  {/* yêu thích và giá tiền */}
                  <div className="flex items-center justify-center">
                    <i className="fa-solid fa-heart"></i>
                    <div className="space-x-3">
                      <span className="uppercase">Staring at</span>
                      <span className="font-semibold">
                        ${item.congViec.giaTien}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return <div>{handleRender()}</div>;
};

export default ListJobPage;
