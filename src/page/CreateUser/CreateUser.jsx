import React, { useContext, useEffect, useState } from "react";
import InputCustom from "../../components/Input/InputCustom";
import { Select, Space } from "antd";
import "./style.scss";
import { skillService } from "../../services/skill.service";
import { nguoiDungService } from "../../services/nguoiDung.service";
import { NotificationContext } from "../../App";
import CheckIconUser from "./icon/CheckIconUser";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const navigate = useNavigate();

  const { handleNotification } = useContext(NotificationContext);

  //  tạo các step để chuyển hướng các bước khi tạo user
  const [step, setStep] = useState(0);
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
    role: "",
    skill: [],
    certification: [],
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
  const handleSubmitFormCreateUser = (event) => {
    event.preventDefault();
    nguoiDungService
      .createUser(userValue)
      .then((res) => {
        console.log(res);
        setStep(step + 1);
        // setIsActiveBtn(false);
        handleNotification("Tạo người dùng thành công", "success");
      })
      .catch((err) => {
        console.log(err);
        handleNotification("Tạo người dùng thất bại", "error");
      });
  };

  //  render layoutForm
  //  xử lý các bước tạo user
  const renderLayoutForm = () => {
    switch (step) {
      case 0:
        return (
          <div className="flex justify-center">
            <form
              onSubmit={handleSubmitFormCreateUser}
              action=""
              className="w-4/5 space-y-5"
            >
              <InputCustom
                onChange={handleChangeValue}
                name={"name"}
                contentLable={"Name"}
              />
              <InputCustom
                contentLable={"Email"}
                onChange={handleChangeValue}
                name={"email"}
              />
              <InputCustom
                contentLable={"Phone"}
                onChange={handleChangeValue}
                name={"phone"}
              />
              <InputCustom
                contentLable={"Password"}
                onChange={handleChangeValue}
                name={"passWord"}
                type="password"
              />
              <div className="w-full ">
                <label
                  htmlFor=""
                  className="w-full block mb-2 text-sm font-medium text-gray-900"
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
                    const arrDate = e.target.value
                      .split("-")
                      .reverse()
                      .join("-");
                    // console.log(arrDate);

                    setUserValue({ ...userValue, birthday: arrDate });
                  }}
                />
              </div>
              <div className="w-full ">
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Giới tính
                </label>
                <select
                  name="gender"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                  id="gender"
                  onChange={handleChangeValue}
                >
                  <option value={true}>Nam</option>
                  <option value={false}>Nữ</option>
                </select>
              </div>
              <div className="w-full ">
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Chức vụ
                </label>
                <select
                  name="role"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                  id="gender"
                  onChange={handleChangeValue}
                >
                  <option value={"ADMIN"}>ADMIN</option>
                  <option value={"USER"}>USER</option>
                </select>
              </div>
              <div className="">
                {/* api select của antd có 2 option
            sử dụng api của antd để lấy value  */}
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Skill
                </label>
                <Select
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
              <div className="">
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Certification
                </label>
                <Select
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
                  className="py-3 duration-300 px-6 font-semibold bg-green-500 rounded-lg hover:bg-green-600 hover:text-slate-100"
                >
                  Thêm người dùng mới
                </button>
              </div>
            </form>
          </div>
        );
      case 1:
        return (
          <div className="">
            <div className="flex justify-center items-center">
              <h3
                className="text-center px-2 text-green-500 "
                style={{ fontSize: "20px", fontWeight: 600 }}
              >
                Tạo người dùng thành công
              </h3>
              <CheckIconUser
                width={"20px"}
                height={"20px"}
                fill={"rgb(34 197 94)"}
              />
            </div>
            <div className="py-3 flex justify-center">
              <button
                onClick={() => {
                  setStep(0);
                }}
                style={{ fontWeight: 600, fontSize: "16px" }}
                className="bg-green-600 hover:bg-green-500 duration-300 text-white py-2 my-3 px-5 rounded-xl"
              >
                Thêm người dùng mới
              </button>
            </div>
            <div className="py-3 flex justify-center">
              <button
                onClick={() => {
                  navigate("/");
                }}
                style={{
                  fontWeight: 600,
                  fontSize: "16px",
                }}
                className="hover:bg-black bg-slate-800 text-white duration-300 rounded-xl px-3 py-2"
              >
                Trở về trang chủ
              </button>
            </div>
          </div>
        );
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
  }, []);
  // console.log(userValue);
  return (
    <div className="">
      <div className="">
        {step === 0 && (
          <>
            <h2
              className="text-center "
              style={{ fontWeight: 600, fontSize: "25px" }}
            >
              Tạo người dùng mới
            </h2>
          </>
        )}
      </div>
      <div className="">{renderLayoutForm()}</div>
      <div className="mt-3">
        {/* <button
          disabled={isActiveBtn}
          style={{ fontWeight: 600 }}
          onClick={() => {
            setStep(step + 1);
          }}
          className={`${
            isActiveBtn
              ? "cursor-not-allowed"
              : "hover:text-green-300 duration-300"
          } bg-black text-white py-2 px-5 rounded-lg `}
        >
          Bước tiếp theo
        </button> */}
      </div>
    </div>
  );
};

export default CreateUser;
