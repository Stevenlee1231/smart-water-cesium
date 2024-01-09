import {
  ExclamationOutlined,
  FireOutlined,
  GlobalOutlined,
  MonitorOutlined,
  StockOutlined,
} from "@ant-design/icons";
import { Menu, Radio, Switch } from "antd";
import Layout from "antd/lib/layout";
import { SiderTheme } from "antd/lib/layout/Sider";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ContentScreen } from "./content";

const { Sider } = Layout;
const { SubMenu } = Menu;
const whiteBackgroundStyle = {
  position:'relative',
  left:10,
  top:25,
  backgroundColor:'white',
  width:130
}
export const initEarthVisible = {
  // rainfall: false,
  // eva: false,
  meteorology: false,
  three: false,
  stratum: false,
  hydrology: false,
  tunnel: false,
  monitoring: false,
  gushing: false,
  regionalWater: false,
  mountain2: false,
  mountain4: false,
  mountain: false,
  mountainSix: false,
  count: false,
  engineering:false,
  riverSystem:false,
  route:false
};
const switchStyle = {
  // float: "right",
  transform: "translateY(-50%)",
  position: "absolute",
  top: "50%",
  right: "10%",
};
export const SiderScreen = ({
  theme,
  setEarthVisible,
  earthVisible,
}: {
  theme: SiderTheme | string;
  setEarthVisible: any;
  earthVisible: any;
}) => {
  const handleSwitch = (key: string) => {
    return (checked: boolean, e: any) => {
      e.stopPropagation();
      setEarthVisible((prev: any) => {
        return { ...prev, [key]: checked };
      });
    };
  };
  return (
    <Layout>
      <Sider
        width={304}
        style={{
          height: `calc(100vh - 70px)`,
          overflowY: "auto",
          overflowX: "hidden",
          background: "white",
        }}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={["meteorology"]}
          style={{ height: "100%", borderRight: 0 }}
          theme={theme as SiderTheme}
        >
          <SubMenu key="sub1" icon={<GlobalOutlined />} title="项目信息">
            <Menu.Item key="meteorology">
              项目简介
              <Switch
              onClick={handleSwitch("meteorology")}
              size="small"
              style={switchStyle as any}
              checked={earthVisible["meteorology"]}
            />
            </Menu.Item>
            <Menu.Item key="tunnel">
              隧洞信息  
              <Switch
                size="small"
                style={switchStyle as any}
                onClick={handleSwitch("tunnel")}
                checked={earthVisible["tunnel"]}
              />
            </Menu.Item>
            <Menu.Item key="route">
              线路信息  
              <Switch
                size="small"
                style={switchStyle as any}
                onClick={handleSwitch("route")}
                checked={earthVisible["route"]}
              />
            </Menu.Item>
          </SubMenu>
          {/* <Menu.Item key="meteorology" icon={<FireOutlined />}>
            项目信息
            <Switch
              onClick={handleSwitch("meteorology")}
              size="small"
              style={switchStyle as any}
              checked={earthVisible["meteorology"]}
            />
          </Menu.Item> */}
          <SubMenu key="sub2" icon={<GlobalOutlined />} title="区域信息">
            <Menu.Item key="riverSystem">
              水系
              <Switch
                size="small"
                style={switchStyle as any}
                onClick={handleSwitch("riverSystem")}
                checked={earthVisible["riverSystem"]}
              />
            </Menu.Item>
            <Menu.Item key="engineering">
              区域地质
              <Switch
                size="small"
                style={switchStyle as any}
                onClick={handleSwitch("stratum")}
                checked={earthVisible["stratum"]}
              />
            </Menu.Item>
            <Menu.Item key="stratum">
              工程地质
              <Switch
                size="small"
                style={switchStyle as any}
                onClick={handleSwitch("engineering")}
                checked={earthVisible["engineering"]}
              />
            </Menu.Item>
            <Menu.Item key="hydrology">
              水文地质
              <Switch
                size="small"
                style={switchStyle as any}
                onClick={handleSwitch("hydrology")}
                checked={earthVisible["hydrology"]}
              />
            </Menu.Item>
            {/* <Menu.Item key="three">
              三维地质模型
            </Menu.Item> */}
          </SubMenu>
          {/* <SubMenu key="sub3" icon={<StockOutlined />} title="监测信息">
            <Menu.Item key="monitoring">
              监测井
              <Switch
                size="small"
                style={switchStyle as any}
                onClick={handleSwitch("monitoring")}
                checked={earthVisible["monitoring"]}
              />
            </Menu.Item>
            <Menu.Item key="gushing">
              突涌水点
              <Switch
                size="small"
                style={switchStyle as any}
                onClick={handleSwitch("gushing")}
                checked={earthVisible["gushing"]}
              />
            </Menu.Item>
            <Menu.Item key="regionalWater">
              区域水位
              <Switch
                size="small"
                style={switchStyle as any}
                onClick={handleSwitch("regionalWater")}
                checked={earthVisible["regionalWater"]}
              />
            </Menu.Item>
          </SubMenu> */}
          <SubMenu key="sub4" icon={<MonitorOutlined />} title="预测">
            <Menu.Item key="mountain2">
              香炉山隧洞2号模型
              <Switch
                size="small"
                style={switchStyle as any}
                onClick={handleSwitch("mountain2")}
                checked={earthVisible["mountain2"]}
              />
            </Menu.Item>
            <Menu.Item key="mountain4">
              香炉山隧洞4号模型
              <Switch
                size="small"
                style={switchStyle as any}
                onClick={handleSwitch("mountain4")}
                checked={earthVisible["mountain4"]}
              />
            </Menu.Item>
            <Menu.Item key="mountain">
              香炉山隧洞5号模型
              <Switch
                size="small"
                style={switchStyle as any}
                onClick={handleSwitch("mountain")}
                checked={earthVisible["mountain"]}
              />
            </Menu.Item>
            {/* <Menu.Item key="mountainSix">
              香炉山五号施工支洞
              <Switch
                size="small"
                style={switchStyle as any}
                onClick={handleSwitch("mountainSix")}
                checked={earthVisible["mountainSix"]}
              />
            </Menu.Item> */}
          </SubMenu>
          <Menu.Item icon={<ExclamationOutlined />}key="count">
            预警
            <Switch
              size="small"
              style={switchStyle as any}
              onClick={handleSwitch("count")}
              checked={earthVisible["count"]}
            />
          </Menu.Item>
        </Menu>
      </Sider>
      <ContentScreen
        theme={theme}
        setEarthVisible={setEarthVisible}
        earthVisible={earthVisible}
      />
    </Layout>
  );
};
