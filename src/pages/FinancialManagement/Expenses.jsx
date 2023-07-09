import { Tabs } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import TabThu from "./CollectTab/TabThu";
import ExpensesList from "./ExpensesListTab/ExpensesList";
import RevenueList from "./RevenueListTab/RevenueList";
import Sponsor from "./Sponsorship/Sponsor";
import TypeExpenseList from "./TypeExpenseList/TypeExpenseList";

const Expenses = () => {
 
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: `Chi`,
      children: <ExpensesList />,

    },
    {
      key: "2",
      label: `Loại chi`,
      children: <TypeExpenseList/>,
    },
  ];
  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
};

export default Expenses;
