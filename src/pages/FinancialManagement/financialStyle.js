import { styled } from "styled-components";

export const FinancialStyle = styled.div`
    width: 75%;
    height: 100vh;
    background-color: pink;
    display: flex;
    margin: auto;
    .header{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    },
    .title{
        font-size: 32px;
        display: flex;
    }
    Button{
        width: fit-content;
        height: fit-content;
        font-size: 32px;
        background-color: green;
        display: flex;
    }
    .line{
    height: 2px;
    width: 350px;
    background-color: #ecf0f1;
  }
`;
