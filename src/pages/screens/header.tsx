import styled from "@emotion/styled";
import { Button, Dropdown, Menu, Switch, Typography, Layout } from "antd";
import { SiderTheme } from "antd/lib/layout/Sider";
import { Link } from "react-router-dom";
import { resetRoute } from "../../utils/router";
const { Header } = Layout;
interface HeaderProps {
  theme: SiderTheme | string;
  changeTheme: (value: boolean) => void;
}
export const HeaderScreen = ({ theme, changeTheme }: HeaderProps) => {
  return (
    <HeaderCss
      style={
        theme === "light"
          ? { background: "rgb(0,82,204)" }
          : { background: "#111d2c" }
      }
    >
      <HeaderLeft>
        <Typography.Text>
          <Link to="/rainfall">
            {" "}
            <Button type="link">
              <h3 style={{ color: "white", paddingTop: "10px" }}>
                隧洞突涌水(泥)综合预测及安全预警平台
              </h3>
            </Button>
          </Link>
        </Typography.Text>
      </HeaderLeft>
      <HeaderRight>
        <Switch
          onChange={changeTheme}
          size={"small"}
          style={{ color: "white" }}
        />{" "}
        <Typography.Text style={{ color: "white" }}>切换主题</Typography.Text>
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
  );
};

const HeaderCss = styled(Header)`
  display: flex;
  height: 70px;
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
