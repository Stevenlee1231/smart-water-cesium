import { Primitive, Billboard, Label } from "resium";
import { Color, GeometryInstance, LabelStyle, NearFarScalar, Camera, CameraEventType, DistanceDisplayCondition} from "cesium";
import { useEffect, useState } from "react";
import { Drawer, Modal, Tabs } from "antd";
import customImg from "../../assets/images/jing.png";
import siteImg from "../../assets/images/station.png";
import locationIcon from "../../assets/images/location.png";
import { useGetData } from "../../utils/data";
import LineChart from "../LineChart/LineChart";
import { info } from "console";
import * as echarts from "echarts"
import { BarChart } from "echarts/charts";
import Chart from "../Chart/Chart";
interface point {
  earthInstance?: any;
  geometry: GeometryInstance;
  mode?: string;
  id?: string;
  position?: any;
  textPosition?: any;
  info?:string;
  remark?:string;
  title: string;
  xAxis: string[];
  series: string[];
  icon:string;
  lineType:"bar" | "line";
}
const { TabPane } = Tabs;
const message = {
  "XLZK7": "监测井编号2063433",
  "XLZK12": "监测井编号2063428",
  "XLZK25": "该监测孔后期无新增数据",
  "XLZK17": "监测井编号2067310",
  "XLP3-1ZK3": "监测井编号2067333",
  "XLP4-ZK2": "监测井编号2067332，为四号支洞2#钻孔",
};
const CustomPoint = ({ id }: { id: any }) => {
  const { series, xAxis } = useGetData("allwaterlevels", id, true);
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="基本信息" key="1">
        {message[id]}
      </TabPane>
       <TabPane tab="基本数据" key="2">
         <LineChart
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "top" as const,
              },
              title: {
                display: true,
                text: "Chart.js Line Chart",
              },
            },
          }}
          labels={xAxis}
          data={{
            datasets: [
              {
                label: "Dataset 1",
                data: series,
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
              },
            ],
          }}
        ></LineChart>
      </TabPane>
    </Tabs>
  );
};
const SitePoint = ({ id }: { id: string }) => {
  const { series: series1, xAxis: xAxis1 } = useGetData(
    "evaporationcapacitys",
    "XinfengWeatherStation",
    false
  );
  const { series: series2, xAxis: xAxis2 } = useGetData("rainfalls", id, true);
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="基本信息" key="1">
        位于海东2#支洞，岩性为花岗岩/辉绿岩，涌水量400立方米/小时，350立方米塌方（Ⅴ类不良），侵入蚀变，风华差异。
      </TabPane>
      {/* <TabPane tab="蒸发量" key="2">
        <LineChart
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "top" as const,
              },
              title: {
                display: true,
                text: "蒸发量",
              },
            },
          }}
          labels={xAxis1}
          data={{
            datasets: [
              {
                label: "Dataset 1",
                data: series1,
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
              },
            ],
          }}
        ></LineChart>
      </TabPane> */}
      {/* <TabPane tab="降雨量" key="3">
        <LineChart
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "top" as const,
              },
              title: {
                display: true,
                text: "降雨量",
              },
            },
          }}
          labels={xAxis2}
          data={{
            datasets: [
              {
                label: "Dataset 1",
                data: series2,
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
              },
            ],
          }}
        ></LineChart>
      </TabPane> */}
    </Tabs>
  );
};
const Point = (props: point) => {
  const [mouseIn, setMouseIn] = useState(false);
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };
  // const onClose = () => {
  //   setVisible(false);
  // };
  const { geometry } = props;
  return (
    <>
      <Billboard
        position={props.position}
        image={props.icon}
        width={mouseIn ? 45 : 40}
        height={mouseIn ? 45 : 40}
        onMouseEnter={() => {
          if (mouseIn) return;
          document.body.style.cursor = "pointer";
          setMouseIn(true);
        }}
        onMouseLeave={() => {
          if (!mouseIn) return;
          document.body.style.cursor = "auto";
          setMouseIn(false);
        }}
        onClick={showModal}
      ></Billboard>
      <Label
        position={props.textPosition}
        text={
          // props.mode === "custom" ? `监测井${props.id}` : `突涌水点${props.id}`
          props.id
        }
        fillColor={!mouseIn ? Color.WHITE : Color.CORNFLOWERBLUE}
        outlineColor={Color.BLACK}
        outlineWidth={15}
        style={LabelStyle.FILL_AND_OUTLINE}
        font={"10pt Microsoft Yahei"}
        translucencyByDistance={new NearFarScalar(0.0e5, 1.0, 0.1e7, 0.0)}
        distanceDisplayCondition={new DistanceDisplayCondition(0.0e3,100.0e3)}
      ></Label>
      {open ?<Modal
        title={props.id}
        width={600}
        visible={open}
        onOk={hideModal}
        onCancel={hideModal}
        okText="确认"
        cancelText="取消"
        centered={true}
      > 
       <Chart
        xAxis={props.xAxis}
        series={props.series}
        title={props.title}
        lineType={props.lineType}
      ></Chart> 
        <span>点位信息：{props.info}</span><br/>
        <span>备注：{props.remark}</span>
      </Modal>: undefined}
      {/* <Drawer
        title={props.mode === "custom" ? "监测井信息" : "突涌水点信息"}
        placement="right"
        onClose={onClose}
        visible={visible}
        size={"large"}
      > 
        {props.mode === "custom" ? (
          <CustomPoint id={props.id as string}></CustomPoint>
        ) : (
          <SitePoint id={props.id as string}></SitePoint>
        )}
      </Drawer> */}
    </>
  );
};
export default Point;
