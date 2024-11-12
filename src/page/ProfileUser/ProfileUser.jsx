import React, { useEffect, useState } from "react";
import HomeInAdminLog from "../../icon/HomeInAdminLog";
import { Link } from "react-router-dom";
import "./style.scss";
import { removeLocalStorage, getLocalStorage } from "../../utils/utils";
import { nguoiDungService } from "../../services/nguoiDung.service";
import { useDispatch } from "react-redux";

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
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
