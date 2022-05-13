import { Layout } from "antd";
import { SiderTheme } from "antd/lib/layout/Sider";
import { Outlet } from "react-router";
import { useWidtheight } from "../../utils/customHooks";
import { Rainfall } from "../rainfall/rainfall";
import { Evaporationcapacity } from "../evaporationcapacity/evaporationcapacity";
import { FormationScreen } from "../formation/formation";
import { EarthScreen } from "../earth/earth";
const { Content } = Layout;
export const ContentScreen = ({
  theme,
  callback,
  earthVisible,
}: {
  theme: SiderTheme | string;
  callback: any;
  earthVisible: any;
}) => {
  const [eleRef, eleMsg] = useWidtheight<HTMLDivElement>();
  const { rainfall, eva, three } = earthVisible;
  return (
    <Layout>
      <Content
        className="site-layout-background"
        style={{
          padding: 22,
          margin: 0,
          minHeight: 280,
          width: "100%",
          height: `calc(100vh - 70px)`,
          backgroundColor: theme === "light" ? "" : "#161d40",
          overflow: "hidden",
        }}
      >
        <div
          ref={eleRef}
          style={{ width: "100%", height: `calc(100vh - 70px)` }}
          className="content-container"
        >
          {rainfall && <Rainfall eleMsg={eleMsg}></Rainfall>}
          {eva && <Evaporationcapacity eleMsg={eleMsg}></Evaporationcapacity>}
          {three && <FormationScreen></FormationScreen>}
          {!rainfall && !eva && !three && (
            <EarthScreen
              earthVisible={earthVisible}
              callback={callback}
            ></EarthScreen>
          )}
        </div>
      </Content>
    </Layout>
  );
};
