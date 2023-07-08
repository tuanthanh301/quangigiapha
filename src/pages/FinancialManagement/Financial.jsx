import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import React from "react";
import CollectMoney from "./CollectMoney";
import { FinancialStyle } from "./financialStyle";
const { Content, Sider } = Layout;

const menuItem = ["Tài chính", "Sự kiện", "Tài khoản"];
const childrenItem = [["Thu", "Chi", "Báo cáo"]];

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    return {
      key: menuItem[index],
      icon: React.createElement(icon),
      label: menuItem[index],
      children: childrenItem[index]?.map((element, j) => {
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
            style={
              {
                // background: red,
              }
            }
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              onSelect={(e) => {
                console.log(e);
              }}
              style={{
                height: "100%",
                borderRight: 0,
              }}
              items={items2}
            />
          </Sider>
          <Layout
            className="content-container"
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
            className="content-tab"
            >
              <CollectMoney />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </FinancialStyle>
  );
};
export default Financial;
