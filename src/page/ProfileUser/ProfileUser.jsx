// import React, { useContext, useEffect, useState } from "react";
// import HomeInAdminLog from "../../icon/HomeInAdminLog";
// import { Link } from "react-router-dom";
// import "./style.scss";
// import { removeLocalStorage, getLocalStorage } from "../../utils/utils";
// import { nguoiDungService } from "../../services/nguoiDung.service";
// import { useDispatch, useSelector } from "react-redux";
// import { Modal } from "antd";
// import ModalEditInfo from "./ModalEditInfo";
// import { NotificationContext } from "../../App";
// import AvatarImg from "../../assets/Img/AvatarImg.png";

// const ProfileUser = () => {
//   const { user } = useSelector((state) => state.authSlice);
//   // console.log(user);
//   const { handleNotification } = useContext(NotificationContext);
//   const dispatch = useDispatch();
//   const [infoUser, setInfoUser] = useState(null);
//   const [uploadImage, setUploadImage] = useState(null);
//   // console.log(uploadImage);
//   // console.log(uploadImage?.file);
//   const [errSizeImage, setErrSizeImage] = useState("");
//   // console.log(infoUser);
//   console.log("up", uploadImage);

//   const handleUpdateAvatar = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     // console.log(formData);
//     formData.append("formFile", uploadImage);
//     console.log("form", formData);

//     const handleUpdateAvatarApi = async () => {
//       if (!uploadImage) {
//         handleNotification("Vui lòng chọn một ảnh để upload", "warning");
//         return;
//       }

//       try {
//         const formData = new FormData();
//         formData.append("formFile", uploadImage);

//         // Gọi API upload avatar
//         const res = await nguoiDungService.uploadAvatar(formData, user.token);
//         handleNotification("Upload avatar thành công", "success");

//         // Cập nhật avatar mới trong state
//         setInfoUser((prevInfoUser) => ({
//           ...prevInfoUser,
//           avatar: res.data.content.avatar,
//         }));

//         // Hoặc có thể thêm query parameter để tránh cache:
//         // setInfoUser((prevInfoUser) => ({
//         //   ...prevInfoUser,
//         //   avatar: `${res.data.content.avatar}?t=${new Date().getTime()}`,
//         // }));
//       } catch (err) {
//         console.error("Lỗi khi upload avatar:", err);
//         handleNotification("Upload avatar thất bại", "error");
//       }
//     };

//     handleUpdateAvatarApi();

