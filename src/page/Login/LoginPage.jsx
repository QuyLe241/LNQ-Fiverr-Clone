import React, { useContext, useEffect } from "react";
import ImgLogin from "../../Img/LoginImg.png";
import ImgLoginLayer from "../../Img/LoginImgLayer.png";
import InputCustom from "../../components/Input/InputCustom";
import { Link, useNavigate } from "react-router-dom";
import { pathDefault } from "../../common/path";
import * as yup from "yup";
import { useFormik } from "formik";
import { Value } from "sass";
import { useState } from "react";
import { authService } from "../../services/auth.service";
import { setLocalStorage, getLocalStorage } from "../../utils/utils";
import { useDispatch } from "react-redux";
import { setValueUser } from "../../redux/authSlice";
import { NotificationContext } from "../../App";
import "./styleLogin.scss";
import HomeInAdminLog from "../../icon/HomeInAdminLog";

const LoginPage = () => {
  //    Sử dụng redeux
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  //    sử dụng useContext để gọi notification và sử dụng
  const { handleNotification } = useContext(NotificationContext);

  //   sử dụng useEffect để kiểm tra người dùng đã đăng nhập chưa
  useEffect(() => {
    const checktonken = getLocalStorage("user");
    if (checktonken) {
      Navigate("/error");
    }
  }, [Navigate]);

  //    sử dụng state để kiểm tra tra dữ liệu hợp lệ
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    values,
    handleSubmit,
    handleChange,
    errors,
    touched,
    handleBlur,
    isValid,
  } = useFormik({
    initialValues: {
      email: "",
      passWord: "",
    },
    onSubmit: async (values) => {
      //    kiểm tra dữ liệu đã thành công
      setIsSubmitted(true);
      console.log(values);
      //  gọi api
      //  - sử dụng try catch : ở trường hợp có nhiều sự kiện xảy ra ở try(tạo ra nhiều sự kiện tỏng try mà không cần phải .then nhiều lần)
      //  - sử dụng .then .catch : ở trường hợp có 1 sự kiện xảy ra ở .then
      //    lưu ý sử dụng : try catch . cần thêm async và await
      try {
        const result = await authService.signIn(values);
        console.log(result);
        //  luư trữ dữ liệu xuống localStorage
        setLocalStorage("user", result.data.content);
        //    bắn setValueUser lên cho redux xử lý
        dispatch(setValueUser(result.data.content));
        //  chuyển hướng người dùng khi đăng nhập thành công
        handleNotification(
          "Login success. Redirecting to the homepage in 2 seconds",
          "success"
        );
        setTimeout(() => {
          Navigate("/");
        }, 1500);
      } catch (err) {
        console.log(err);
        //    Đăng nhập thất bại
        handleNotification(err.response.data.content, "error");
      }
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .resolve("Valid")
        .required("No empty")
        .email("Email is not valid"),
      passWord: yup
        .string()
        .resolve("Valid")
        .defined("Hợp lệ")
        .required("No empty")
        .min(6, "Min 6 characters")
        .max(10, "Max 10 characters"),
    }),
  });

  return (
    <div className="container_login">
      <div
        className="container flex justify-center items-center "
        style={{ minHeight: "100vh" }}
      >
        <div className="loginPage_content flex justify-center items-center w-4/5">
          <div className="loginPage_img w-2/5">
            <img src={ImgLoginLayer} alt="Image login" />
          </div>
          <div className="loginPage_form  px-5">
            <form className="" onSubmit={handleSubmit}>
              <h1
                className="text-center mt-3"
                style={{ fontSize: "25px", fontWeight: "700" }}
              >
                LOGIN USER
              </h1>
              <InputCustom
                classWrapper="my-3"
                contentLable={"Email"}
                placeHolder={"Email for login"}
                name="email"
                onChange={handleChange}
                value={values.email}
                handleSubmit={handleSubmit}
                onBlur={handleBlur}
                touched={touched.email}
                error={errors.email}
                // isValid={!isValid.email}
              />

              {/* <InputCustom
                contentLable={"Mật khẩu"}
                placeHolder={"Nhập mật khẩu"}
                type="password"
                name="passWord"
                onChange={handleChange}
                value={values.passWord}
                handleSubmit={handleSubmit}
                onBlur={handleBlur}
                error={errors.passWord}
                touched={touched.passWord}
                isValid={!isValid.passWord}
              /> */}
              <div className="relative password_set">
                <InputCustom
                  contentLable={"Password"}
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
              <div className="mt-5">
                <div className="flex justify-center mb-3">
                  <button
                    type="submit"
                    className="w-4/5 py-3 px-3 bg-green-600 text-white rounded-xl hover:bg-green-500"
                  >
                    Login
                  </button>
                </div>
                <Link
                  to={pathDefault.register}
                  className="my-3 text-blue-500 hover:text-blue-400"
                >
                  Click here to register if you do not have an account.
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
