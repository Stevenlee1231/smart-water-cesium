import { Input, Form, Button } from "antd";
import {
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";

export const RegisterScreen = () => {
  return (
    <Form>
      <Form.Item
        name={"username"}
        rules={[{ required: true, message: "Please your username" }]}
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
      <Form.Item
        name={"password"}
        rules={[{ required: true, message: "Please enter your password" }]}
      >
        <Input.Password
          id={"password"}
          placeholder="Confirm your password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType={"submit"}
          style={{ borderRadius: "1.25rem", width: "100%" }}
        >
          Sign up
        </Button>
      </Form.Item>
    </Form>
  );
};
