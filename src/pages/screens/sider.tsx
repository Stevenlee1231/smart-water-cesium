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
import { Link } from "react-router-dom";
import { ContentScreen } from "./content";

const { Sider } = Layout;
const { SubMenu } = Menu;
export const SiderScreen = ({ theme }: { theme: SiderTheme | string }) => {
  return (
    <Layout>
      <Sider width={304} style={{ height: "100vh" }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={window.location.pathname==='/rainfall'?['1']:['2']}
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
            <Menu.Item key="5">地层信息</Menu.Item>
            <Menu.Item key="6"><Link to={"earth"}>水文地质信息</Link></Menu.Item>
            <Menu.Item key="7">隧洞及支洞</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<StockOutlined />} title="监测信息">
            <Menu.Item key="9">监测井</Menu.Item>
            <Menu.Item key="10">突涌水点</Menu.Item>
            <Menu.Item key="11">区域水位</Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" icon={<MonitorOutlined />} title="预测">
            <SubMenu key="sub41" title="GMS模型预测">
              <Menu.Item key="411">香炉山隧洞模型 </Menu.Item>
              <Menu.Item key="412">香炉山六号隧洞模型 </Menu.Item>
            </SubMenu>
            <SubMenu key="sub42" title="深度学习模型预测">
              <Menu.Item key="421">香炉山隧洞模型 </Menu.Item>
              <Menu.Item key="422">香炉山六号隧洞模型 </Menu.Item>
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
            <Menu.Item key="13">计算</Menu.Item>
            <Menu.Item key="14">预警结果</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <ContentScreen theme={theme} />
    </Layout>
  );
};
