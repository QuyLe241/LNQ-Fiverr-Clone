import React from "react";
import { Tabs } from "antd";
import ListLanguage from "./ListLanguage";
import ListCurrency from "./ListCurrency";

const SetLanguage = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Language",
      children: <ListLanguage />,
    },
    {
      key: "2",
      label: "Currency",
      children: <ListCurrency />,
    },
  ];
  return (
    <div>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
};

export default SetLanguage;
