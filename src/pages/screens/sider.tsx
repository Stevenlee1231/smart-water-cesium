import {
  ExclamationOutlined,
  FireOutlined,
  GlobalOutlined,
  MonitorOutlined,
  StockOutlined,
} from "@ant-design/icons";
import { Menu, Radio } from "antd";
import Layout from "antd/lib/layout";
import { SiderTheme } from "antd/lib/layout/Sider";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ContentScreen } from "./content";

const { Sider } = Layout;
const { SubMenu } = Menu;
export const initEarthVisible = {
  rainfall: false,
  eva: false,
  three: false,
  stratum: false,
  hydrology: false,
  tunnel: false,
  monitoring: false,
  gushing: false,
  regionalWater: false,
  GMSMountain: false,
  GMSMountainSix: false,
  mountain: false,
  mountainSix: false,
  count: false,
  result: false,
};
export const SiderScreen = ({
  theme,
  callback,
  earthVisible,
}: {
  theme: SiderTheme | string;
  callback: any;
  earthVisible: any;
}) => {
  const handleSelect = (e: any) => {
    callback((prev: any) => {
      if (prev[e.key]) return prev;
      return { ...initEarthVisible, [e.key]: true };
    });
  };
  return (
    <Layout>
      <Sider
        width={304}
        style={{
          height: `calc(100vh - 70px)`,
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={["meteorology"]}
          style={{ height: "100%", borderRight: 0 }}
          theme={theme as SiderTheme}
        >
          <SubMenu key="meteorology" icon={<FireOutlined />} title="气象水文">
            {/* <Menu.Item key="rainfall" onClick={handleSelect}>
              降水量
            </Menu.Item>
            <Menu.Item key="eva" onClick={handleSelect}>
              蒸发量 
            </Menu.Item> */}
          </SubMenu>
          <SubMenu key="sub2" icon={<GlobalOutlined />} title="区域信息">
            <Menu.Item key="tunnel" onClick={handleSelect}>
              隧洞线路
            </Menu.Item>
            <Menu.Item key="stratum" onClick={handleSelect}>
              区域地质
            </Menu.Item>
            <Menu.Item key="hydrology" onClick={handleSelect}>
              水文地质
            </Menu.Item>
            {/* <Menu.Item key="three" onClick={handleSelect}>
              三维地质模型
            </Menu.Item> */}
          </SubMenu>
          <SubMenu key="sub3" icon={<StockOutlined />} title="监测信息">
            <Menu.Item key="monitoring" onClick={handleSelect}>
              监测井
            </Menu.Item>
            <Menu.Item key="gushing" onClick={handleSelect}>
              突涌水点
            </Menu.Item>
            <Menu.Item key="regionalWater" onClick={handleSelect}>
              区域水位
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" icon={<MonitorOutlined />} title="预测">
            <SubMenu key="sub41" title="GMS模型预测">
              <Menu.Item key="GMSMountain" onClick={handleSelect}>
                香炉山隧洞模型
              </Menu.Item>
              <Menu.Item key="GMSMountainSix" onClick={handleSelect}>
                香炉山六号隧洞模型
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub42" title="深度学习模型预测">
              <Menu.Item key="mountain" onClick={handleSelect}>
                香炉山隧洞模型
              </Menu.Item>
              <Menu.Item key="mountainSix" onClick={handleSelect}>
                香炉山六号隧洞模型
              </Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub5" icon={<ExclamationOutlined />} title="预警">
            <Menu.Item key="count" onClick={handleSelect}>
              计算
            </Menu.Item>
            <Menu.Item key="result" onClick={handleSelect}>
              预警结果
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <ContentScreen
        theme={theme}
        callback={callback}
        earthVisible={earthVisible}
      />
    </Layout>
  );
};
