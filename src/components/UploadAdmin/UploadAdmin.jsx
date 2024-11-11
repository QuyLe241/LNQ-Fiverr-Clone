import React, { useContext, useState } from "react";
import { nguoiDungService } from "../../services/nguoiDung.service";
import { useSelector } from "react-redux";
import { NotificationContext } from "../../App";

const UploadAdmin = () => {
  const { handleNotification } = useContext(NotificationContext);
  const [uploadImage, setUploadImage] = useState(null);
  const [errSizeImage, setErrSizeImage] = useState("");

  const { user } = useSelector((state) => state.authSlice);

  const handleSubmitAvatar = (e) => {
    e.preventDefault();
    // console.log("submit");
    //  gọi tới phương thức formData(do BE quy định) của js để tạo ra một form data
    const formData = new FormData();
    if (uploadImage) {
      //  append tên key(để be định hình đúng) và giá trị của file vào formData
      formData.append("formFile", uploadImage.file);
      nguoiDungService
        .uploadAvatar(formData, user.token)
        .then((res) => {
          //   console.log(res);
          handleNotification("Upload avatar thành công", "success");
        })
        .catch((err) => {
          //   console.log(err);
          handleNotification("Upload avatar thất bại", "error");
        });
    }
  };
  return (
    <div>
      <h3
        className="text-center py-3"
        style={{ fontSize: "25px", fontWeight: 600 }}
      >
        Upload Avatar Admin
      </h3>
      <div className="py-2">
        <form action="" onSubmit={handleSubmitAvatar}>
          <div className="">
            <label
              style={{ fontSize: "18px", fontWeight: 600 }}
              htmlFor=""
              className="block"
            >
              Tải lên avatar
            </label>
            <input
              accept="image/png, image/jpeg"
              type="file"
              onChange={(e) => {
                const file = e.target.files[0];
                // console.log(e.target.files[0]);
                if (file) {
                  if (file.size > 1 * 1024 * 1024) {
                    setErrSizeImage("Dung lượng ảnh lớn lớn hơn 1MB");
                  }
                  //  nếu file tồn tại, gọi đến phượng thức createObjectURL
                  // để tạo ra một URL tạm thời cho file đó
                  const fileURL = URL.createObjectURL(file);
                  setUploadImage({ file, fileURL });
                  setErrSizeImage("");
                }
              }}
            />
            <p>{errSizeImage}</p>
          </div>
          {/* Nếu đường dẫn không null thì mới src mới nhận giá trị */}
          <img
            style={{ width: "120px" }}
            src={uploadImage?.fileURL}
            alt=""
            className="my-5"
          />
          <button
            type="submit"
            style={{ fontSize: "15px", fontWeight: 600 }}
            className="mt-5 py-2 px-5 bg-green-600 rounded-xl hover:bg-green-500"
          >
            Upload hình ảnh
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadAdmin;
