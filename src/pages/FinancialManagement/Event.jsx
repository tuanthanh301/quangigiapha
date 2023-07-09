import { Tabs } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import TabThu from "./CollectTab/TabThu";
import EventList from "./EventList/EventList";
import ExpensesList from "./ExpensesListTab/ExpensesList";
import RevenueList from "./RevenueListTab/RevenueList";
import Sponsor from "./Sponsorship/Sponsor";
import TypeExpenseList from "./TypeExpenseList/TypeExpenseList";

const Event = () => {
 
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: `Danh sách sự kiện`,
      children: <EventList/>,

    },
  ];
  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
};

export default Event;
