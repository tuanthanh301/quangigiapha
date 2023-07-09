import { Pie } from "@ant-design/plots";
import React from "react";
import { useSelector } from "react-redux";

function mergeExpenses(expenses) {
  const mergedExpenses = [];

  expenses.forEach(function(expense) {
    const existingExpense = mergedExpenses.find(function(item) {
      return item.expense === expense.expense;
    });

    if (existingExpense) {
      existingExpense.money += expense.money;
    } else {
      mergedExpenses.push({
        id: expense.id,
        expense: expense.expense,
        money: expense.money,
        dNt: expense.dNt,
      });
    }
  });

  return mergedExpenses;
}

const PieChart = () => {
  const dataExpense = useSelector((state) => state.database.dataExpense);

  const data = mergeExpenses(dataExpense).map((element , index) => ({
    type: element.expense,
    value: element.money,
  }));
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.9,
    label: {
      type: "inner",
      offset: "-30%",
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: "center",
      },
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
  };
  return <Pie {...config} />;
};

export default PieChart;
