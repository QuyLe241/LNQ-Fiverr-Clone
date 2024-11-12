import React, { useContext, useEffect } from "react";
import InputCustom from "../../components/Input/InputCustom";
import { useFormik } from "formik";
import { authService } from "../../services/auth.service";
import { NotificationContext } from "../../App";
import { getLocalStorage, setLocalStorage } from "../../utils/utils";
import { useDispatch } from "react-redux";
import { setValueUser } from "../../redux/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { pathDefault } from "../../common/path";
import HomeInAdminLog from "../../icon/HomeInAdminLog";
import "./style.scss";

const AdminLogin = () => {
  //  sử dụng dispatch để gửi tính hiệu lên , khi người dùng là admin
  const dispatch = useDispatch();
  //  chuyển hướng người dùng
  const navigate = useNavigate();
  //  Toastify
  const { handleNotification } = useContext(NotificationContext);

  //      forkmil
  const {
    handleBlur,
    handleChange,
    handleReset,
    handleSubmit,
    touched,
    errors,
    resetForm,
    values,
  } = useFormik({
    initialValues: {
      email: "",
      passWord: "",
    },
    onSubmit: (values) => {
      // console.log(values);
      authService
        .signIn(values)
        .then((res) => {
          // console.log(values);
          console.log(res);
          //   Kiểm tra người dùng có là user hay admin
          if (res.data.content.user.role == "USER") {
            //  Thông báo người dùng không phải admin
            handleNotification(
              "Bạn không được truy cập, vì không phải Admin",
              "error"
            );
            //  tạo ra một biến vi phạm để đếm số lần truy cập không thành công
            //    key là viPham
            let viPham = getLocalStorage("viPham");

            //  Nếu viPham chưa đạt giá trị 3
            if (!viPham) {
              //    Tăng giá trị viPham thêm 1
              //    thường sẽ xử lý đếm số lần vi phạm ở backend
              //    vì ở localStorage có thể thay đổi dữ liệu
              setLocalStorage("viPham", 1);
            } else {
              viPham++;
              viPham == 3
                ? (window.location.href = "https://google.com")
                : setLocalStorage("viPham", viPham);
            }
          } else {
            handleNotification("Đăng nhập thành công", "success");
            //    trường hợp người dùng đúng là ADMIN
            setLocalStorage("user", res.data.content);
            //  gửi tính hiệu lên lên redux
            dispatch(setValueUser(res.data.content));
            //    xóa số lần vi phạm
            localStorage.removeItem("viPham");
            //  chuyển hướng người dùng
            navigate(pathDefault.adminTemplate);
          }
        })
        .catch((err) => {
          console.log(err);
          handleNotification(err.response.data.content, "error");
        });
    },
  });

  useEffect(() => {
    const checkToken = getLocalStorage("user");
    if (checkToken && checkToken.user) {
      const checkAdmin = checkToken.user.role;
      if (checkAdmin === "ADMIN") {
        navigate(pathDefault.adminTemplate);
      } else {
        navigate("/error");
      }
    } else {
      navigate(pathDefault.adminLogin);
    }
  }, [navigate]);

  return (
    <div className="body_adminLoginPage" style={{}}>
      <div className="container h-screen flex justify-center items-center">
        <div className="admmin_login  w-4/5">
          {/* <div className="admin_login_animation w-1/2"></div> */}
          <div className="admin_login_form p-5 w-full flex flex-col justify-center">
            <form action="" className="space-y-5" onSubmit={handleSubmit}>
              <h1
                style={{ fontSize: "28px", fontWeight: "700" }}
                className="text-center"
              >
                Trang đăng nhập cho Admin
              </h1>
              <InputCustom
                contentLable={"Email"}
                name={"email"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <InputCustom
                contentLable={"Password"}
                name={"passWord"}
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.passWord}
              />
              <div className="space-y-3">
                <button
                  type="submit"
                  className="mt-5 py-2 px-5 bg-green-600 hover:bg-green-800 rounded-lg text-white inline-block w-full"
                >
                  Đăng Nhập
                </button>
              </div>
            </form>
          </div>
          <div className="mt-3 px-2">
            <Link to={"/"} className="flex hover:text-blue-800 text-black">
              <HomeInAdminLog width={"20px"} height={"20px"} />
              <span style={{ fontWeight: 600 }} className="ml-1">
                Trang chủ
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
