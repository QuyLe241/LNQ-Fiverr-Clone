import axios from "axios";

//      AxiosAPi / instance
//      baseURL : đường dẫn api tổng của trang web
//      timeOut : thời gian chờ của người dùng , quá thời gian chờ sẽ báo lỗi cho người dùng
//      https://fiverrnew.cybersoft.edu.vn/swagger/index.html
export const http = axios.create({
  baseURL: "https://fiverrnew.cybersoft.edu.vn/api",
  timeout: 20000,
  headers: {
    tokenCyberSOft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlSlMgNDQiLCJIZXRIYW5TdHJpbmciOiIwMi8wNC8yMDI1IiwiSGV0SGFuVGltZSI6IjE3NDM1NTIwMDAwMDAiLCJuYmYiOjE3MjUwMzcyMDAsImV4cCI6MTc0MzY5OTYwMH0.OCEIIliIEc_im8rH12w1upfdzFQWbkFksdmNNICmhs8",
  },
});
