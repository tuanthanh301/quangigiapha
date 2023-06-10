import { styled } from "styled-components";

export const BackGroundRegister = styled.div`
  background-image: url("https://crmaccess.vtiger.com/vtigeraddons/pages/assets/_v20230427_/201804/images/background-mask-20.png");
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .register-container {
    width: 428px;
    background-color: rgb(255, 255, 255, 0.5);
    padding: 48px;
    box-shadow: 0px 0px 15px;
    opacity: 1;
  }
  .form-control {
    margin-bottom: 10px;
  }
  .error-feedback{
    color: red;
    /* margin-top: 10px; */
  }
`;
