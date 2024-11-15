// import React, { useContext, useEffect, useState } from "react";
// import { Button, Modal, Select } from "antd";
// import { useNavigate } from "react-router-dom";
// import { NotificationContext } from "../../App";
// import { nguoiDungService } from "../../services/nguoiDung.service";
// import { skillService } from "../../services/skill.service";
// import { useSelector } from "react-redux";
// import InputCustom from "../../components/Input/InputCustom";
// import * as yup from "yup";
// import { useFormik } from "formik";

// const ModalEditInfo = () => {
//   const { user } = useSelector((state) => state.authSlice);
//   console.log(user.user.id);

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const showModal = () => {
//     setIsModalOpen(true);
//   };
//   const handleOk = () => {
//     setIsModalOpen(false);
//   };
//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };
//   //
//   const navigate = useNavigate();
//   const { handleNotification } = useContext(NotificationContext);

//   const [optionListSkill, setOptionListKill] = useState([]);

//   const validationSchema = yup.object().shape({
//     name: yup.string().required("Name is required"),
//     email: yup
//       .string()
//       .email("Invalid email format")
//       .required("Email is required"),
//     phone: yup.string().required("Phone is required"),
//     birthday: yup.date().required("Birthday is required"),
//     gender: yup.boolean().required("Gender is required"),
//   });

//   const formik = useFormik({
//     initialValues: {
//       name: user.user.name,
//       email: user.user.email,
//       passWord: "",
//       phone: user.user.phone,
//       birthday: user.user.birthday.split("-").reverse().join("-"),
//       gender: user.user.gender,
//       role: user.user.role,
//       skill: user.user.skill,
//       certification: user.user.certification,
//     },
//     validationSchema,
//     onSubmit: async (values) => {
//       try {
//         const res = await nguoiDungService.editProfileUser(
//           user.user.id,
//           values
//         );
//         console.log(res);
//         handleNotification("Chỉnh sửa thành công", "success");
//         window.location.reload();
//       } catch (err) {
//         console.log(err);
//         handleNotification("Chỉnh sửa thất bại", "error");
//       }
//     },
//   });

//   useEffect(() => {
//     const handleSkillUser = async () => {
//       try {
//         const res = await skillService.skillUser();
//         const listSkill = res.data.content.map((skill) => {
//           return {
//             label: skill.tenSkill,
//             value: skill.tenSkill,
//           };
//         });
//         setOptionListKill(listSkill);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     handleSkillUser();
//   }, []);

//   return (
//     <div>
//       <Button
//         className=""
//         style={{ fontWeight: 600 }}
//         type=""
//         onClick={showModal}
//       >
//         Chỉnh sửa thông tin
//       </Button>
//       <Modal
//         className="moadl_edit_infor"
//         title="Chỉnh sửa thông tin"
//         open={isModalOpen}
//         onOk={handleOk}
//         onCancel={handleCancel}
//       >
//         <div className="">
//           <form onSubmit={formik.handleSubmit}>
//             <InputCustom
//               placeHolder={user.user.name}
//               value={formik.values.name}
//               classWrapper="mt-2"
//               onChange={formik.handleChange}
//               name={"name"}
//               contentLable={"Name"}
//             />
//             {formik.errors.name && formik.touched.name && (
//               <div className="error">{formik.errors.name}</div>
//             )}
//             <InputCustom
//               placeHolder={user.user.email}
//               value={formik.values.email}
//               classWrapper="mt-2"
//               contentLable={"Email"}
//               onChange={formik.handleChange}
//               name={"email"}
//             />
//             {formik.errors.email && formik.touched.email && (
//               <div className="error">{formik.errors.email}</div>
//             )}
//             <InputCustom
//               placeHolder={user.user.phone}
//               value={formik.values.phone}
//               classWrapper="mt-2"
//               contentLable={"Phone"}
//               onChange={formik.handleChange}
//               name={"phone"}
//             />
//             {formik.errors.phone && formik.touched.phone && (
//               <div className="error">{formik.errors.phone}</div>
//             )}
//             <div className="w-full mt-2">
//               <label
//                 htmlFor="gender"
//                 className="block mb-1 text-sm font-medium text-gray-900"
//               >
//                 Giới tính
//               </label>
//               <select
//                 name="gender"
//                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
//                 id="gender"
//                 value={formik.values.gender}
//                 onChange={formik.handleChange}
//               >
//                 <option value="" disabled hidden>
//                   Chọn giới tính
//                 </option>
//                 <option value={true}>Nam</option>
//                 <option value={false}>Nữ</option>
//               </select>
//               {formik.errors.gender && formik.touched.gender && (
//                 <div className="error">{formik.errors.gender}</div>
//               )}
//             </div>
//             <div className="w-full mt-2">
//               <label
//                 htmlFor="birthday"
//                 className="w-full block mb-1 text-sm font-medium text-gray-900"
//               >
//                 Ngày sinh
//               </label>
//               <input
//                 value={formik.values.birthday.split("-").reverse().join("-")}
//                 className="p-2 rounded-lg"
//                 style={{ border: "1px rgb(209 213 219) solid" }}
//                 type="date"
//                 onChange={(e) => {
//                   const arrDate = e.target.value.split("-").reverse().join("-");
//                   formik.setFieldValue("birthday", arrDate);
//                 }}
//               />
//               {formik.errors.birthday && formik.touched.birthday && (
//                 <div className="error">{formik.errors.birthday}</div>
//               )}
//             </div>
//             <div className="w-full mt-2">
//               <label
//                 htmlFor="role"
//                 className="block mb-1 text-sm font-medium text-gray-900"
//               >
//                 Chức vụ
//               </label>
//               <select
//                 disabled
//                 name="role"
//                 className="bg-gray-50 border hover:cursor-not-allowed border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
//                 id="role"
//                 value={formik.values.role}
//                 onChange={formik.handleChange}
//               >
//                 <option value={"USER"}></option>
//               </select>
//             </div>
//             <div className="mt-2">
//               <label
//                 htmlFor="skill"
//                 className="block mb-1 text-sm font-medium text-gray-900"
//               >
//                 Skill
//               </label>
//               <Select
//                 value={formik.values.skill}
//                 mode="tags"
//                 allowClear
//                 style={{
//                   width: "100%",
//                 }}
//                 placeholder="Chọn skill"
//                 onChange={(value) => {
//                   formik.setFieldValue("skill", value);
//                 }}
//                 tokenSeparators={[","]}
//                 options={optionListSkill}
//               />
//             </div>
//             <div className="mt-2">
//               <label
//                 htmlFor="certification"
//                 className="block mb-1 text-sm font-medium text-gray-900"
//               >
//                 Certification
//               </label>
//               <Select
//                 value={formik.values.certification}
//                 mode="tags"
//                 allowClear
//                 style={{
//                   width: "100%",
//                 }}
//                 onChange={(value) => {
//                   formik.setFieldValue("certification", value);
//                 }}
//                 placeholder="Chọn Certification"
//                 tokenSeparators={[","]}
//                 options={optionListSkill}
//               />
//             </div>
//             <div className="flex justify-center mt-5">
//               <button
//                 type="submit"
//                 style={{ fontWeight: 600, fontSize: "16px" }}
//                 className="py-1 px-6 bg-green-500 text-white rounded-lg hover:bg-white hover:text-green-500 border border-green-500 duration-300"
//               >
//                 Cập nhật
//               </button>
//             </div>
//           </form>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default ModalEditInfo;

import React, { useContext, useEffect, useState } from "react";
import { Button, Modal, Select } from "antd";
import { useNavigate } from "react-router-dom";
import { NotificationContext } from "../../App";
import { nguoiDungService } from "../../services/nguoiDung.service";
import { skillService } from "../../services/skill.service";
import { useSelector } from "react-redux";
import InputCustom from "../../components/Input/InputCustom";
import * as yup from "yup";
import { useFormik } from "formik";

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

  const [optionListSkill, setOptionListKill] = useState([]);

  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: yup.string().required("Phone is required"),
    birthday: yup.date().required("Birthday is required").nullable(),
    gender: yup.boolean().required("Gender is required"),
  });

  const {
    values,
    handleBlur,
    handleChange,
    handleReset,
    handleSubmit,
    touched,
    errors,
    setFieldValue,
    isValid,
    resetForm,
  } = useFormik({
    initialValues: {
      name: user.user.name,
      email: user.user.email,
      passWord: "",
      phone: user.user.phone,
      birthday: user.user.birthday
        ? user.user.birthday.split("-").reverse().join("-")
        : "",
      gender: user.user.gender,
      role: user.user.role,
      skill: user.user.skill,
      certification: user.user.certification,
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const res = await nguoiDungService.editProfileUser(
          user.user.id,
          values
        );
        console.log(res);
        handleNotification("Chỉnh sửa thành công", "success");
        setTimeout(() => {
          window.location.reload();
        }, 500);
      } catch (err) {
        console.log(err);
        handleNotification("Chỉnh sửa thất bại", "error");
      }
    },
  });

  useEffect(() => {
    const handleSkillUser = async () => {
      try {
        const res = await skillService.skillUser();
        const listSkill = res.data.content.map((skill) => {
          return {
            label: skill.tenSkill,
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
          <form onSubmit={handleSubmit}>
            <InputCustom
              placeHolder={user.user.name}
              value={values.name}
              classWrapper="mt-2"
              onChange={handleChange}
              name={"name"}
              contentLable={"Name"}
            />
            {errors.name && touched.name && (
              <div className="error text-red-500">{errors.name}</div>
            )}
            <InputCustom
              placeHolder={user.user.email}
              value={values.email}
              classWrapper="mt-2"
              contentLable={"Email"}
              onChange={handleChange}
              name={"email"}
            />
            {errors.email && touched.email && (
              <div className="error text-red-500">{errors.email}</div>
            )}
            <InputCustom
              placeHolder={user.user.phone}
              value={values.phone}
              classWrapper="mt-2"
              contentLable={"Phone"}
              onChange={handleChange}
              name={"phone"}
            />
            {errors.phone && touched.phone && (
              <div className="error text-red-500">{errors.phone}</div>
            )}
            <div className="w-full mt-2">
              <label
                htmlFor="gender"
                className="block mb-1 text-sm font-medium text-gray-900"
              >
                Giới tính
              </label>
              <select
                name="gender"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                id="gender"
                value={values.gender}
                onChange={handleChange}
              >
                <option value="" disabled hidden>
                  Chọn giới tính
                </option>
                <option value={true}>Nam</option>
                <option value={false}>Nữ</option>
              </select>
              {errors.gender && touched.gender && (
                <div className="error text-red-500">{errors.gender}</div>
              )}
            </div>
            <div className="w-full mt-2">
              <label
                htmlFor="birthday"
                className="w-full block mb-1 text-sm font-medium text-gray-900"
              >
                Ngày sinh
              </label>
              <input
                value={values.birthday}
                className="p-2 rounded-lg"
                style={{ border: "1px rgb(209 213 219) solid" }}
                type="date"
                onChange={(e) => {
                  setFieldValue("birthday", e.target.value);
                }}
              />
              {errors.birthday && touched.birthday ? (
                <p className="text-red-500">{errors.birthday}</p>
              ) : null}
            </div>
            <div className="w-full mt-2">
              <label
                htmlFor="role"
                className="block mb-1 text-sm font-medium text-gray-900"
              >
                Chức vụ
              </label>
              <select
                disabled
                name="role"
                className="bg-gray-50 border hover:cursor-not-allowed border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                id="role"
                value={values.role}
                onChange={handleChange}
              >
                <option value={"USER"}></option>
              </select>
            </div>
            <div className="mt-2">
              <label
                htmlFor="skill"
                className="block mb-1 text-sm font-medium text-gray-900"
              >
                Skill
              </label>
              <Select
                value={values.skill}
                mode="tags"
                allowClear
                style={{
                  width: "100%",
                }}
                placeholder="Chọn skill"
                onChange={(value) => {
                  setFieldValue("skill", value);
                }}
                tokenSeparators={[","]}
                options={optionListSkill}
              />
            </div>
            <div className="mt-2">
              <label
                htmlFor="certification"
                className="block mb-1 text-sm font-medium text-gray-900"
              >
                Certification
              </label>
              <Select
                value={values.certification}
                mode="tags"
                allowClear
                style={{
                  width: "100%",
                }}
                onChange={(value) => {
                  formik.setFieldValue("certification", value);
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