//     // nguoiDungService
//     //   .uploadAvatar(formData, user.token)
//     //   .then((res) => {
//     //     // console.log(res);
//     //     handleNotification("Upload avatar thành công", "success");
//     //     //  reload lại trang
//     //     // window.location.reload();
//     //     setInfoUser((prevInfoUser) => ({
//     //       ...prevInfoUser,
//     //       avatar: res.data.content.avatar,
//     //     }));
//     //   })
//     //   .catch((err) => {
//     //     console.log(err);
//     //     handleNotification("Upload avatar thất bại", "error");
//     //   });
//     // if (uploadImage != null) {
//     //   formData.append("formFile", uploadImage);
//     //   console.log("form", formData);
//     //   nguoiDungService
//     //     .uploadAvatar(formData, user.token)
//     //     .then((res) => {
//     //       // console.log(res);
//     //       handleNotification("Upload avatar thành công", "success");
//     //       //  reload lại trang
//     //       // window.location.reload();
//     //       setInfoUser((prevInfoUser) => ({
//     //         ...prevInfoUser,
//     //         avatar: res.data.content.avatar,
//     //       }));
//     //     })
//     //     .catch((err) => {
//     //       // console.log(err);
//     //       handleNotification("Upload avatar thất bại", "error");
//     //     });
//     // }
//   };
//   useEffect(() => {
//     const idUser = getLocalStorage("user").user.id;
//     console.log(idUser);
//     // get info user
//     nguoiDungService
//       .handleInfoUser(idUser)
//       .then((res) => {
//         setInfoUser(res.data.content);
//         // console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
//   return (
//     <div className="container">
//       <div className="">
//         <div className="flex header_profileUser justify-around items-center py-3">
//           <Link to={"/"} className="flex items-end hover:text-green-500">
//             <HomeInAdminLog width={"25px"} height={"25px"} />
//             <span style={{ fontWeight: 600 }}>Home</span>
//           </Link>
//           <div className="profileUser_btn_logout">
//             <button
//               onClick={() => {
//                 removeLocalStorage("user");
//                 window.location.href = "/";
//               }}
//             >
//               Log out
//             </button>
//           </div>
//         </div>
//         <div className="">
//           {infoUser && (
//             <div className="container inforUser_profile pt-1">
//               <div className="title_profileUser flex justify-center mt-2 py-3">
//                 <h3>
//                   Hello <span style={{ fontWeight: 700 }}>{infoUser.name}</span>
//                 </h3>
//               </div>
//               <div className="">
//                 <div className="image_user flex justify-center">
//                   <img
//                     style={{
//                       height: "100px",
//                       width: "100px",
//                       borderRadius: "50%",
//                     }}
//                     src={infoUser.avatar || AvatarImg}
//                     alt="Avatar"
//                   />
//                 </div>
//                 <div className="flex justify-center mt-2">
//                   <form
//                     action=""
//                     onChange={(e) => {
//                       // const file = e.target.files[0];
//                       // if (file) {
//                       //   if (file.size > 1 * 1024 * 1024) {
//                       //     setErrSizeImage("Dung lượng ảnh lớn hơn 1MB");
//                       //   } else {
//                       //     const fileURL = URL.createObjectURL(file);
//                       //     setUploadImage(file);
//                       //     setErrSizeImage("");
//                       //     handleUpdateAvatar(); // Tự động cập nhật avatar khi người dùng tải ảnh lên
//                       //   }
//                       // }
//                       // handleUpdateAvatar();
//                     }}
//                     // onChange={(e) => {
//                     //   const file = e.target.files[0];
//                     //   if (file) {
//                     //     if (file.size > 1 * 1024 * 1024) {
//                     //       setErrSizeImage("Dung lượng ảnh lớn hơn 1MB");
//                     //     } else {
//                     //       const fileURL = URL.createObjectURL(file);
//                     //       setUploadImage(file);
//                     //       setErrSizeImage("");
//                     //       handleUpdateAvatar(); // Tự động cập nhật avatar khi người dùng tải ảnh lên
//                     //     }
//                     //   }
//                     // }}
//                   >
//                     <div className="input_update_avatar">
//                       <label id="" htmlFor="upavatar">
//                         Update Avatar
//                       </label>
//                       <input
//                         accept="image/png, image/jpeg"
//                         name="upavatar"
//                         id="upavatar"
//                         type="file"
//                         className="custom_input_avatar"
//                         onChange={(e) => {
//                           const file = e.target.files[0];
//                           console.log(e.target.files[0]);
//                           if (file) {
//                             if (file.size > 1 * 1024 * 1024) {
//                               setErrSizeImage("Dung lượng ảnh lớn lớn hơn 1MB");
//                             } else {
//                               // const fileURL = URL.createObjectURL(file);
//                               setUploadImage(file);
//                               setErrSizeImage("");
//                               handleUpdateAvatar();
//                             }
//                             //  nếu file tồn tại, gọi đến phượng thức createObjectURL
//                             // để tạo ra một URL tạm thời cho file đó
//                             // const fileURL = URL.createObjectURL(file);
//                             // setUploadImage(file);
//                             // setErrSizeImage("");
//                           }
//                         }}
//                       />
//                     </div>
//                     <p>{errSizeImage}</p>
//                   </form>
//                 </div>
//               </div>
//               <div className="mt-3 py-3">
//                 <div className="flex justify-center">
//                   <h3 style={{ fontSize: "20px", fontWeight: 600 }}>
//                     Your Profile
//                   </h3>
//                 </div>
//                 <div className="infor_profile_user py-3">
//                   <p className="">Name: {infoUser.name}</p>
//                   <p>Email: {infoUser.email}</p>
//                   <p>Phone: {infoUser.phone}</p>
//                   <p>Gender: {infoUser.gender ? "Nam" : "Nữ"}</p>
//                   <p>Birthday: {infoUser.birthday}</p>
//                   <p>Role: {infoUser.role}</p>
//                   <div className="flex justify-center items-center">
//                     <div className="px-2">
//                       <p>Skill: </p>
//                     </div>
//                     <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
//                       {infoUser.skill.map((item, index) => (
//                         <div
//                           key={index}
//                           className="item_skill flex justify-center"
//                         >
//                           <span key={index}>{item}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="flex justify-center items-center">
//                     <div className="px-2">
//                       <p>Certification:</p>
//                     </div>
//                     <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
//                       {infoUser.certification.map((item, index) => (
//                         <div
//                           key={index}
//                           className="item_certification flex justify-center"
//                         >
//                           <span key={index}>{item}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="edit_info flex justify-center my-2">
//                     <ModalEditInfo />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileUser;

