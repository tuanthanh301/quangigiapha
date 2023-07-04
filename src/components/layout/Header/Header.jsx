import { HomeOutlined } from "@ant-design/icons";
import React from "react";
import { HeaderWrapper, ItemHeader } from "./headerStyle";

const Header = () => {
  return (
    <HeaderWrapper>
      <ItemHeader to="/">
        <HomeOutlined />
      </ItemHeader>
      <ItemHeader to="/tree">Tree</ItemHeader>
      {/* <ItemHeader to="/financial">Financial management</ItemHeader> */}
      <ItemHeader to="/list">List Member</ItemHeader>
      <ItemHeader to="/profile">Profile</ItemHeader>
      
    </HeaderWrapper>
  );
};

export default Header;
