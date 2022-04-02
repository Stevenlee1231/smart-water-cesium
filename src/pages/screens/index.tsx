import { useRecoilState } from "recoil";
import { Layout } from "antd";
import styled from "@emotion/styled";
import { SiderTheme } from "antd/lib/layout/Sider";
import { theme_store } from "../../store/theme";
import { useDocumentTitle } from "../../utils/customHooks";
import "antd/dist/antd.css";
import { HeaderScreen } from "./header";
import { SiderScreen } from "./sider";
import { useEffect, useState } from "react";

export const Screen = () => {
  useDocumentTitle("项目首页");
  const [theme, setTheme] = useRecoilState<SiderTheme | string>(theme_store);

  const changeTheme = (value: boolean) => {
    setTheme(value ? "dark" : "light");
  };
  //控制地图上显示的东西  并不使用router控制
  const [earthVisible, setEarthVisible] = useState({
    //水文地质信息
    hydrology: false,
    //隧洞及支洞
    tunnel: false,
    //监测井
    monitoring: false,
    //突涌水
    gushing: false,
    //区域水位
    regionalWater: false,
    //GMS香炉山
    GMSMountain: false,
    //GMS香炉山六号
    GMSMountainSix: false,
    //深度学习香炉山
    mountain: false,
    //深度学习香炉山六号
    mountainSix: false,
    //计算
    count: false,
    //预警结果
    result: false,
  });
  //控制sider显示没用
  const [visible, setVisible] = useState(false);
  return (
    <Container>
      <Layout>
        <HeaderScreen theme={theme} changeTheme={changeTheme} />
        <Layout>
          <SiderScreen
            theme={theme}
            visible={visible}
            setVisible={setVisible}
            callback={setEarthVisible}
            earthVisible={earthVisible}
          />
        </Layout>
      </Layout>
    </Container>
  );
};
const Container = styled.div`
  min-width: 700px;
`;
