import { http } from "./config.js";

export const commentManagement = {
  //  get list comments
  getListComments: () => {
    return http.get("/binh-luan");
  },

  //   delete comment
  deleteComment: (token, id) => {
    return http.delete(`/binh-luan/${id}`, {
      headers: {
        token,
      },
    });
  },
};
