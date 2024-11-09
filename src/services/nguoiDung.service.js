import { http } from "./config";

export const nguoiDungService = {
  //
  getAllUsers: () => {
    return http.get("/users");
  },
  //    delete
  deleteUser: (id) => {
    return http.delete(`/users?id=${id}`);
  },
  //    create
  createUser: (data) => {
    //  data là dữ liệu cần tạo được gửi đến server thông qua api
    return http.post("/users", data);
  },
};
