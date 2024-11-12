import React, { useState } from "react";
import { Button, Modal } from "antd";

const ModalEditInfo = () => {
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
      <Button
        className=""
        style={{ fontWeight: 600 }}
        type=""
        onClick={showModal}
      >
        Chỉnh sửa thông tin
      </Button>
      <Modal
        className="moadl_edit_infor"
        title="Chỉnh sửa thông tin"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="">
          <form action=""></form>
        </div>
      </Modal>
    </div>
  );
};

export default ModalEditInfo;
