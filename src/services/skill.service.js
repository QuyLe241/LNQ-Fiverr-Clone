import { http } from "./config";

export const skillService = {
  skillUser: () => {
    return http.get("/skill");
  },
};
