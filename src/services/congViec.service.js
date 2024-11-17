import { http } from "./config";

export const congViecService = {
  layCongViecTheoTen: (data) => {
    return http.get(`/cong-viec/lay-danh-sach-cong-viec-theo-ten/${data}`);
  },
  listJobs: (data) => {
    return http.get("/cong-viec");
  },
  detailJob: (data) => {
    return http.get(`/cong-viec/lay-cong-viec-chi-tiet/${data}`);
  },
  // lấy loại công việc
  getTypeJob: () => {
    return http.get("/loai-cong-viec");
  },
  // lấy công việc theo loại
  getJobByType: (id) => {
    return http.get(`/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${id}`);
  },

  //  đặt công việc
  setJob: (token, data) => {
    return http.post("/thue-cong-viec", data, {
      headers: {
        token,
      },
    });
  },
  // lấy công việc user đã đặt
  getJobUser: (token) => {
    return http.get("/thue-cong-viec/lay-danh-sach-da-thue", {
      headers: {
        token,
      },
    });
  },
  // delete job
  deleteJob: (token, idJob) => {
    return http.delete(`/thue-cong-viec/${idJob}`, {
      headers: {
        token,
      },
    });
  },
};
