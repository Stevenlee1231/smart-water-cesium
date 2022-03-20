import { useRecoilState } from "recoil";
import { Layout } from "antd";
import styled from "@emotion/styled";
import { SiderTheme } from "antd/lib/layout/Sider";
import { theme_store } from "../../store/theme";
import { useDocumentTitle } from "../../utils/customHooks";
import "antd/dist/antd.css";
import { HeaderScreen } from "./header";
import { SiderScreen } from "./sider";

export const Screen = () => {
  useDocumentTitle("项目首页");
  const [theme, setTheme] = useRecoilState<SiderTheme | string>(theme_store);

  const changeTheme = (value: boolean) => {
    setTheme(value ? "dark" : "light");
  };

  return (
    <Container>
      <Layout>
        <HeaderScreen theme={theme} changeTheme={changeTheme} />
        <Layout>
          <SiderScreen theme={theme} />
        </Layout>
      </Layout>
    </Container>
  );
};
const Container = styled.div`
  min-width: 700px;
`;
