import { useState } from "react";
import { LoginScreen } from "./login";
import { RegisterScreen } from "./register";
import { Button, Card, Carousel, Divider, Typography } from "antd";
import styled from "@emotion/styled";
import { useDocumentTitle } from "../../utils";
import { ReactComponent as SVGLogo1 } from "../../assets/山脉.svg";
import { ReactComponent as SVGLogo2 } from "../../assets/帐篷，露营，旅行.svg";
import { ReactComponent as SVGLogo3 } from "../../assets/水.svg";
import { ReactComponent as SVGLogo4 } from "../../assets/水浪.svg";
import { ReactComponent as SVGLogo5 } from "../../assets/雪山.svg";

export const UnauthenticatedApp = () => {
  useDocumentTitle("请登录或注册");
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  return (
    <Container>
      <ShadowCard>
        <Carousel autoplay arrows>
          <SVGLogo1 width={"100%"} height={"100%"} />
          <SVGLogo2 width={"100%"} height={"100%"} />
          <SVGLogo3 width={"100%"} height={"100%"} />
          <SVGLogo4 width={"100%"} height={"100%"} />
          <SVGLogo5 width={"100%"} height={"100%"} />
        </Carousel>
      </ShadowCard>
      <ShadowCard style={{ padding: "3.2rem 4rem" }}>
        <Title>{isRegister ? "请注册" : "请登录"}</Title>
        {error ? (
          <Typography.Text type={"danger"}>{error.message}</Typography.Text>
        ) : (
          ""
        )}
        {isRegister ? <RegisterScreen /> : <LoginScreen />}
        <Divider />
        <LongButton type={"link"} onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? "已经有账号了?直接登录" : "注册"}
        </LongButton>
      </ShadowCard>
    </Container>
  );
};

export const LongButton = styled(Button)`
  width: 100%;
`;

const Title = styled.h2`
  margin-bottom: 2.4rem;
  color: rgb(94, 108, 132);
`;

const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 50rem;
  padding-top: 2rem;
  border-radius: 0.3rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: 5rem;
`;
