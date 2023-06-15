import { Button, Input } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getImagePath } from "../../helpers/image";
import { storeSetUserInfor } from "../../store/auth-reducer";
import { BackGroundLogin } from "./loginPageStyle";

const LoginPage = () => {
  const [inforLogin, setInforLogin] = useState();
  const listAccount = useSelector((state) => state.auth.listAccount);
  // console.log("listAccount", listAccount);


  const dispatch = useDispatch();
  const handleLogin = () => {
    const obj = [...listAccount].find(
      (o) => o.email === inforLogin.email && o.password === inforLogin.password
    );
    if (obj) {
      console.log(true);
      dispatch(storeSetUserInfor(obj))    
      console.log(obj)
    } else {
      console.log(false);
    }
  };
  return (
    <BackGroundLogin>
      <div className="logo-family">
        {/* <img src={getImagePath("logoFamily.png")} alt="" /> */}
        <h1>Login</h1>
      </div>
      <div className="line"></div>
      <Input
        className="user-login"
        size="large"
        placeholder="Email"
        onChange={(event) =>
          setInforLogin({
            ...inforLogin,
            email: event.target.value,
          })
        }
      />
      <Input
        className="user-login"
        size="large"
        placeholder="Password"
        type="password"
        onChange={(event) =>
          setInforLogin({
            ...inforLogin,
            password: event.target.value,
          })
        }
      />
      <Button className="user-login" type="primary" onClick={handleLogin}>
        Sign in
      </Button>
      <div className="line mt2"></div>
      {/* <div className="">
        <a href="">Forgot password</a>
      </div> */}
      <a href="http://localhost:3000/register" path="/register">
        You dont't have an account? Create new account
      </a>
    </BackGroundLogin>
  );
};

export default LoginPage;
