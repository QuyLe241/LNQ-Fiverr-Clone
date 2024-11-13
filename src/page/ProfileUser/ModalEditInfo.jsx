import React, { useContext, useEffect, useState } from "react";
import { Button, Modal, Select } from "antd";
import { useNavigate } from "react-router-dom";
import { NotificationContext } from "../../App";
import { nguoiDungService } from "../../services/nguoiDung.service";
import { skillService } from "../../services/skill.service";
import { useSelector } from "react-redux";
import InputCustom from "../../components/Input/InputCustom";

const ModalEditInfo = () => {
  const { user } = useSelector((state) => state.authSlice);
  console.log(user.user.id);

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
  //
  const navigate = useNavigate();
  const { handleNotification } = useContext(NotificationContext);

  //  tạo các step để chuyển hướng các bước khi tạo user
  const [isActiveBtn, setIsActiveBtn] = useState(true);

  const [optionListSkill, setOptionListKill] = useState([]);
  //  Lưu dữ liệu user
  const [userValue, setUserValue] = useState({
    name: "",
    email: "",
    passWord: "",
    phone: "",
    birthday: "",
    gender: true,
    role: "USER",
    skill: [],
    certification: [],

    // name: user.user.name,
    // email: user.user.email,
    // passWord: "",
    // phone: user.user.phone,
    // birthday: user.user.birthday.split("-").reverse().join("-"),
    // gender: user.user.gender,
    // role: user.user.role,
    // skill: [user.user.skill],
    // certification: [user.user.certification],
  });
  const handleChangeValue = (event) => {
    // name: tên thuộc tính, value : dữ liệu
    const { name, value } = event.target;
    // console.log(name, value);

    //  tránh trương hợp mất dữ liệu
    //  clone một object mới bằng ...object
    //  truyền tất cả các [name] là key của từng value và object mới
    //
    setUserValue({ ...userValue, [name]: value });
  };

  const handleChange = (value) => {
    // console.log(`selected ${value}`);
  };

  //  xử  lý tạo user
  const id = user.user.id;
  const handleSubmitFormEditUser = async (event) => {
    event.preventDefault();
    try {
      const res = await nguoiDungService.editProfileUser(id);
      console.log(res);
      handleNotification("Chỉnh sửa thành công", "success");
    } catch (err) {
      console.log(err);
      handleNotification("Chỉnh sửa thất bại", "error");
    }
  };

  useEffect(() => {
    const handleSkillUser = async () => {
      try {
        const res = await skillService.skillUser();
        // console.log(res);
        const listSkill = res.data.content.map((skill, index) => {
          // console.log(skill);
          return {
            babel: skill.tenSkill,
            value: skill.tenSkill,
          };
        });
        setOptionListKill(listSkill);
      } catch (err) {
        console.log(err);
      }
    };
    handleSkillUser();
    const handleGetProfileUser = async () => {};
  }, []);
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
          <form action="" onSubmit={handleSubmitFormEditUser}>
            <InputCustom
              placeHolder={user.user.name}
              value={user.user.name}
              classWrapper="mt-2"
              onChange={handleChangeValue}
              name={"name"}
              contentLable={"Name"}
            />
            <InputCustom
              placeHolder={user.user.email}
              value={user.user.email}
              classWrapper="mt-2"
              contentLable={"Email"}
              onChange={handleChangeValue}
              name={"email"}
            />
            <InputCustom
              placeHolder={user.user.phone}
              value={user.user.phone}
              classWrapper="mt-2"
              contentLable={"Phone"}
              onChange={handleChangeValue}
              name={"phone"}
            />
            <div className="w-full mt-2">
              <label
                htmlFor=""
                className="block mb-1 text-sm font-medium text-gray-900"
              >
                Giới tính
              </label>
              <select
                name="gender"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                id="gender"
                onChange={handleChangeValue}
              >
                <option value="" disabled hidden selected>
                  Chọn giới tính
                </option>
                <option value={true}>Nam</option>
                <option value={false}>Nữ</option>
              </select>
            </div>
            <div className="w-full mt-2">
              <label
                htmlFor=""
                className="w-full block mb-1 text-sm font-medium text-gray-900"
              >
                Ngày sinh
              </label>
              <input
                // chuyển đổi dữ liệu về đúng với format của input
                value={userValue.birthday.split("-").reverse().join("-")}
                className="p-2 rounded-lg"
                style={{ border: "1px rgb(209 213 219) solid" }}
                type="date"
                onChange={(e) => {
                  // console.log(e.target.value);
                  // const [year, month, day] = e.target.value.split("-");
                  // let valueDate = `${day}-${month}-${year}`;
                  const arrDate = e.target.value.split("-").reverse().join("-");
                  // console.log(arrDate);

                  setUserValue({ ...userValue, birthday: arrDate });
                }}
              />
            </div>
            <div className="w-full mt-2">
              <label
                htmlFor=""
                className="block mb-1 text-sm font-medium text-gray-900"
              >
                Chức vụ
              </label>
              <select
                disabled
                name="role"
                className="bg-gray-50 border hover:cursor-not-allowed border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                id="gender"
                onChange={handleChangeValue}
              >
                <option value={"USER"}></option>
              </select>
            </div>
            <div className="mt-2">
              {/* api select của antd có 2 option
            sử dụng api của antd để lấy value  */}
              <label
                htmlFor=""
                className="block mb-1 text-sm font-medium text-gray-900"
              >
                Skill
              </label>
              <Select
                value={user.user.skill}
                mode="tags"
                allowClear
                style={{
                  width: "100%",
                }}
                placeholder="Chọn skill"
                onChange={(value, option) => {
                  // console.log(option);
                  // console.log(value);
                  setUserValue({ ...userValue, skill: value });
                }}
                tokenSeparators={[","]}
                options={optionListSkill}
              />
            </div>
            <div className="mt-2">
              <label
                htmlFor=""
                className="block mb-1 text-sm font-medium text-gray-900"
              >
                Certification
              </label>
              <Select
                value={user.user.certification}
                mode="tags"
                allowClear
                style={{
                  width: "100%",
                }}
                onChange={(value) => {
                  // console.log(value);
                  setUserValue({ ...userValue, certification: value });
                }}
                placeholder="Chọn Certification"
                tokenSeparators={[","]}
                options={optionListSkill}
              />
            </div>
            <div className="flex justify-center mt-5">
              <button
                type="submit"
                style={{ fontWeight: 600, fontSize: "16px" }}
                className="py-1 px-6 bg-green-500 text-white rounded-lg hover:bg-white hover:text-green-500 border border-green-500 duration-300"
              >
                Cập nhật
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ModalEditInfo;
