import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  Space,
  InputNumber,
} from "antd";
import { useForm } from "antd/lib/form/Form";
import { useState } from "react";
const datas = [
  [
    {
      catchment_area: undefined,
      topographic_slope: undefined,
      is_negative_relief: "0",
      formation_lithology: "白云岩、灰岩",
      geologic_structure: "0",
      rate_of_decay: "0",
      rock_tendency: "30",
      angle: "70",
      type_and_degree: "0",
      groundwater_runoff_modulus: undefined,
      volunteers_value: undefined,
      osmotic_coefficient: undefined,
      groundwater_recharge_condition: "0",
      depth: "",
      position: undefined,
      geological_type: "0",
      size: "",
      degree: "1",
      measure: "0",
      thickness: undefined,
      circle_depth: undefined,
      ability: "",
      construction_measures: "",
      length: undefined,
      buried_depth: undefined,
      water_inflow: "350",
    },
  ],
  [
    {
      catchment_area: undefined,
      topographic_slope: undefined,
      is_negative_relief: "0",
      formation_lithology: "白云岩、灰岩",
      geologic_structure: "1",
      rate_of_decay: "1",
      rock_tendency: "30",
      angle: "70",
      type_and_degree: "0",
      groundwater_runoff_modulus: undefined,
      volunteers_value: undefined,
      osmotic_coefficient: undefined,
      groundwater_recharge_condition: "1",
      depth: "",
      position: "",
      geological_type: "0",
      size: "",
      degree: "0",
      measure: "2",
      thickness: undefined,
      circle_depth: undefined,
      ability: "",
      construction_measures: "",
      length: undefined,
      buried_depth: undefined,
      water_inflow: "6000-7000",
    },
  ],
  [
    {
      catchment_area: undefined,
      topographic_slope: undefined,
      is_negative_relief: "1",
      formation_lithology: "灰岩",
      geologic_structure: "2",
      rate_of_decay: "2",
      rock_tendency: "275",
      angle: "64",
      type_and_degree: "1",
      groundwater_runoff_modulus: undefined,
      volunteers_value: undefined,
      osmotic_coefficient: undefined,
      groundwater_recharge_condition: "2",
      depth: "",
      position: "",
      geological_type: "0",
      size: "",
      degree: "2",
      measure: "0",
      thickness: undefined,
      circle_depth: undefined,
      ability: "",
      construction_measures: "",
      length: undefined,
      buried_depth: undefined,
      water_inflow: "共16万",
    },
  ],
  [
    {
      catchment_area: undefined,
      topographic_slope: undefined,
      is_negative_relief: "2",
      formation_lithology: "灰岩",
      geologic_structure: "3",
      rate_of_decay: "3",
      rock_tendency: "275",
      angle: "5-15",
      type_and_degree: "2",
      groundwater_runoff_modulus: undefined,
      volunteers_value: undefined,
      osmotic_coefficient: undefined,
      groundwater_recharge_condition: "",
      depth: "1",
      position: "",
      geological_type: "1",
      size: "",
      degree: "1",
      measure: "0",
      thickness: undefined,
      circle_depth: undefined,
      ability: "",
      construction_measures: "",
      length: undefined,
      buried_depth: undefined,
      water_inflow: "共400万",
    },
  ],
  [
    {
      catchment_area: undefined,
      topographic_slope: undefined,
      is_negative_relief: "3",
      formation_lithology: "",
      geologic_structure: "",
      rate_of_decay: "4",
      rock_tendency: undefined,
      angle: "10-45",
      type_and_degree: "3",
      groundwater_runoff_modulus: undefined,
      volunteers_value: undefined,
      osmotic_coefficient: undefined,
      groundwater_recharge_condition: "",
      depth: "",
      position: "",
      geological_type: "2",
      size: "",
      degree: "1",
      measure: "0",
      thickness: undefined,
      circle_depth: undefined,
      ability: "",
      construction_measures: "",
      length: undefined,
      buried_depth: undefined,
      water_inflow: "突水15万,突泥5万",
    },
  ],
  [
    {
      catchment_area: undefined,
      topographic_slope: undefined,
      is_negative_relief: "4",
      formation_lithology: "灰岩",
      geologic_structure: "",
      rate_of_decay: "",
      rock_tendency: undefined,
      angle: "40-85",
      type_and_degree: "3",
      groundwater_runoff_modulus: undefined,
      volunteers_value: undefined,
      osmotic_coefficient: undefined,
      groundwater_recharge_condition: "",
      depth: "",
      position: "",
      geological_type: "2",
      size: "",
      degree: "3",
      measure: "0",
      thickness: undefined,
      circle_depth: undefined,
      ability: "",
      construction_measures: "",
      length: undefined,
      buried_depth: undefined,
      water_inflow: "2000-3000",
    },
  ],
];

