import "antd/dist/antd.css";
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
  InfoOutlined,
  GlobalOutlined,
  MonitorOutlined,
  StockOutlined,
  ExclamationOutlined,
} from "@ant-design/icons";
import styled from "@emotion/styled";
import { useState } from "react";
import { SiderTheme } from "antd/lib/layout/Sider";
import { resetRoute, useDocumentTitle } from "../utils";
import { Content } from "antd/lib/layout/layout";
import * as echarts from "echarts";
import { EChartsOption } from "echarts";

const { SubMenu } = Menu;
const { Header, Sider } = Layout;

export const Screen = () => {
  useDocumentTitle("项目首页");
  //设置头部主题
  const [hColor, setHClolor] = useState("skyblue");
  //设置菜单主题
  const [theme, setTheme] = useState<SiderTheme>("light");
  const changeTheme = (value: boolean) => {
    setTheme(value ? "dark" : "light");
    setHClolor(value ? "" : "skyblue");
  };

  const showEcharts = (textAndName: string) =>
    setTimeout(() => {
      var chartDom = document.getElementById("content")!;
      var myChart = echarts.init(chartDom);
      var option: EChartsOption;

      myChart.setOption(
        (option = {
          title: {
            text: textAndName,
            left: "1%",
          },
          tooltip: {
            trigger: "axis",
          },
          grid: {
            left: "5%",
            right: "15%",
            bottom: "10%",
          },
          xAxis: {
            data: [2001, 2002, 2003, 2004, 2005],
          },
          yAxis: {},
          toolbox: {
            right: 10,
            feature: {
              dataZoom: {
                yAxisIndex: "none",
              },
              restore: {},
              saveAsImage: {},
            },
          },
          dataZoom: [
            {
              startValue: "2014-06-01",
            },
            {
              type: "inside",
            },
          ],
          visualMap: {
            top: 50,
            right: 10,
            pieces: [
              {
                gt: 0,
                lte: 50,
                color: "#93CE07",
              },
              {
                gt: 50,
                lte: 100,
                color: "#FBDB0F",
              },
              {
                gt: 100,
                lte: 150,
                color: "#FC7D02",
              },
              {
                gt: 150,
                lte: 200,
                color: "#FD0100",
              },
              {
                gt: 200,
                lte: 300,
                color: "#AA069F",
              },
              {
                gt: 300,
                color: "#AC3B2A",
              },
            ],
            outOfRange: {
              color: "#999",
            },
          },
          series: {
            name: textAndName,
            type: "line",
            data: [1, 2, 3, 4, 5],
            markLine: {
              silent: true,
              lineStyle: {
                color: "#333",
              },
              data: [
                {
                  yAxis: 50,
                },
                {
                  yAxis: 100,
                },
                {
                  yAxis: 150,
                },
                {
                  yAxis: 200,
                },
                {
                  yAxis: 300,
                },
              ],
            },
          },
        })
      );
    }, 1);

  return (
    <Container>
      <Layout>
        <HeaderCss style={{ backgroundColor: hColor }}>
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
          <Sider width={280} style={{ height: "100vh" }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              style={{ height: "100%", borderRight: 0 }}
              theme={theme}
            >
              <SubMenu key="sub1" icon={<InfoOutlined />} title="水纹信息">
                <Menu.Item key="1" onClick={() => showEcharts("降水量")}>
                  降水量
                </Menu.Item>
                <Menu.Item key="2" onClick={() => showEcharts("蒸发量")}>
                  蒸发量
                </Menu.Item>
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
          <Content>
            <div id="content" style={{ height: "100%", width: "100%" }}></div>
          </Content>
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
const HeaderLeft = styled.div``;
const HeaderRight = styled.div`
  font-size: 16px;
  text-align: middle;
`;
