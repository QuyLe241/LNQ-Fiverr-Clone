import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StarReivew from "./Icon/StarReivew";
import { useSearchParams } from "react-router-dom";
import { getListReviewJob } from "../../redux/reviewJob";
import { Rate, Empty } from "antd";
import { congViecService } from "../../services/congViec.service";
import { string } from "yup";
import { NotificationContext } from "../../App";

const ReviewJob = () => {
  const { handleNotification } = useContext(NotificationContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const idJob = searchParams.get("detail");
  console.log(idJob);
  const { listReviewJob } = useSelector((state) => state.ReviewJob);
  const { user } = useSelector((state) => state.authSlice);
  console.log(listReviewJob);
  const [] = useState();
  const tokenUser = user.token;
  const [errEmpty, setErrEmpty] = useState("");

  const [dataReview, setDataReview] = useState({
    maCongViec: idJob,
    maNguoiBinhLuan: user.user.id,
    ngayBinhLuan: new Date().toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }),
    noiDung: "",
    saoBinhLuan: 5,
  });
  console.log("datareview", dataReview);

  //  handle review job
  const reviewJob = async (e) => {
    e.preventDefault();

    if (!dataReview.noiDung.trim()) {
      handleNotification("Review content cannot be empty", "error");
      return;
    }
    try {
      const res = await congViecService.reviewJob(tokenUser, dataReview);
      console.log("res", res);
      dispatch(getListReviewJob(idJob));
      setDataReview({
        ...dataReview,
        noiDung: "",
        saoBinhLuan: 5, // Giá trị mặc định
      });
      handleNotification("Review success", "success");
    } catch (error) {
      console.log(error);
      handleNotification("Review fail", "error");
    }
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListReviewJob(idJob));
  }, [dispatch, idJob]);
  return (
    <div className="py-3 my-2">
      <div className="">
        <h5
          style={{
            color: "#404145",
            fontSize: "20px",
            fontWeight: 600,
          }}
        >
          Riviews
        </h5>
      </div>
      <div className="flex items-center">
        <span className="" style={{ fontWeight: 600 }}>
          Review Clients
        </span>
        <div className="pl-2 flex">
          <div className=""></div>
          {/* <StarReivew width={"20px"} height={"20px"} />
          <StarReivew width={"20px"} height={"20px"} />
          <StarReivew width={"20px"} height={"20px"} />
          <StarReivew width={"20px"} height={"20px"} />
          <StarReivew width={"20px"} height={"20px"} /> */}
        </div>
      </div>
      <div className="content_review mt-3">
        {listReviewJob.length > 0 ? (
          <div className=" py-1 px-2 ">
            {listReviewJob.map((item, index) => {
              //   console.log(item);
              return (
                <div
                  key={index}
                  className="rounded-lg py-3 px-3 my-3"
                  style={{ border: "1px rgb(219 222 230) solid" }}
                >
                  <div className="flex items-end space-x-3">
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
                    <div className="">
                      <div className="">
                        <p style={{ fontWeight: 600, fontSize: "18px" }}>
                          {item.tenNguoiBinhLuan}
                        </p>
                      </div>
                      <div className="">
                        <p></p>
                        <p style={{ fontSize: "14px", color: "#62646a" }}>
                          <span style={{ fontSize: "16px" }}>Date: </span>
                          {item.ngayBinhLuan === "string"
                            ? new Date().toLocaleDateString("vi-VN", {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                              })
                            : item.ngayBinhLuan}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="py-3 my-3"
                    style={{ borderTop: "1px rgb(229 232 238) solid" }}
                  >
                    <div className="">
                      <Rate disabled={true} value={item.saoBinhLuan} />
                    </div>
                    <div className="mt-2">
                      <p style={{ fontWeight: 600, color: "rgb(92 93 95)" }}>
                        {item.noiDung}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="">
            <Empty description={"No Review"} />
          </div>
        )}
      </div>
      <div className="py-5 mt-2 flex justify-center">
        <form action="" onSubmit={reviewJob} className="w-4/5">
          <div className="py-3 flex justify-center  ">
            <Rate
              onChange={(value) => {
                // console.log(value);
                setDataReview({ ...dataReview, saoBinhLuan: value });
              }}
              style={{ fontSize: "30px" }}
            />
          </div>
          <div className="mt-2">
            <input
              className="py-2 px-1 w-full rounded-md border border-gray-500 focus:outline-green-500"
              placeholder="Review Job"
              type="text"
              value={dataReview.noiDung}
              onChange={(e) => {
                setDataReview({ ...dataReview, noiDung: e.target.value });
              }}
            />
            {/* {errEmpty == "" ? <p className="text-red-600">empty</p> : ""} */}
          </div>
          <div className="py-3 flex justify-center">
            <button
              type="submit"
              style={{ fontWeight: 600 }}
              className="py-2 w-4/5 duration-300 bg-green-600 rounded-lg hover:bg-green-500 text-white"
            >
              Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewJob;
