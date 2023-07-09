import { Pie } from "@ant-design/plots";
import React from "react";
import { useSelector } from "react-redux";

function mergeExpenses(expenses, arrSponsor) {
  var mergedExpenses = [];

  [...expenses,...arrSponsor].forEach(function(expense) {
    var existingExpense = mergedExpenses.find(function(item) {
      return item.type === expense.revenue || item.type === expense.sponsorship;
    });

    if (existingExpense) {
      existingExpense.value += expense.money;
    } else {
      mergedExpenses.push({
        type: expense.revenue || expense.sponsorship,
        value: expense.money,
      });
    }
  });

  return mergedExpenses;
}

const PieStaticChart = () => {
  const dataCollect = useSelector((state) => state.database.dataCollect);
  const dataSponsor = useSelector((state) => state.database.dataSponsor);

  const data = mergeExpenses(dataCollect,dataSponsor);
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

export default PieStaticChart;
