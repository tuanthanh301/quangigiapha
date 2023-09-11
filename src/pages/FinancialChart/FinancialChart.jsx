import React from "react";
import { useSelector } from "react-redux";
import { formatMoney } from "../../helpers/formatMoney";
import {
  FinancialChartWrapper,
  ItemTotalWrapper,
  PieChartWrapper,
  TotalWrapper,
} from "./financialChartStyle";
import PieChart from "./PieChart";
import PieStaticChart from "./PieStaticChart";

const ItemTotal = ({ color, total, title, des, date }) => {
  return (
    <ItemTotalWrapper color={color}>
      <div className="money-total">{total ? formatMoney(total) : date}</div>
      <div className="total-title">{title}</div>
      <div className="bottom-des">{des}</div>
    </ItemTotalWrapper>
  );
};

const FinancialChart = () => {
  const dataCollect = useSelector((state) => state.database.dataCollect);
  const dataSponsor = useSelector((state) => state.database.dataSponsor);
  const dataExpense = useSelector((state) => state.database.dataExpense);
  const dataEvent = useSelector((state) => state.database.dataEvent);

  const countCollect = [...dataCollect, ...dataSponsor].length;
  const getTotalThu = () => {
    const data = [...dataCollect, ...dataSponsor];
    let totalRevenue = 0;
    for (let i = 0; i < data.length; i++) {
      totalRevenue += data[i].money;
    }
    return totalRevenue;
  };

  const getTotalExpense = () => {
    let totalRevenue = 0;
    for (let i = 0; i < dataExpense.length; i++) {
      totalRevenue += dataExpense[i].money;
    }
    return totalRevenue;
  };

  const getUpcomingEvent = (arr) => {
    // Lọc ra các sự kiện có ngày diễn ra trong tương lai
    const now = new Date();
    const upcomingEvents = arr.filter((event) => new Date(event.date) > now);

    // Sắp xếp mảng kết quả theo thứ tự tăng dần của ngày
    upcomingEvents.sort((a, b) => new Date(a.date) - new Date(b.date));
    // Trả về sự kiện gần nhất
    console.log(upcomingEvents)
    return upcomingEvents[0];

  };

  return (
    <>
      <TotalWrapper>
        <ItemTotal
          color="#fdcb6e"
          total={getTotalThu()}
          title="Tổng Thu(Thu và tài trợ)"
          des={`${countCollect} bản ghi đã thu`}
        />
        <ItemTotal
          color="#d63031"
          total={getTotalExpense()}
          title="Tổng chi"
          des={`${dataExpense.length} bản ghi đã chi`}
        />
        <ItemTotal
          color="#00b894"
          total={getTotalThu() - getTotalExpense()}
          title="Số dư"
          des={
            getTotalThu() - getTotalExpense() < 0
              ? "Chi tiêu quá mức"
              : "Quỹ họ ổn định"
          }
        />
        <ItemTotal
          color="#0984e3"
          // date={getUpcomingEvent(dataEvent).date}
          // title={getUpcomingEvent(dataEvent).name}
          des="Sự kiện sắp tới"
        />
      </TotalWrapper>
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
    </>
  );
};

export default FinancialChart;
