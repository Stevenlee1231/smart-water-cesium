import { Button, Form, Input } from "antd";
import {
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";

export const LoginScreen = () => {
  const handleSubmit = () => {
    window.location.href = "http://localhost:3000/index";
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name={"username"}
        rules={[{ required: true, message: "Please enter your username" }]}
      >
        <Input
          type="text"
          id={"username"}
          placeholder="Enter your username"
          suffix={<UserOutlined className="site-form-item-icon" />}
        />
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[{ required: true, message: "Please enter your password" }]}
      >
        <Input.Password
          id={"password"}
          placeholder="Enter your password"
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
          Login
        </Button>
      </Form.Item>
      <Form.Item></Form.Item>
    </Form>
  );
};