const { Option } = Select;
interface caculate {
  visible: boolean;
  showDrawer: any;
  onClose: any;
}
function Caculate(props: caculate) {
  const { visible, onClose } = props;
  const [id, setId] = useState(0);
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
            <Button onClick={onClose}>取消</Button>
            <Button onClick={onClose} type="primary">
              提交
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark form={form}>
          <Row gutter={16}>
            {/* <Col span={8}>
              <Form.Item name="tunnel" label="隧道名称">
                <Select
                  placeholder="请选择隧道"
                  onChange={(value, option) => {
                    setId(Number(value));
                    form.resetFields();
                  }}
                  //defaultValue={String(id)}
                >
                  <Option value="0">季家坡隧道YK16+040</Option>
                  <Option value="1">季家坡隧道YK16+086~+022</Option>
                  <Option value="2">天池隧道K35+040</Option>
                  <Option value="3">马鹿箐隧道PDK255+978</Option>
                  <Option value="4">野三关隧道1线DK124+602</Option>
                  <Option value="5">宜万线齐岳山隧道DK363+540</Option>
                </Select>
              </Form.Item>
            </Col> */}
            <Col span={8}>
              <Form.Item
                name="catchment_area "
                label="汇水面积"
                rules={[{ required: true, message: "请输入汇水面积" }]}
              >
                <Input
                  style={{ width: "100%" }}
                  placeholder="请输入汇水面积"
                  //defaultValue={datas[id][0].catchment_area}
                  //disabled={datas[id][0].catchment_area !== undefined}
                  suffix={"km^2"}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="topographic_slope"
                label="地形坡度"
                rules={[{ required: true, message: "请输入地形坡度" }]}
              >
                <InputNumber
                  style={{ width: "100%" }}
                  placeholder="请输入地形坡度"
                  //defaultValue={datas[id][0].topographic_slope}
                  //disabled={datas[id][0].catchment_area !== undefined}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="buried_depth "
                label="隧洞埋深"
                rules={[{ required: true, message: "请输入隧洞埋深" }]}
              >
                <Input
                  style={{ width: "100%" }}
                  placeholder={"请输入隧洞埋深"}
                  //defaultValue={datas[id][0].buried_depth}
                  //disabled={datas[id][0].buried_depth !== undefined}
                  suffix={"m"}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                name="is_negative_relief "
                label="是否存在负地形"
                rules={[{ required: true, message: "请选择地形" }]}
              >
                <Select
                  placeholder="请选择地形"
                  //defaultValue={datas[id][0].is_negative_relief}
                  //disabled={datas[id][0].is_negative_relief !== ""}
                >
                  <Option value="0">沟谷</Option>
                  <Option value="1">沟谷洼地</Option>
                  <Option value="2">台原-山地斜坡</Option>
                  <Option value="3">溶蚀峰丛洼地、丘间谷地</Option>
                  <Option value="4">构造溶蚀、溶丘、洼地</Option>

                  {/* <Option value="0">无</Option>
                  <Option value="1">沟谷</Option>
                  <Option value="2">洼地</Option>
                  <Option value="3">落水洞</Option>
                  <Option value="4">天坑</Option>
                  <Option value="5">岩溶漏斗</Option> */}
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="formation_lithology "
                label="地层岩性"
                rules={[{ required: true, message: "请输入地层岩性" }]}
              >
                <Input
                  style={{ width: "100%" }}
                  placeholder="请输入地层岩性"
                  //defaultValue={datas[id][0].formation_lithology}
                  //disabled={datas[id][0].formation_lithology != ""}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="geologic_structure"
                label="地质构造"
                rules={[{ required: true, message: "请选择地质构造" }]}
              >
                <Select
                  placeholder="请选择地质构造"
                  //defaultValue={datas[id][0].geologic_structure}
                  //disabled={datas[id][0].geologic_structure !== ""}
                >
                  <Option value="0">阻水型断裂</Option>
                  <Option value="1">导水型断裂</Option>
                  <Option value="2">背斜构造</Option>
                  <Option value="3">向斜构造</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                name="rate_of_decay "
                label="隧道位置风化程度"
                rules={[{ required: true, message: "请选择地质构造风化程度" }]}
              >
                <Select
                  placeholder="请选择地质构造风化程度"
                  //defaultValue={datas[id][0].rate_of_decay}
                  //disabled={datas[id][0].rate_of_decay !== ""}
                >
                  <Option value="0">强风化</Option>
                  <Option value="1">中等风化</Option>
                  <Option value="2">微风化</Option>
                  <Option value="3">强溶蚀带</Option>
                  <Option value="4">弱溶蚀带</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="rock_tendency"
                label="岩层倾向"
                rules={[{ required: true, message: "请输入岩层倾向" }]}
              >
                <Input
                  style={{ width: "100%" }}
                  placeholder={"请输入岩层倾向"}
                  //defaultValue={datas[id][0].rock_tendency}
                  //disabled={datas[id][0].rock_tendency !== undefined}
                  suffix={"°"}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="angle"
                label="岩层倾角"
                rules={[{ required: true, message: "请输入岩层倾角" }]}
              >
                <Input
                  style={{ width: "100%" }}
                  placeholder="请输入岩层倾角"
                  //defaultValue={datas[id][0].angle}
                  //disabled={datas[id][0].angle !== undefined}
                  suffix={"°"}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                name=" type_and_degree "
                label="裂隙发育类型和程度"
                rules={[
                  { required: true, message: "请选择裂隙发育类型和程度" },
                ]}
              >
                <Select
                  placeholder="请选择裂隙发育类型和程度"
                  //defaultValue={datas[id][0].type_and_degree}
                  //disabled={datas[id][0].type_and_degree !== ""}
                >
                  <Option value="0">纵张性裂隙发育</Option>
                  <Option value="1">张性裂隙发育</Option>
                  <Option value="2">发育</Option>
                  <Option value="3">层间裂隙</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name=" groundwater_runoff_modulus "
                label="地下水径流模数"
                rules={[{ required: true, message: "请输入地下水径流模数" }]}
              >
                <Input
                  style={{ width: "100%" }}
                  placeholder="请输入地下水径流模数"
                  //defaultValue={datas[id][0].groundwater_runoff_modulus}
                  //disabled={
                  //   datas[id][0].groundwater_runoff_modulus !== undefined
                  // }
                  suffix={"L/s·km2"}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name=" volunteers_value"
                label="吕荣值"
                rules={[{ required: true, message: "请输入吕荣值" }]}
              >
                <Input
                  style={{ width: "100%" }}
                  placeholder="请输入吕荣值"
                  //defaultValue={datas[id][0].volunteers_value}
                  //disabled={datas[id][0].volunteers_value !== undefined}
                  suffix={" L/(m*Mpa*min)"}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                name="osmotic_coefficient"
                label="渗透系数"
                rules={[{ required: true, message: "请输入渗透系数" }]}
              >
                <Input
                  style={{ width: "100%" }}
                  placeholder="请输入渗透系数"
                  //defaultValue={datas[id][0].osmotic_coefficient}
                  //disabled={datas[id][0].osmotic_coefficient !== undefined}
                  suffix={" m/d"}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="groundwater_recharge_condition"
                label="地下水补给条件 "
                rules={[{ required: true, message: "请选择地下水补给条件 " }]}
              >
                <Select
                  placeholder="请选择地下水补给条件"
                  //defaultValue={datas[id][0].groundwater_recharge_condition}
                  //disabled={datas[id][0].groundwater_recharge_condition !== ""}
                >
                  <Option value="0">好</Option>
                  <Option value="1">中等</Option>
                  <Option value="2">较差</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name=" depth"
                label="地下水位埋深"
                rules={[{ required: true, message: "请选择地下水位埋深" }]}
              >
                <Select
                  placeholder="请选择地下水位埋深"
                  //defaultValue={datas[id][0].depth}
                  //disabled={datas[id][0].depth !== ""}
                >
                  <Option value="0">高压</Option>
                  <Option value="1">中压</Option>
                  <Option value="2">低压</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                name="position"
                label="储水构造相对隧道位置 "
                rules={[
                  { required: true, message: "请选择储水构造相对隧道位置 " },
                ]}
              >
                <Select
                  placeholder="请选择储水构造相对隧道位置"
                  //defaultValue={datas[id][0].position}
                  //disabled={datas[id][0].position !== ""}
                >
                  <Option value="0">上方</Option>
                  <Option value="1">下方</Option>
                  <Option value="2">不明</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name=" geological_type "
                label="不良地质类型"
                rules={[{ required: true, message: "请选择不良地质类型" }]}
              >
                <Select
                  placeholder="请选择不良地质类型"
                  //defaultValue={datas[id][0].geological_type}
                  //disabled={datas[id][0].geological_type !== ""}
                >
                  <Option value="0">高陡倾裂隙</Option>
                  <Option value="1">特大型溶腔</Option>
                  <Option value="2">充填型溶腔</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="size "
                label="发育程度或规模"
                rules={[{ required: true, message: "请输入发育程度或规模" }]}
              >
                <Input
                  width={"100%"}
                  placeholder={"请输入发育程度或规模"}
                  //defaultValue={datas[id][0].size}
                  //disabled={datas[id][0].size !== ""}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                name="degree "
                label="施工扰动程度"
                rules={[{ required: true, message: "请选择施工扰动程度" }]}
              >
                <Select
                  placeholder="请选择施工扰动程度"
                  //defaultValue={datas[id][0].degree}
                  //disabled={datas[id][0].degree !== ""}
                >
                  <Option value="0">无</Option>
                  <Option value="1">爆破</Option>
                  <Option value="2">探孔</Option>
                  <Option value="3">施工揭露</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name=" measure"
                label=" 支护措施"
                rules={[{ required: true, message: "请选择支护措施" }]}
              >
                <Select
                  placeholder="请选择支护措施"
                  //defaultValue={datas[id][0].measure}
                  //disabled={datas[id][0].measure !== ""}
                >
                  <Option value="0">无</Option>
                  <Option value="1">一衬</Option>
                  <Option value="2">二衬</Option>
                  <Option value="3">混凝土衬砌</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="thickness"
                label=" 防突岩墙厚度"
                rules={[{ required: true, message: "请输入防突岩墙厚度" }]}
              >
                <InputNumber
                  style={{ width: "100%" }}
                  placeholder={"请输入防突岩墙厚度"}
                  //defaultValue={datas[id][0].thickness}
                  //disabled={datas[id][0].thickness !== undefined}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                name="circle_depth "
                label="开挖爆破松弛圈深度"
                rules={[
                  { required: true, message: "请输入开挖爆破松弛圈深度" },
                ]}
              >
                <InputNumber
                  style={{ width: "100%" }}
                  placeholder={"请输入开挖爆破松弛圈深度"}
                  //defaultValue={datas[id][0].circle_depth}
                  //disabled={datas[id][0].circle_depth !== undefined}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="ability "
                label="施工抽排水能力"
                rules={[{ required: true, message: "请选择施工抽排水能力" }]}
              >
                <Select
                  placeholder="请选择施工抽排水能力"
                  //defaultValue={datas[id][0].ability}
                  //disabled={datas[id][0].ability !== ""}
                >
                  <Option value="0">标准</Option>
                  <Option value="1">好</Option>
                  <Option value="2">不好</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name=" construction_measures "
                label="工程施工措施 "
                rules={[{ required: true, message: "请选择工程施工措施 " }]}
              >
                <Select
                  placeholder="请选择工程施工措施"
                  //defaultValue={datas[id][0].construction_measures}
                  //disabled={datas[id][0].construction_measures !== ""}
                >
                  <Option value="0">绕避与跨越</Option>
                  <Option value="1">围岩加固补强</Option>
                  <Option value="2">泄压释能</Option>
                  <Option value="3">岩体加固技术</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                name="length "
                label="隧洞长度"
                rules={[{ required: true, message: "请输入隧洞长度" }]}
              >
                <Input
                  style={{ width: "100%" }}
                  placeholder={"请输入隧洞长度"}
                  //defaultValue={datas[id][0].length}
                  //disabled={datas[id][0].length !== undefined}
                  suffix={"m"}
                />
              </Form.Item>
            </Col>
            {/* <Col span={8}>
              <Form.Item
                name=" water_inflow "
                label="突涌水量  "
                rules={[{ required: true, message: "请输入突涌水量  " }]}
              >
                <Input
                  style={{ width: "100%" }}
                  placeholder={"请输入突涌水量"}
                  //defaultValue={datas[id][0].water_inflow}
                  //disabled={datas[id][0].water_inflow !== ""}
                  suffix={"m3/h"}
                />
              </Form.Item>
            </Col> */}
          </Row>
        </Form>
      </Drawer>
    </>
  );
}

export default Caculate;
