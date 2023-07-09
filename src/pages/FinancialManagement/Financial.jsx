import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import React, { useState } from "react";
import CollectMoney from "./CollectMoney";
import Event from "./Event";
import Expenses from "./Expenses";
import { FinancialStyle } from "./financialStyle";
import Report from "./Report";
const { Content, Sider } = Layout;

const menuItem = ["Tài chính", "Sự kiện", "Tài khoản"];
const childrenItem = [["Báo cáo","Thu", "Chi"]];

const items2 = [LaptopOutlined, NotificationOutlined, UserOutlined].map(
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
  const [screen, setScreen] = useState("Báo cáo");

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
              defaultSelectedKeys={screen}
              defaultOpenKeys={["Tài chính"]}
              onSelect={(e) => {
                setScreen(e.key);
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
              {screen === "Thu" || screen === "Chi" || screen === "Báo cáo" ? (
                <>
                  <Breadcrumb.Item>Tài Chính</Breadcrumb.Item>
                  <Breadcrumb.Item>{screen}</Breadcrumb.Item>
                </>
              ) : (
                <Breadcrumb.Item>{screen}</Breadcrumb.Item>
              )}

              {/* <Breadcrumb.Item>App</Breadcrumb.Item> */}
            </Breadcrumb>
            <Content className="content-tab">
              {screen === "Thu" && <CollectMoney />}
              {screen === "Chi" && <Expenses />}
              {screen === "Báo cáo" && <Report />}
              {screen === "Sự kiện" && <Event />}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </FinancialStyle>
  );
};
export default Financial;
