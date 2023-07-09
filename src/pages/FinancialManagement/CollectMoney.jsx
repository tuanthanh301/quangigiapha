import { Tabs } from "antd";
import React from "react";
import TabThu from "./CollectTab/TabThu";
import RevenueList from "./RevenueListTab/RevenueList";
import Sponsor from "./Sponsorship/Sponsor";

const CollectMoney = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: `Thu`,
      children: <TabThu/>,
    },
    {
      key: "2",
      label: `Tài trợ`,
      children: <Sponsor/>,
    },
    {
      key: "3",
      label: `Thiết lập mức thu`,
      children: <RevenueList/>,
    },
  ];
  return (
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
  );
};

export default CollectMoney;
