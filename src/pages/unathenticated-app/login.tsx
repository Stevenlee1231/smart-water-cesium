import { useLocation, useNavigate } from "react-router";
import { Button, Form, Input } from "antd";
import {useState} from 'react'
import {
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";

export const LoginScreen = ({saveToken} : any) => {
  const [account, setAccount] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  // const {state} = useLocation();
  // const returnURL = state?.returnURL || '/'
  const handleSubmit = (e:any) => {
    if (account === 'admin' && password === 'admin'){
      saveToken(account)
    }
    else{
      alert('密码错误')
      return false;
    }
  };

  return (
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
  );
};
