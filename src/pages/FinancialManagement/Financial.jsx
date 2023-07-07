import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import React from "react";
import ColectMoney from "./ColectMoney";
import { FinancialStyle } from "./financialStyle";
const { Header, Content, Sider } = Layout;
const items1 = [].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const menuItem = ["Tài chính", "Sự kiện","Tài khoản"]
const childrenItem = [["Thu","Chi","Báo cáo"]]

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    return {
      key: menuItem[index],
      icon: React.createElement(icon),
      label: menuItem[index],
      children: childrenItem[index]?.map((element, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: element,
          label: element,
        };
      }),
    };
  }
);
const Financial = () => {
  return (
    <FinancialStyle>
      <Layout>
        <Layout>
          <Sider
            width={200}
            style={{
              // background: red,
            }}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              onSelect={(e) => {
                console.log(e)
              }}
              style={{
                height: "100%",
                borderRight: 0,
              }}
              items={items2}
            />
          </Sider>
          <Layout
            style={{
              padding: "0 24px 24px",
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                padding: 24,
                margin: 0,
                height: "100vh",
              // background: red,
            }}
            >
              <ColectMoney />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </FinancialStyle>
  );
};
export default Financial;
