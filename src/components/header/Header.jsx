import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logoHeader from "../../assets/svg/logoHeader.svg";
import IconLogoHeader from "../../icon/IconLogoHeader";
import { pathDefault } from "../../common/path.js";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space, Button, Modal, Drawer } from "antd";
// import { Button, Modal } from 'antd';
import "./header.scss";
import LinkCustom from "../LinkCustom/LinkCustom.jsx";
import FormSearchProduct from "../FormSearchProduct/FormSearchProduct.jsx";
import IconEng from "./IconEng.jsx";
import SetLanguage from "./SetLanguage.jsx";
import LoginPage from "../../page/Login/LoginPage.jsx";
import FromSearchMobie from "../FormSearchProductMobie/FromSearchMobie.jsx";
import DrawerMobie from "./Drawer/DrawerMobie.jsx";
import SetLogin from "../SetLogin/SetLogin.jsx";
import { getLocalStorage } from "../../utils/utils.js";

const Header = () => {
  const fiverrPro = [
    {
      key: "0",
      label: (
        <NavLink to={pathDefault.proService}>
          {" "}
          <div
            className="rounded-lg p-4 flex space-x-5"
            style={{ border: "1px solid #e4e5e7" }}
          >
            <div className="flex justify-center items-center">
              <i class="fa-solid fa-pen size-6"></i>
            </div>
            <div className="">
              <span style={{ fontWeight: 600, fontSize: "15px" }}>
                Looking to hire
              </span>
              <p style={{ fontSize: "15px", color: "#62646a" }}>
                I’d like to work on business projects as a <br /> Pro freelancer
                or agency.
              </p>
            </div>
          </div>
        </NavLink>
      ),
    },
    {
      key: "1",
      label: (
        <NavLink to={pathDefault.proService}>
          {" "}
          <div
            className="rounded-lg p-4 flex space-x-5"
            style={{ border: "1px solid #e4e5e7" }}
          >
            <div className="flex justify-center items-center">
              <i class="fa-solid fa-pen size-6"></i>
            </div>
            <div className="">
              <span style={{ fontWeight: 600, fontSize: "15px" }}>
                I want to offer Pro services
              </span>
              <p style={{ fontSize: "15px", color: "#62646a" }}>
                I’d like to work on business projects as a <br /> Pro freelancer
                or agency.
              </p>
            </div>
          </div>
        </NavLink>
      ),
    },
  ];

  const explore = [
    {
      key: "0",
      label: (
        <Link to={"/dang-nhap"}>
          <div className="">
            <span style={{ fontWeight: 600, fontSize: "15px", color: "" }}>
              Answers
            </span>
            <p style={{ color: "#62646a" }}>
              Powered by AI, answered by Fiverr freelancers
            </p>
          </div>
        </Link>
      ),
    },
    {
      key: "1",
      label: (
        <Link to={"#"}>
          <div className="">
            <span style={{ fontWeight: 600, fontSize: "15px", color: "" }}>
              Community
            </span>
            <p style={{ color: "#62646a" }}>
              Connect with Fiverr’s team and community
            </p>
          </div>
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link to={"#"}>
          <div className="">
            <span style={{ fontWeight: 600, fontSize: "15px", color: "" }}>
              Guides
            </span>
            <p style={{ color: "#62646a" }}>
              In-depth guides covering business topics
            </p>
          </div>
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link to={"#"}>
          <div className="">
            <span style={{ fontWeight: 600, fontSize: "15px", color: "" }}>
              Podcast
            </span>
            <p style={{ color: "#62646a" }}>
              Inside tips from top business minds
            </p>
          </div>
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link to={"#"}>
          <div className="">
            <span style={{ fontWeight: 600, fontSize: "15px", color: "" }}>
              Learn
            </span>
            <p style={{ color: "#62646a" }}>
              Professional online courses, led by experts
            </p>
          </div>
        </Link>
      ),
    },
    {
      key: "5",
      label: (
        <Link to={"#"}>
          <div className="">
            <span style={{ fontWeight: 600, fontSize: "15px", color: "" }}>
              Blog
            </span>
            <p style={{ color: "#62646a" }}>
              News, information and community stories
            </p>
          </div>
        </Link>
      ),
    },
    {
      key: "6",
      label: (
        <Link to={"#"}>
          <div className="">
            <span style={{ fontWeight: 600, fontSize: "15px", color: "" }}>
              Logo Market
            </span>
            <p style={{ color: "#62646a" }}>Create your logo instantly</p>
          </div>
        </Link>
      ),
    },
  ];

  // modal
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

  const navigate = useNavigate();

  // Check for token
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = getLocalStorage("user");
    // const checkToken = token.token;
    if (token && token.token) {
      setIsLoggedIn(true);
    }
    // else {navigate(pathDefault.login)}
  }, []);

  //  mobie

  return (
    //    chỉnh container tại file configTailwind
    <header className="py-5 env_header" style={{ zIndex: "999" }}>
      <div className="container mx-auto px-1">
        <div
          style={{ fontWeight: 600, fontSize: "16px" }}
          className="header_content flex items-center justify-between"
        >
          <div className="header_logo flex items-center space-x-3">
            {/*   Sử dụng thẻ svg bằng cách tạo ra component chứa thẻ svg và gọi đến component header */}
            <Link to={pathDefault.homePage}>
              <IconLogoHeader width={"89px"} height={"27px"} />
            </Link>
            <FormSearchProduct />
          </div>
          <nav className="header_navigation space-x-5 flex items-center">
            <Dropdown
              menu={{
                items: fiverrPro,
              }}
              trigger={["click"]}
              className="cursor-pointer py-2 px-4 hover:bg-gray-100 rounded-sm duration-300"
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Fiverr Pro
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>

            <Dropdown
              menu={{
                items: explore,
              }}
              trigger={["click"]}
              className="cursor-pointer py-2 px-4 hover:bg-gray-100 rounded-sm duration-300"
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Explore
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            {/* modal */}
            <button className="hover:text-green-500" onClick={showModal}>
              <i class="fa-solid fa-globe "></i>English
            </button>
            <Modal
              title="Select your preferences"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <SetLanguage />
            </Modal>
            {/* modal */}
            <Link
              className="text-black hover:text-green-400"
              to={pathDefault.becomeASeller}
            >
              Become a Seller
            </Link>
            {/* text login */}
            {/* <LinkCustom
              content={"Sign in"}
              to={pathDefault.login}
              className={
                "border border-green-500 text-green-500 btn_login rounded-lg"
              }
            />
            <LinkCustom
              content={"Sign up"}
              to={pathDefault.register}
              className={
                "border bg-green-500 text-white btn_register rounded-lg"
              }
            /> */}
            {!isLoggedIn && (
              <>
                <LinkCustom
                  content={"Sign in"}
                  to={pathDefault.login}
                  className={
                    "set_login_account border border-green-500 text-green-500 btn_login rounded-lg"
                  }
                />
                <LinkCustom
                  content={"Sign up"}
                  to={pathDefault.register}
                  className={
                    "set_login_account border bg-green-500 text-white btn_register rounded-lg"
                  }
                />
              </>
            )}
            {/* text login */}
            {/* <div className="set_login">
              <SetLogin />
            </div> */}
            {isLoggedIn && (
              <div className="set_login">
                <SetLogin />
              </div>
            )}
          </nav>
        </div>
        <div className="headerContent_mobie">
          <div className="flex justify-between items-center">
            <div className="logo_mobie">
              <div className="">
                <Link to={"/"}>
                  <IconLogoHeader width={"89px"} height={"27px"} />
                </Link>
              </div>
            </div>
            <div className="drawer">
              <DrawerMobie />
            </div>
          </div>
          <div className="search_mobie mt-3">
            <div className="">
              <FromSearchMobie />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
