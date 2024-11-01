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
};
