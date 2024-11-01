import React from "react";
import { Spin } from "antd";

const LoadingSpin = () => {
  return (
    <div className="flex justify-center items-center">
      <Spin delay={10} fullscreen={true} size={"large"} />
    </div>
  );
};

export default LoadingSpin;
