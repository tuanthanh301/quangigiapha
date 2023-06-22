import { HomeOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getImagePath } from "../../../helpers/image";
import { storeDeleteUserInfor } from "../../../store/auth-reducer";
import { HeaderWrapper, ItemHeader } from "./headerStyle";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    navigate("/login");
    dispatch(storeDeleteUserInfor());
  };
  return (
    <HeaderWrapper>
      <ItemHeader to="/">
        <HomeOutlined />
      </ItemHeader>
      <ItemHeader to="/tree">Tree</ItemHeader>
      <ItemHeader to="/financial">Financial management</ItemHeader>
      <ItemHeader to="/list">List Member</ItemHeader>
      <ItemHeader to="/profile">Profile</ItemHeader>
      {/* <ItemHeader to="/iphone">Iphone</ItemHeader>
            <ItemHeader to="/watch">Watch</ItemHeader>
            <ItemHeader to="/airpod">AirPods</ItemHeader>
            <ItemHeader>TV & Home</ItemHeader>
            <ItemHeade>Only on Apple</ItemHeade */}
      <ItemHeader>
        <img src={getImagePath("search-icon.svg")} alt="" />
      </ItemHeader>
      <ItemHeader>
        <Button type="primary" danger onClick={handleLogOut}>
          Log Out
        </Button>
      </ItemHeader>
    </HeaderWrapper>
  );
};

export default Header;
