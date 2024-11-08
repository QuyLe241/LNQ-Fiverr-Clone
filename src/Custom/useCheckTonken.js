//      check token xem người dùng đã đăng nhập chưa
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getLocalStorage } from "../utils/utils";

const useCheckToken = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkToken = getLocalStorage("user");
    if (checkToken && checkToken.token) {
      navigate("/error");
    }
  }, [navigate]);
};

export default useCheckToken;
