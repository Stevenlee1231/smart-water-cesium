import { useState } from "react";
import { LoginScreen } from "./login";
import { RegisterScreen } from "./register";
import { Button, Card, Carousel, Divider, Form, Typography } from "antd";
import styled from "@emotion/styled";
import { useDocumentTitle } from "../../utils/customHooks";
import { ReactComponent as SVGLogo1 } from "../../assets/images/山脉.svg";
import { ReactComponent as SVGLogo2 } from "../../assets/images/帐篷，露营，旅行.svg";
import { ReactComponent as SVGLogo3 } from "../../assets/images/水.svg";
import { ReactComponent as SVGLogo4 } from "../../assets/images/水浪.svg";
import { ReactComponent as SVGLogo5 } from "../../assets/images/雪山.svg";
import a from "../../assets/images/a.svg";
import b from "../../assets/images/b.svg";
import c from "../../assets/images/c.svg";
import d from "../../assets/images/d.svg";
import e from "../../assets/images/Untitled-design-14-1080x600.jpg"
export const UnauthenticatedApp = () => {
  useDocumentTitle("请登录或注册");
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState<Error | null>(null);
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
        <Title>{isRegister ? "请注册" : "请登录"}</Title>
        {error ? (
          <Typography.Text type={"danger"}>{error.message}</Typography.Text>
        ) : (
          ""
        )}
        {isRegister ? <RegisterScreen /> : <LoginScreen />}
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
  background-size:95%;
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
  border-radius: 0.3rem;
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
