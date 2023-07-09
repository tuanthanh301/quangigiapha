import { styled } from "styled-components";

export const PieChartWrapper = styled.div`
  width: 60%;
  box-shadow: 0px 0px 2px 2px #dfe6e9;
  height: 300px;
  margin: 20px;
  border-radius: 4px;
  padding-bottom: 40px;
  .title-chart {
    color: gray;
    margin-left: 10px;
    margin-top: 10px;
    font-weight: bold;
  }
`;
export const FinancialChartWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const TotalWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding:0 10px;
`;
export const ItemTotalWrapper = styled.div`
  width: 23%;
  background-color: white;
  height: 150px;
  box-shadow: 0px 0px 2px 2px rgb(223, 230, 233, 0.5);
  border-radius: 4px;
  overflow: hidden;
  .money-total {
    height: 40px;
    color: ${(props) => props.color};
    font-weight: bold;
    padding: 10px 20px 5px 15px;
    font-size:22px;
  }
  .total-title {
    height: 70px;
    color:grey;
    padding-left:15px;
    padding-top:5px;
  }
  .bottom-des {
    height: 40px;
    background-color: ${(props) => props.color};
    display: flex;
    align-items: center;
    color: white;
    padding-left: 16px;
  }
`;
