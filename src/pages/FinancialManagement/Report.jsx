import { Tabs } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import FinancialChart from "../FinancialChart/FinancialChart";
import FinancialReport from "../FinancialReport/FinancialReport";
import TabThu from "./CollectTab/TabThu";
import EventList from "./EventList/EventList";
import ExpensesList from "./ExpensesListTab/ExpensesList";
import RevenueList from "./RevenueListTab/RevenueList";
import Sponsor from "./Sponsorship/Sponsor";
import TypeExpenseList from "./TypeExpenseList/TypeExpenseList";

const Report = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: `Biểu đồ báo cáo`,
      children: <FinancialChart />,
    },
    {
      key: "2",
      label: `Danh sách thu chi`,
      children: <FinancialReport />,
    },
  ];
  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
};

export default Report;
