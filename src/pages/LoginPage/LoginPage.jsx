import { Button, Input } from "antd";
import React from "react";
import { getImagePath } from "../../helpers/image";
import { BackGroundLogin } from "./loginPageStyle";

const LoginPage = () => {
  return (
    <BackGroundLogin>
      <div className="logo-family">
        {/* <img src={getImagePath("logoFamily.png")} alt="" /> */}
        <h1>Login</h1>
      </div>
      <div className="line"></div>
      <Input className="user-login" size="large" placeholder="Username" />
      <Input className="user-login" size="large" placeholder="Password" />
      <Button className="user-login" type="primary">Sign in</Button>
      <div className="line mt2"></div>
      <a href="">Forgot password</a>
    </BackGroundLogin>
  );
};

export default LoginPage;