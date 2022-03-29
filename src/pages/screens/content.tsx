import { Layout } from "antd";
import { SiderTheme } from "antd/lib/layout/Sider";
import { Outlet } from "react-router";
import { useWidtheight } from "../../utils/customHooks";
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
  return (
    <Layout>
      <Content
        className="site-layout-background"
        style={{
          padding: 22,
          margin: 0,
          minHeight: 280,
          width: "100%",
          height: "100%",
          backgroundColor: theme === "light" ? "" : "#161d40",
        }}
      >
        <div
          ref={eleRef}
          style={{ width: "100%", height: "100%" }}
          className="content-container"
        >
          <Outlet context={{ eleMsg, callback, earthVisible }}></Outlet>
        </div>
      </Content>
    </Layout>
  );
};
