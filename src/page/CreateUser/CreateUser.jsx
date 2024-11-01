import React, { useEffect, useState } from "react";
import InputCustom from "../../components/Input/InputCustom";
import { Select, Space } from "antd";
import { skillService } from "../../services/skill.service";

const CreateUser = () => {
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
    console.log(`selected ${value}`);
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
  return (
    <div className="">
      <h2
        className="text-center "
        style={{ fontWeight: 600, fontSize: "25px" }}
      >
        Tạo người dùng mới
      </h2>
      <div className="flex justify-center">
        <form action="" className="w-4/5 space-y-5">
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
              className="p-2 rounded-lg"
              style={{ border: "1px rgb(209 213 219) solid" }}
              type="date"
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
              name=""
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              id="gender"
            >
              <option value={true}>Nam</option>
              <option value={false}>Nữ</option>
            </select>
          </div>
          <div className="">
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
              onChange={handleChange}
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
              onChange={handleChange}
              placeholder="Chọn skill"
              tokenSeparators={[","]}
              options={optionListSkill}
            />
          </div>
          <div className="flex justify-center mt-5">
            <button
              type="submit"
              className="py-3 px-6 font-semibold bg-green-500 rounded-lg hover:bg-green-600"
            >
              Tạo người dùng
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
