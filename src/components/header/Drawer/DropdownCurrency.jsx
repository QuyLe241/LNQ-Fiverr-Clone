import React, { useState } from "react";
import SetLanguage from "../SetLanguage";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space, Button, Modal, Drawer } from "antd";

const DropdownCurrency = () => {
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
  return (
    <div>
      <button className="hover:text-green-500" onClick={showModal}>
        <i class="fa-solid fa-dollar-sign"></i> Currency
      </button>
      <Modal
        title="Select your preferences"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <SetLanguage />
      </Modal>
    </div>
  );
};

export default DropdownCurrency;
