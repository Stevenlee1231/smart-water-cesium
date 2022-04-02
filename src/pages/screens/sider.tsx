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
import { Link, useSearchParams } from "react-router-dom";
import { ContentScreen } from "./content";

const { Sider } = Layout;
const { SubMenu } = Menu;
const initEarthVisible = {
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
  visible,
  setVisible,
  callback,
  earthVisible,
}: {
  theme: SiderTheme | string;
  visible: boolean;
  setVisible: (visible: boolean) => void;
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
      <Sider width={304} style={{ height: "100vh" }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={
            window.location.pathname === "/rainfall" ? ["1"] : ["2"]
          }
          style={{ height: "100%", borderRight: 0 }}
          theme={theme as SiderTheme}
        >
          <SubMenu key="sub1" icon={<FireOutlined />} title="水文信息">
            <Menu.Item key="1">
              <Link to={"rainfall"}>降水量</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to={"evaporationcapacity"}>蒸发量</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<GlobalOutlined />} title="区域信息">
            <Menu.Item key="5"><Link to={"formation"}>地层信息</Link></Menu.Item>
            <Menu.Item key="hydrology" onClick={handleSelect}>
              <Link to={"earth"}>水文地质信息</Link>
            </Menu.Item>
            <Menu.Item key="tunnel" onClick={handleSelect}>
              <Link to={"earth"}>隧洞及支洞</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<StockOutlined />} title="监测信息">
            <Menu.Item key="monitoring" onClick={handleSelect}>
              <Link to={"earth"}>监测井</Link>
            </Menu.Item>
            <Menu.Item key="gushing" onClick={handleSelect}>
              <Link to={"earth"}>突涌水点</Link>
            </Menu.Item>
            <Menu.Item key="regionalWater" onClick={handleSelect}>
              <Link to={"earth"}>区域水位</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" icon={<MonitorOutlined />} title="预测">
            <SubMenu key="sub41" title="GMS模型预测">
              <Menu.Item key="GMSMountain" onClick={handleSelect}>
                <Link to={"earth"}>香炉山隧洞模型 </Link>
              </Menu.Item>
              <Menu.Item key="GMSMountainSix" onClick={handleSelect}>
                <Link to={"earth"}>香炉山六号隧洞模型 </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub42" title="深度学习模型预测">
              <Menu.Item key="mountain" onClick={handleSelect}>
                <Link to={"earth"}>香炉山隧洞模型 </Link>
              </Menu.Item>
              <Menu.Item key="mountainSix" onClick={handleSelect}>
                <Link to={"earth"}>香炉山六号隧洞模型 </Link>
              </Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub5" icon={<ExclamationOutlined />} title="预警">
            <Menu.Item key="12">
              算法选择：
              <Radio.Group defaultValue="a" buttonStyle="solid">
                <Radio.Button value="a">KMN</Radio.Button>
                <Radio.Button value="b">CNN</Radio.Button>
              </Radio.Group>
            </Menu.Item>
            <Menu.Item key="count" onClick={handleSelect}>
              <Link to={"earth"}>计算</Link>
            </Menu.Item>
            <Menu.Item key="result" onClick={handleSelect}>
              <Link to={"earth"}>预警结果</Link>
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
