

// 测试回滚
import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import { connect } from "dva";
import { routerRedux } from "dva/router";
// import { push } from "../utils/routers";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const LayoutBase = ({ children, dispatch }) => {
  const goToRouter = ({ item, key, keyPath }) => {
    dispatch(routerRedux.push(keyPath[0]));
  }

  const MenuData = [
    {
      text: "汽车之家",
      pathname: "/home"
    },
    {
      text: "汽车之家1",
      pathname: "/car1"
    }
  ];

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          onClick={goToRouter}
          // theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ lineHeight: "64px" }}
        >
          {MenuData.map(item => (
            <Menu.Item key={item.pathname}>{item.text}</Menu.Item>
          ))}
        </Menu>
      </Header>
      <Layout>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          {children}
        </Layout>
      </Layout>
    </Layout>
  );
};
export default connect()(LayoutBase);
