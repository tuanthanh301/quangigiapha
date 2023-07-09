import React from "react";
import { FinancialChartWrapper, PieChartWrapper } from "./financialChartStyle";
import PieChart from "./PieChart";
import PieStaticChart from "./PieStaticChart";

const FinancialChart = () => {
  return (
    <FinancialChartWrapper>
      <PieChartWrapper>
        <PieChart />
        <div className="title-chart">Các khoản chi</div>
      </PieChartWrapper>
      <PieChartWrapper>
        <PieStaticChart />
        <div className="title-chart">Các khoản thu</div>
      </PieChartWrapper>
    </FinancialChartWrapper>
  );
};

export default FinancialChart;
