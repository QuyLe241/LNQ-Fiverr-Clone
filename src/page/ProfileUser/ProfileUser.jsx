import React from "react";
import HomeInAdminLog from "../../icon/HomeInAdminLog";
import { Link } from "react-router-dom";
import "./style.scss";
import { removeLocalStorage } from "../../utils/utils";

const ProfileUser = () => {
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
          <div className="title_profileUser flex justify-center mt-2 py-3">
            <h3>Hello</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
