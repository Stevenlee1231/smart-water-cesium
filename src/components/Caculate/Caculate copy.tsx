import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  Space,
  message,
  InputNumber,
} from "antd";
import { useForm } from "antd/lib/form/Form";
import axios from "axios";
import { useEffect, useState } from "react";

const { Option } = Select;
interface caculate {
  visible: boolean;
  showDrawer: any;
  onClose: any;
}
const items1 = [
  "岩溶",
  "沟谷",
  "溶蚀",
  "洼地",
  "中山",
  "低山",
  "峰从",
  "落水洞",
  "斜坡",
  "槽谷",
  "构造剥蚀",
  "高原",
  "沟槽",
];
const items2 = [
  "灰岩",
  "白云岩",
  "石英砂岩",
  "砂岩",
  "局部夹少量泥岩",
  "泥岩",
  "白云质灰岩",
  "炭质泥岩",
  "泥灰岩",
  "岩溶角砾岩",
  "板岩",
  "页岩",
  "角砾岩",
];
const items3 = [
  "充填型溶洞",
  "破碎岩体",
  "充填型溶腔",
  "溶管道",
  "高陡倾裂隙",
  "溶蚀裂隙",
  "岩溶裂隙",
  "溶洞",
  "岩溶溶腔",
  "裂隙管道",
  "充填型岩溶管道",
];
const items4 = ["1", "2", "3", "4", "5"];
const items5 = [
  "层间裂隙",
  "裂隙发育",
  "节理裂隙发育",
  "顺层岩溶",
  "节理裂隙弱发育",
  "破碎",
  "溶蚀裂隙发育",
  "结构面",
  "岩层裂隙",
  "纵张性裂隙发育",
];
const items6 = [
  "强有利于岩溶发育",
  "中等有利于岩溶发育",
  "有利于溶腔发育",
  "有利于岩溶发育",
  "弱有利于岩溶发育",
  "岩溶发育",
];
const items7 = [
  "富水",
  "地下水发育",
  "线状",
  "股状流水",
  "地下水较发育",
  "高压",
  "高压富水状态",
  "低压",
  "少量渗水",
  "贫水",
];
const items8 = ["无雨", "暴雨", "大雨", "特大暴雨"];
const items9 = ["爆破", "探孔", "施工揭露", "钻探揭露"];
const items10 = ["二衬", "无", "初衬", "二衬完成", "初支完成", "初支"];
function Caculate(props: caculate) {
  const { visible, onClose } = props;
  const [formMsg, setFromMsg] = useState({});
  const [ modelRes, setModelRes] = useState();
  const [form] = useForm();
  return (
    <>
      <Drawer
        title="计算页"
        width={720}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
        extra={
          <Space>
            {modelRes&&<div>预警结果:{modelRes}</div>}
            <Button onClick={onClose}>取消</Button>
            <Button
              onClick={() => {
                const formValue = Object.values(formMsg);
                if (formValue.includes(undefined)||formValue.includes(null)) {
                  message.error("您还有选项未输入，请继续输入");
                } else {
                  message.loading({
                    content: "模型运算中，请稍等！",
                    key: "loading",
                  });
                  axios
                    .post("http://103.118.40.123:8080/psot/model", formMsg, {
                      headers: {
                        "Content-Type": "text/plain",
                      },
                    })
                    .then((res) => {
                      message.destroy("loading");
                      setModelRes(res.data)
                    });
                }
              }}
              type="primary"
            >
              提交
            </Button>
          </Space>
        }
      >
        <Form
          onValuesChange={(current, all) => {
            setFromMsg((prev) => {
              return { ...prev, ...all };
            });
          }}
          layout="vertical"
          hideRequiredMark
          form={form}
        >
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                name="地形地貌"
                label="地形地貌"
                rules={[{ required: true, message: "请选择地形地貌" }]}
              >
                <Select placeholder="请选择地形地貌">
                  {items1.map((value) => {
                    return <Option value={value}>{value}</Option>;
                  })}
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="地层岩性"
                label="地层岩性"
                rules={[{ required: true, message: "请选择地层岩性" }]}
              >
                <Select placeholder="请选择地层岩性">
                  {items2.map((value) => {
                    return <Option value={value}>{value}</Option>;
                  })}
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="不良地质"
                label="不良地质"
                rules={[{ required: true, message: "请选择不良地质" }]}
              >
                <Select placeholder="请选择不良地质">
                  {items3.map((value) => {
                    return <Option value={value}>{value}</Option>;
                  })}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                name="围岩级别"
                label="围岩级别"
                rules={[{ required: true, message: "请选择围岩级别" }]}
              >
                <Select placeholder="请选择围岩级别">
                  {items4.map((value) => {
                    return <Option value={value}>{value}</Option>;
                  })}
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="层间裂隙"
                label="层间裂隙"
                rules={[{ required: true, message: "请选择层间裂隙" }]}
              >
                <Select placeholder="请选择层间裂隙">
                  {items5.map((value) => {
                    return <Option value={value}>{value}</Option>;
                  })}
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="可溶岩与非可溶岩接触带"
                label="可溶岩与非可溶岩接触带"
                rules={[
                  { required: true, message: "请选择可溶岩与非可溶岩接触带" },
                ]}
              >
                <Select placeholder="请选择可溶岩与非可溶岩接触带">
                  {items6.map((value) => {
                    return <Option value={value}>{value}</Option>;
                  })}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                name="地下水位"
                label="地下水位"
                rules={[{ required: true, message: "请选择地下水位" }]}
              >
                <Select placeholder="请选择地下水位">
                  {items7.map((value) => {
                    return <Option value={value}>{value}</Option>;
                  })}
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="降雨量"
                label="降雨量"
                rules={[{ required: true, message: "请选择降雨量" }]}
              >
                <Select placeholder="请选择降雨量">
                  {items8.map((value) => {
                    return <Option value={value}>{value}</Option>;
                  })}
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="施工扰动程度"
                label="施工扰动程度"
                rules={[{ required: true, message: "请选择施工扰动程度" }]}
              >
                <Select placeholder="请选择施工扰动程度">
                  {items9.map((value) => {
                    return <Option value={value}>{value}</Option>;
                  })}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                name="支护措施"
                label="支护措施"
                rules={[{ required: true, message: "请选择支护措施" }]}
              >
                <Select placeholder="请选择支护措施">
                  {items10.map((value) => {
                    return <Option value={value}>{value}</Option>;
                  })}
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="岩层倾向"
                label="岩层倾向"
                rules={[{ required: true, message: "请输入岩层倾向" }]}
              >
                <InputNumber
                  min={0}
                  max={360}
                  style={{ width: "100%" }}
                  placeholder={"请输入岩层倾向"}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="岩层倾角"
                label="岩层倾角"
                rules={[{ required: true, message: "请输入岩层倾角" }]}
              >
                <InputNumber
                  min={0}
                  max={360}
                  style={{ width: "100%" }}
                  placeholder="请输入岩层倾角"
                  // suffix={"°"}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
}

export default Caculate;
