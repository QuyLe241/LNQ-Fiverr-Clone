import React, { useContext, useState } from "react";
import InputCustom from "../Input/InputCustom";
import { DatePicker, Space } from "antd";
import { useFormik } from "formik";
import * as yup from "yup";
import { notiValidation } from "../../common/notiValidation";
// import Password from "antd/es/input/Password";
import { authService } from "../../services/auth.service";
import { NotificationContext } from "../../App";
import { Link, useNavigate } from "react-router-dom";
import LinkCustom from "../LinkCustom/LinkCustom";
import { pathDefault } from "../../common/path";
import "./styleFormRegister.scss";
import HomeInAdminLog from "../../icon/HomeInAdminLog";
// import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
// import { Button, Input } from "antd";

const FormRegister = () => {
  // const [passwordVisible, setPasswordVisible] = React.useState(false);
  // const notificationValue = useContext(NotificationContext);
  // console.log(notificationValue);

  const [showPassword, setShowPassword] = useState(false);

  const { handleNotification } = useContext(NotificationContext);
  //  setFieldValue : thuộc tính thay thế khi inout không có name
  //    các trang web sử dụng chung form đăng ký , đăng nhập:
  //  để không bị vướn lại ở bước validation email, phone, date,..
  //  người ta sẽ tạo ra một biến để lưu validation và sử dụng điều kiện để kiểm tra đăng ký và đăng nhập

  //    chuyển hướng người dùng khi đăng ký thành công
  const navigate = useNavigate();
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
      name: "",
      email: "",
      passWord: "",
      phone: "",
      birthday: "",
      gender: "",
    },
    onSubmit: (values) => {
      // console.log(values);
      //  sử dụng api
      //  kiểm tra devtool chrome tại network: status 200 or 201 là thành công
      authService
        .signUp({
          ...values,
          gender: values.gender == "Nam" ? true : false,
        })
        .then((res) => {
          console.log(res);
          //    thông báo cho người dùng khi tạo tài khoản thành công
          handleNotification(
            "You have successfully registered. Redirecting to the login page",
            "success"
          );
          //    chuyển hướng người dùng
          setTimeout(() => {
            navigate(pathDefault.login);
          }, 2000);
        })
        .catch((err) => {
          console.log(err);
          handleNotification("Register fail", "error");
          // setTimeout(() => {}, 1000);
        });
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .required(notiValidation.empty)
        .matches(/^[A-Za-zÀ-ỹà-ỹ\s]+$/, "Not characters Number"),
      email: yup.string().email("Email not valid").required("Email not empty"),
      passWord: yup
        .string()
        .matches(
          /^(?=.*[A-Z])(?=.*\d).+$/,
          "Password must contain at least one uppercase letter,special characters and one number"
        )
        .required("Password not empty"),
      phone: yup
        .string()
        .matches(
          /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
          "Phone number is not valid"
        )
        .required("Phone number not empty"),
      birthday: yup.string().required("Birthday not empty"),
      gender: yup.string().required("Gender not empty"),
    }),
  });
  return (
    <div className="flex justify-center flex-col items-center">
      <h1
        className="text-center pt-2"
        style={{ fontSize: "26px", fontWeight: "700" }}
      >
        Register Page
      </h1>
      <form action="" onSubmit={handleSubmit}>
        {/*       flex-wrap : khi các phần tử vượt quá 100% sẽ tự động xuông dòng */}
        <div className="flex flex-wrap">
          <InputCustom
            contentLable={"Your name"}
            name={"name"}
            placeHolder={"Enter your name"}
            classWrapper={"w-full xl:w-1/2 p-3"}
            value={values.name}
            onBlur={handleBlur}
            onChange={handleChange}
            touched={touched.name}
            handleSubmit={handleSubmit}
            error={errors.name}
          />
          <InputCustom
            contentLable={"Email"}
            name={"email"}
            placeHolder={"abc@gmil.com"}
            classWrapper={"w-full xl:w-1/2 p-3"}
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            touched={touched.email}
            handleSubmit={handleSubmit}
            error={errors.email}
          />
          {/* password */}
          {/* <InputCustom
            contentLable={"Mật khẩu"}
            name={"passWord"}
            placeHolder={"Nhập mật khẩu"}
            classWrapper={"w-full p-3"}
            type="passWord"
            value={values.passWord}
            onBlur={handleBlur}
            onChange={handleChange}
            touched={touched.passWord}
            handleSubmit={handleSubmit}
            error={errors.passWord}
          /> */}
          <div className="relative password_set_register w-full">
            <InputCustom
              contentLable={"Password"}
              classWrapper={"w-full p-3"}
              placeHolder={"Password"}
              type={showPassword ? "text" : "password"}
              name="passWord"
              onChange={handleChange}
              value={values.passWord}
              handleSubmit={handleSubmit}
              onBlur={handleBlur}
              error={errors.passWord}
              touched={touched.passWord}
              isValid={!isValid.passWord}
            />
            <button
              type="button"
              className="absolute btn_showPassword"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hidden" : "Show"}
            </button>
          </div>
          {/* test */}
          {/* test */}
          <InputCustom
            contentLable={"Phone"}
            name={"phone"}
            placeHolder={"Enter your phone number"}
            classWrapper={"w-full p-3"}
            value={values.phone}
            onBlur={handleBlur}
            onChange={handleChange}
            touched={touched.phone}
            handleSubmit={handleSubmit}
            error={errors.phone}
            isValid={!isValid.phone}
          />
          <div className="w-1/2 p-3">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Date of birth
            </label>
            <DatePicker
              className="w-full"
              onChange={(dayjs, dayString) => {
                setFieldValue("birthday", dayString);
              }}
              format={"DD-MM-YYYY"}
            />
            {errors.birthday && touched.birthday ? (
              <p className="text-red-500">{errors.birthday}</p>
            ) : null}
          </div>
          <div className="w-1/2 p-3">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Gender
              </label>
              <select
                name="gender"
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                 focus:border-blue-500 block w-full p-2.5 
                 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={values.gender}
                onChange={handleChange}
              >
                <option value="">Gender</option>
                <option value="US">Nam</option>
                <option value="CA">Nữ</option>
              </select>
              {errors.gender && touched.gender ? (
                <p className="text-red-500">{errors.gender}</p>
              ) : null}
            </div>
          </div>
          <div className="w-full p-3">
            <div className="mb-3">
              <button
                type="submit"
                onSubmit={(e) => {
                  e.target.value;
                }}
                className="bg-slate-900 text-white rounded-lg w-full py-3 px-6 hover:bg-black"
              >
                Sign Up
              </button>
            </div>
            <Link
              to={pathDefault.login}
              className="my-3 text-blue-500 hover:text-blue-400"
            >
              Click here to login if you already have an account.
            </Link>
            <div className="">
              <Link
                to={"/"}
                className="flex items-center my-3 text-blue-500 hover:text-blue-400"
              >
                <HomeInAdminLog width={"20px"} height={"20px"} />
                <span className="ml-1">Go back to the home page.</span>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormRegister;
