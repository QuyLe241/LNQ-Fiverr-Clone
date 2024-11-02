import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";
import { pathDefault } from "../../../common/path";
import "./styleDrawer.scss";

const DropDownFiverrPro = () => {
  const items = [
    {
      label: (
        <div className="py-2 px-2" style={{ fontSize: "20px" }}>
          <Link to={pathDefault.proService}>Pro services</Link>
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <div className="py-2 mx-2" style={{ fontSize: "20px" }}>
          <Link to={pathDefault.proService}>Looking hire</Link>
        </div>
      ),
      key: "1",
    },
  ];
  return (
    <div>
      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}
        className="hover:bg-gray-100 rounded-sm duration-300"
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Fiverr Pro
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};

export default DropDownFiverrPro;
