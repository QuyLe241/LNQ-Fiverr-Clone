import React from "react";
import FormRegister from "../../components/FormRegister/FormRegister";
import ImgRegis from "../../Img/RegisterImg1.png";
import BgRegister from "../../Img/BgRegister.png";
import BgRegister1 from "../../Img/BgRegister1.png";
import "./styleRegister.scss";

const RegisterPage = () => {
  return (
    <div
      className="container_register"
      style={{ backgroundImage: `url(${BgRegister1})` }}
    >
      <div className="container">
        <div
          className="flex justify-center items-center"
          style={{ minHeight: "100vh" }}
        >
          {/* <div className="w-1/2">
          <img src={ImgRegis} alt="img register" />
        </div> */}
          <div className="containerRegister_Form w-4/5">
            <FormRegister />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
