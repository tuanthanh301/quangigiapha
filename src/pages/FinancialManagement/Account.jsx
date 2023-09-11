import { Tabs } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import AccountList from "./AccountList/AccountList";

const Account = () => {
 
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: `Danh sách tài khoản`,
      children: <AccountList/>,

    },
  ];
  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
};

export default Account;
