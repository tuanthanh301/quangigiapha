import { styled } from "styled-components";

export const BackGroundLogin = styled.div`
  background-image: url("https://crmaccess.vtiger.com/vtigeraddons/pages/assets/_v20230427_/201804/images/background-mask-20.png");
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  .logo-family {
    margin-top: 100px;
    img {
      width: 100px;
      height: 100px;
    }
    display: flex;
    /* flex-direction: row; */
    align-items: center; 
    height: fit-content;
  }
  .line{
    height: 2px;
    width: 350px;
    background-color: #ecf0f1;
  }
  .user-login{
    width: 250px;
    margin-top: 20px;
  }
  .mt2{
    margin-top: 20px;
    width: 150px;
  }
`;
