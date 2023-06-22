import { Button } from "antd";
import React from "react";
import { FinancialStyle } from "./financialStyle";

const Financial = () => {
  return (
    <FinancialStyle>
      <div className="header">
        <div className="title">Expenses</div>
        <Button type="primary">New Expenses</Button>
      </div>
      {/* <div className="line"></div>     */}

    </FinancialStyle>
  );
};

export default Financial;
