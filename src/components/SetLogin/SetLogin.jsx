import React, { useEffect, useState } from "react";
import "./style.scss";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";
import { pathDefault } from "../../common/path";
import { getLocalStorage, removeLocalStorage } from "../../utils/utils";
import { nguoiDungService } from "../../services/nguoiDung.service";

const SetLogin = () => {
  const [dataUser, setDataUser] = useState(null);
  const items = [
    {
      label: (
        <Link to={pathDefault.profileuser}>
          <div className="updateProfile">
            <span>Update Avatar</span>
          </div>
        </Link>
      ),
      key: "0",
    },
    {
      label: (
        <Link to={pathDefault.profileuser}>
          <div className="updateProfile">
            <span>Profile</span>
          </div>
        </Link>
      ),
      key: "1",
    },
    {
      label: (
        <div className="btn_logout">
          <button
            onClick={() => {
              removeLocalStorage("user");
              window.location.href = "/";
            }}
          >
            Log out
          </button>
        </div>
      ),
      key: "2",
    },
  ];
  const [infoUser, setInfoUser] = useState(null);
  // console.log(getLocalStorage("user"));
  useEffect(() => {
    // Lấy dữ liệu người dùng từ localStorage và cập nhật state
    const data = getLocalStorage("user");
    setDataUser(data);
    const idUser = getLocalStorage("user").user.id;
    console.log(idUser);
    // get info user
    nguoiDungService
      .handleInfoUser(idUser)
      .then((res) => {
        setInfoUser(res.data.content);
        // console.log(res);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);
  return (
    <div>
      <Dropdown
        className="hover:cursor-pointer"
        menu={{
          items,
        }}
        trigger={["click"]}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <div className="">
              {infoUser && (
                <>
                  <img
                    src={infoUser.avatar}
                    style={{
                      width: "39px",
                      height: "39px",
                      borderRadius: "50%",
                    }}
                    alt={`ID:${infoUser.id}`}
                  />
                  {/* <h3>{dataUser.user.email}</h3> */}
                </>
              )}
            </div>
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};

export default SetLogin;
