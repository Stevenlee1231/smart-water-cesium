import { useState } from "react";
import { Button, Card, Carousel, Divider, Form, Typography, Input } from "antd";
import styled from "@emotion/styled";
import { useDocumentTitle } from "../../utils/customHooks";
import e from "../../assets/images/Untitled-design-14-1080x600.jpg"
import {
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
export const UnauthenticatedApp = ({saveToken} : any) => {
  useDocumentTitle("请登录或注册");
  const [account, setAccount] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  // const {state} = useLocation();
  // const returnURL = state?.returnURL || '/'
  const handleSubmit = (e:any) => {
    if (account === 'admin' && password === 'admin'){
      sessionStorage.setItem('login','loginIn')
      saveToken(account)
    }
    else{
      alert('密码错误')
      return false;
    }
  };
  return (
    <Container>
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#1890ff",
          zIndex: 100,
          fontSize: "36px",
          width:"700px"
        }}
        className="title"
      >
        隧洞突涌水(泥)综合预测及安全预警平台
      </div>
      <BackGround />
      {/* <ShadowCardLeft>
        <Carousel autoplay arrows>
          <SVGLogo1 width={"100%"} height={"100%"} />
          <SVGLogo2 width={"100%"} height={"100%"} />
          <SVGLogo3 width={"100%"} height={"100%"} />
          <SVGLogo4 width={"100%"} height={"100%"} />
          <SVGLogo5 width={"100%"} height={"100%"} />
        </Carousel>
      </ShadowCardLeft> */}
      <ShadowCardRight>
        <Title style={{left:"50px"}}>{"请登录"}</Title>
        <Form onFinish={handleSubmit}>
      <Form.Item
        name={"username"}
        rules={[{ required: true, message: "请输入你的用户名" }]}
      >
        <Input
          type="text"
          id={"username"}
          placeholder="请输入你的用户名"
          onChange={e => setAccount(e.target.value)}
          suffix={<UserOutlined className="site-form-item-icon" />}
        />
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[{ required: true, message: "请输入你的密码" }]}
      >
        <Input.Password
          id={"password"}
          placeholder="请输入你的密码"
          onChange={e => setPassword(e.target.value)}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Form.Item>
      <Form.Item style={{ paddingTop: "15px" }}>
        <Button
          type="primary"
          style={{
            marginRight: "20px",
            width: "100%",
            borderRadius: "1.25rem",
          }}
          htmlType={"submit"}
        >
          登陆
        </Button>
      </Form.Item>
      <Form.Item></Form.Item>
    </Form>
        <Divider />

        {/* <LongButton type={"link"} onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? "Login" : "Sign Up"}
        </LongButton> */}
      </ShadowCardRight>
    </Container>
  );
};

export const LongButton = styled(Button)`
  width: 100%;
`;

const BackGround = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size:100%;
  background-image: url(${e});
`;

const Title = styled.h2`
  margin-bottom: 2.4rem;
  color: rgb(94, 108, 132);
`;

const ShadowCardLeft = styled(Card)`
  width: 40rem;
  min-height: 50rem;
  padding-top: 2rem;
  border-radius: 0.3rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`;

const ShadowCardRight = styled(Card)`
  width: 40rem;
  min-height: 50rem;
  padding-top: 2rem;
  border-radius: 3rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
  padding: 3.2rem 4rem;
  background-color: #f4f6f8;
  text-align: left;
  
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #e9ecf2;
`;