import React, { useContext, useEffect, useState } from "react";
import HomeInAdminLog from "../../icon/HomeInAdminLog";
import { Link } from "react-router-dom";
import "./style.scss";
import { removeLocalStorage, getLocalStorage } from "../../utils/utils";
import { nguoiDungService } from "../../services/nguoiDung.service";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "antd";
import ModalEditInfo from "./ModalEditInfo";
import { NotificationContext } from "../../App";
import AvatarImg from "../../assets/Img/AvatarImg.png";

const ProfileUser = () => {
  const { user } = useSelector((state) => state.authSlice);
  const { handleNotification } = useContext(NotificationContext);
  const dispatch = useDispatch();
  const [infoUser, setInfoUser] = useState(null);
  const [errSizeImage, setErrSizeImage] = useState("");

  const handleUpdateAvatar = async (file) => {
    const formData = new FormData();
    formData.append("formFile", file);

    try {
      const res = await nguoiDungService.uploadAvatar(formData, user.token);
      handleNotification("Upload avatar thành công", "success");

      // Cập nhật avatar mới trong state
      setInfoUser((prevInfoUser) => ({
        ...prevInfoUser,
        avatar: res.data.content.avatar,
      }));
    } catch (err) {
      console.error("Lỗi khi upload avatar:", err);
      handleNotification("Upload avatar thất bại", "error");
    }
  };

  useEffect(() => {
    const idUser = getLocalStorage("user").user.id;
    nguoiDungService
      .handleInfoUser(idUser)
      .then((res) => {
        setInfoUser(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <div className="">
        <div className="flex header_profileUser justify-around items-center py-3">
          <Link to={"/"} className="flex items-end hover:text-green-500">
            <HomeInAdminLog width={"25px"} height={"25px"} />
            <span style={{ fontWeight: 600 }}>Home</span>
          </Link>
          <div className="profileUser_btn_logout">
            <button
              onClick={() => {
                removeLocalStorage("user");
                window.location.href = "/";
              }}
            >
              Log out
            </button>
          </div>
        </div>
        <div className="">
          {infoUser && (
            <div className="container inforUser_profile pt-1">
              <div className="title_profileUser flex justify-center mt-2 py-3">
                <h3>
                  Hello <span style={{ fontWeight: 700 }}>{infoUser.name}</span>
                </h3>
              </div>
              <div className="">
                <div className="image_user flex justify-center">
                  <img
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "50%",
                    }}
                    src={infoUser.avatar || AvatarImg}
                    alt="Avatar"
                  />
                </div>
                <div className="flex justify-center mt-2">
                  <form
                    action=""
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        if (file.size > 1 * 1024 * 1024) {
                          setErrSizeImage("Dung lượng ảnh lớn hơn 1MB");
                        } else {
                          setErrSizeImage("");
                          handleUpdateAvatar(file); // Tự động cập nhật avatar khi người dùng tải ảnh lên
                        }
                      }
                    }}
                  >
                    <div className="input_update_avatar">
                      <label id="" htmlFor="upavatar">
                        Update Avatar
                      </label>
                      <input
                        accept="image/png, image/jpeg"
                        name="upavatar"
                        id="upavatar"
                        type="file"
                        className="custom_input_avatar"
                      />
                      <p>{errSizeImage}</p>
                    </div>
                  </form>
                </div>
              </div>
              <div className="mt-3 py-3">
                <div className="flex justify-center">
                  <h3 style={{ fontSize: "20px", fontWeight: 600 }}>
                    Your Profile
                  </h3>
                </div>
                <div className="infor_profile_user py-3">
                  <p className="">Name: {infoUser.name}</p>
                  <p>Email: {infoUser.email}</p>
                  <p>Phone: {infoUser.phone}</p>
                  <p>Gender: {infoUser.gender ? "Nam" : "Nữ"}</p>
                  <p>Birthday: {infoUser.birthday}</p>
                  <p>Role: {infoUser.role}</p>
                  <div className="flex justify-center items-center">
                    <div className="px-2">
                      <p>Skill: </p>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                      {infoUser.skill.map((item, index) => (
                        <div
                          key={index}
                          className="item_skill flex justify-center"
                        >
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="px-2">
                      <p>Certification:</p>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                      {infoUser.certification.map((item, index) => (
                        <div
                          key={index}
                          className="item_certification flex justify-center"
                        >
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="edit_info flex justify-center my-2">
                    <ModalEditInfo />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
