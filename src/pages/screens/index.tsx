import { useRecoilState } from "recoil";
import {
  Layout,
  Menu,
  Radio,
  Dropdown,
  Button,
  Typography,
  Switch,
} from "antd";
import {
  GlobalOutlined,
  MonitorOutlined,
  StockOutlined,
  ExclamationOutlined,
  FireOutlined,
} from "@ant-design/icons";
import styled from "@emotion/styled";
import { SiderTheme } from "antd/lib/layout/Sider";
import { theme_store } from "../../store/theme";
import { resetRoute, useDocumentTitle } from "../../utils";
import "antd/dist/antd.css";


const { SubMenu } = Menu;
const { Header, Sider } = Layout;

export const Screen = () => {
  useDocumentTitle("项目首页")
  //设置头部主题
  // const [hColor, setHClolor] = useState("skyblue");
  //设置菜单主题
  const [theme, setTheme] = useRecoilState<SiderTheme | string>(theme_store);
  const changeTheme = (value: boolean) => {
    setTheme(value ? "dark" : "light");
  };

  return (
    <Container>
      <Layout>
        <HeaderCss
          style={
            theme == "light"
              ? { background: "rgb(0,82,204)" }
              : { background: "#111d2c" }
          }
        >
          <HeaderLeft>
            <Typography.Text style={{ color: "white" }}>
              隧洞突涌水(泥)综合预测及安全预警平台
            </Typography.Text>
          </HeaderLeft>
          <HeaderRight>
            <Switch
              onChange={changeTheme}
              size={"small"}
              style={{ color: "white" }}
            />{" "}
            <Typography.Text style={{ color: "white" }}>
              切换主题
            </Typography.Text>
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item key={"logout"}>
                    <Button type={"link"} onClick={resetRoute}>
                      登出
                    </Button>
                  </Menu.Item>
                </Menu>
              }
            >
              <Button
                type={"link"}
                onClick={(e) => e.preventDefault()}
                style={{ color: "white" }}
              >
                Hi, name
              </Button>
            </Dropdown>
          </HeaderRight>
        </HeaderCss>
        <Layout>
          <Sider width={304} style={{ height: "100vh" }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              style={{ height: "100%", borderRight: 0 }}
              theme={theme as SiderTheme}
            >
              <SubMenu key="sub1" icon={<FireOutlined />} title="水文信息">
                <Menu.Item key="1">降水量</Menu.Item>
                <Menu.Item key="2">蒸发量</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<GlobalOutlined />} title="区域信息">
                <Menu.Item key="5">地层信息</Menu.Item>
                <Menu.Item key="6">水文地质信息</Menu.Item>
                <Menu.Item key="7">隧洞及支洞</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" icon={<StockOutlined />} title="监测信息">
                <Menu.Item key="9">监测井</Menu.Item>
                <Menu.Item key="10">突涌水点</Menu.Item>
                <Menu.Item key="11">区域水位</Menu.Item>
              </SubMenu>
              <SubMenu key="sub4" icon={<MonitorOutlined />} title="预测">
                <SubMenu key="sub41" title="GMS模型预测">
                  <Menu.Item key="411">香炉山隧洞模型 7</Menu.Item>
                  <Menu.Item key="412">香炉山六号隧洞模型 8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub42" title="深度学习模型预测">
                  <Menu.Item key="421">香炉山隧洞模型 7</Menu.Item>
                  <Menu.Item key="422">香炉山六号隧洞模型 8</Menu.Item>
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
        </Layout>
      </Layout>
    </Container>
  );
};
const Container = styled.div`
  min-width: 700px;
`;

const HeaderCss = styled(Header)`
  display: flex;
  height: 7rem;
  text-align: center;
  justify-content: space-between;
  font-size: 20px;
`;
const HeaderLeft = styled.div`
  color: white;
`;
const HeaderRight = styled.div`
  font-size: 16px;
  text-align: middle;
`;
