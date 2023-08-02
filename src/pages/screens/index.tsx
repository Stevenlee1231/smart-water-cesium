import { useRecoilState } from "recoil";
import { Layout } from "antd";
import styled from "@emotion/styled";
import { SiderTheme } from "antd/lib/layout/Sider";
import { theme_store } from "../../store/theme";
import { useDocumentTitle } from "../../utils/customHooks";
import "antd/dist/antd.css";
import { HeaderScreen } from "./header";
import { SiderScreen } from "./sider";
import { useState } from "react";
import { InfoBox } from "./infoBox";

export const Screen = ({saveToken} : any) => {
  useDocumentTitle("项目首页");
  const [theme, setTheme] = useRecoilState<SiderTheme | string>(theme_store);

  const changeTheme = (value: boolean) => {
    setTheme(value ? "dark" : "light");
  };
  //控制地图上显示的东西  并不使用router控制
  const [earthVisible, setEarthVisible] = useState({
    meteorology:false,
    three: false,
    //地层信息
    stratum: false,
    //水文地质信息
    hydrology: false,
    //隧洞及支洞
    tunnel: false,
    //水系
    riverSystem:false,
    //监测井
    monitoring: false,
    //突涌水
    gushing: false,
    //地下水
    undergroundWater:false,
    //泉流量
    spring:false,
    //区域水位
    regionalWater: false,
    //香炉山
    mountain: false,
    mountain2: false,
    mountain4: false,
    //香炉山六号
    mountainSix: false,
    //计算
    count: false,
    //预警结果
  });

  return (
    <Container>
      <Layout>
        <HeaderScreen theme={theme} changeTheme={changeTheme} />
        <Layout>
          <SiderScreen
            theme={theme}
            setEarthVisible={setEarthVisible}
            earthVisible={earthVisible}
          />
        </Layout>
      </Layout>
      <InfoBox
      theme={theme}
      setEarthVisible={setEarthVisible}
      earthVisible={earthVisible}
      />
    </Container>
  );
};
const Container = styled.div`
  min-width: 700px;
`;
