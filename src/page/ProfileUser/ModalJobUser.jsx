import React, { useContext, useEffect, useState } from "react";
import { Button, Modal, message, Popconfirm } from "antd";
import CartShop from "./IconProfileUse/CartShop";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { getListJobUser } from "../../redux/jobUserSlice";
import { Link } from "react-router-dom";
import StarRate from "./IconProfileUse/StarRate";
import { pathDefault } from "../../common/path";
import { congViecService } from "../../services/congViec.service";
import { NotificationContext } from "../../App";

const ModalJobUser = () => {
  const { handleNotification } = useContext(NotificationContext);
  const dispatch = useDispatch();
  const [handleListJob, setHandleListJob] = useState([]);
  const { user } = useSelector((state) => state.authSlice);
  const { listJobUser } = useSelector((state) => state.jobUserSlice);
  //   setHandleListJob(listJobUser);
  const tokenUser = user.token;
  //   console.log(tokenUser);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  //      popconfirm delete
  const confirm = (e) => {
    console.log(e);
    message.success("Click on Yes");
  };
  const cancel = (e) => {
    console.log(e);
    message.error("You have canceled the task");
  };

  //   heandle delete
  const handleDeleteJob = async (idJob) => {
    // const id = handleListJob.congViec.id;
    try {
      const res = await congViecService.deleteJob(tokenUser, idJob);
      dispatch(getListJobUser(tokenUser));
      setHandleListJob(listJobUser);
      console.log(res);
      handleNotification("Delete job success", "success");
    } catch (error) {
      console.log(error);
      setHandleListJob(tokenUser);
      handleNotification("Delete job fail", "error");
    }
  };

  //      useEffect

  useEffect(() => {
    dispatch(getListJobUser(tokenUser));
    // console.log("1", listJobUser);
    setHandleListJob(listJobUser);
  }, []);
  return (
    <div className="modal_list_job">
      <Button type="" onClick={showModal}>
        <CartShop width={"20px"} height={"20px"} fill={"#4096ff"} />
      </Button>
      <Modal
        className="list_jobs_user"
        title="Your information Jobs"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="">
          {listJobUser.map((item, index) => {
            // console.log(item);
            const idJob = item.id;
            // console.log(idJob);
            return (
              <div className="">
                <div className="py-2 flex">
                  <div className="w-1/4 flex items-center">
                    <img style={{}} src={item.congViec.hinhAnh} alt="" />
                  </div>
                  <div className="w-3/4 pl-2">
                    <p style={{ fontSize: "18px" }}>
                      {item.congViec.tenCongViec}
                    </p>
                    <p style={{ fontSize: "18px", fontWeight: 600 }}>
                      Price {item.congViec.giaTien} $USD
                    </p>
                    <div className="rate flex items-center">
                      <div className="flex items-center">
                        <span
                          style={{
                            fontWeight: 600,
                            fontSize: "20px",
                            color: "#FF9800",
                          }}
                        >
                          {item.congViec.saoCongViec}
                        </span>
                        <StarRate
                          width={"20px"}
                          height={"20px"}
                          fill={"#FF9800"}
                        />
                      </div>
                      <div className="">
                        <span style={{ fontSize: "18px" }}>
                          ({item.congViec.danhGia})
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn_group flex justify-around items-center">
                  <div className="">
                    <Link
                      to={`${pathDefault.detail}?detail=${item.congViec.id}`}
                      style={{
                        fontWeight: 600,
                        border: "1px rgb(34 197 94) solid",
                      }}
                      className="text-green-500 hover:text-white hover:bg-green-500 px-3 py-2 rounded-lg"
                    >
                      View details
                    </Link>
                  </div>
                  <div className="">
                    <Popconfirm
                      title="Delete the task"
                      description="Are you sure to delete this task?"
                      onConfirm={() => {
                        handleDeleteJob(idJob);
                        console.log(idJob);
                      }}
                      onCancel={cancel}
                      okText="Yes"
                      cancelText="No"
                    >
                      <Button
                        danger
                        // onClick={() => {

                        // }}
                      >
                        Delete
                      </Button>
                    </Popconfirm>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Modal>
    </div>
  );
};

export default ModalJobUser;
