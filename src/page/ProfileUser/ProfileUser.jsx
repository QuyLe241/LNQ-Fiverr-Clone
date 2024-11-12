import React, { useEffect, useState } from "react";
import HomeInAdminLog from "../../icon/HomeInAdminLog";
import { Link } from "react-router-dom";
import "./style.scss";
import { removeLocalStorage, getLocalStorage } from "../../utils/utils";
import { nguoiDungService } from "../../services/nguoiDung.service";
import { useDispatch } from "react-redux";
import { Modal } from "antd";
import ModalEditInfo from "./ModalEditInfo";

const ProfileUser = () => {
  const dispatch = useDispatch();
  const [infoUser, setInfoUser] = useState(null);
  console.log(infoUser);
  useEffect(() => {
    const idUser = getLocalStorage("user").user.id;
    console.log(idUser);
    // get info user
    nguoiDungService
      .handleInfoUser(idUser)
      .then((res) => {
        setInfoUser(res.data.content);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container">
      <div className="">
        <div className="flex header_profileUser justify-around items-center py-3">
          <Link to={"/"} className="flex items-end hover:text-green-500">
            <HomeInAdminLog width={"25px"} height={"25px"} />
            <span style={{ fontWeight: 600 }}>Home</span>
          </Link>
          <div className="profileUser_btn_logout">
            <button
              onClick={() => {
                removeLocalStorage("user");
                window.location.href = "/";
              }}
            >
              Log out
            </button>
          </div>
        </div>
        <div className="">
          {/* <div className="title_profileUser flex justify-center mt-2 py-3">
            <h3>
              Hello <span style={{ fontWeight: 700 }}>{infoUser.data}</span>
            </h3>
          </div>
          <div className="">
            <div className="info_user">
              <img src={""} alt="Avatar" />
            </div>
          </div> */}
          {infoUser && (
            <div className="container">
              <div className="title_profileUser flex justify-center mt-2 py-3">
                <h3>
                  Hello <span style={{ fontWeight: 700 }}>{infoUser.name}</span>
                </h3>
              </div>
              <div className="">
                <div className="image_user flex justify-center">
                  <img
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "50%",
                    }}
                    src={infoUser.avatar}
                    alt="Avatar"
                  />
                </div>
                <div className="flex justify-center mt-2">
                  <form action="" onChange={{}}>
                    <div className="input_update_avatar">
                      <label id="" htmlFor="upavatar">
                        Update Avatar
                      </label>
                      <input
                        name="upavatar"
                        id="upavatar"
                        type="file"
                        className="custom_input_avatar"
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className="mt-3 py-3">
                <div className="flex justify-center">
                  <h3 style={{ fontSize: "20px", fontWeight: 600 }}>
                    Your Profile
                  </h3>
                </div>
                <div className="infor_profile_user py-3">
                  <p className="">Name: {infoUser.name}</p>
                  <p>Email: {infoUser.email}</p>
                  <p>Phone: {infoUser.phone}</p>
                  <p>Gender: {infoUser.gender ? "Nam" : "Nữ"}</p>
                  <p>Birthday: {infoUser.birthday}</p>
                  <p>Role: {infoUser.role}</p>
                  <div className="">
                    <p>Skill</p>
                    <ul className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-3">
                      {infoUser.skill.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="">
                    <p>Certification</p>
                    <ul className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-3">
                      {infoUser.certification.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="edit_info flex justify-center my-2">
                    <ModalEditInfo />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
