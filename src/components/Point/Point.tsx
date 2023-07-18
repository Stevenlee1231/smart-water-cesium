import { Primitive, Billboard, Label } from "resium";
import { Color, GeometryInstance, LabelStyle, NearFarScalar } from "cesium";
import { useEffect, useState } from "react";
import { Drawer, Tabs } from "antd";
import customImg from "../../assets/images/jing.png";
import siteImg from "../../assets/images/station.png";
import locationIcon from "../../assets/images/location.png";
import { useGetData } from "../../utils/data";
import LineChart from "../LineChart/LineChart";
interface point {
  earthInstance?: any;
  geometry: GeometryInstance;
  mode?: string;
  id?: string;
  position?: any;
  textPosition?: any;
}
const { TabPane } = Tabs;
<<<<<<< HEAD
const message = {
  "XLZK7": "监测井编号2063433",
  "XLZK12": "监测井编号2063428",
  "XLZK25": "该监测孔后期无新增数据",
  "XLZK17": "监测井编号2067310",
  "XLP3-1ZK3": "监测井编号2067333",
  "XLP4-ZK2": "监测井编号2067332，为四号支洞2#钻孔",
};
const CustomPoint = ({ id }: { id: any }) => {
=======
const CustomPoint = ({ id }: { id: string }) => {
>>>>>>> e351d025d9b6cb08cd80bc569f2ae03000f61cde
  const { series, xAxis } = useGetData("allwaterlevels", id, true);
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="基本信息" key="1">
<<<<<<< HEAD
        {message[id]}
      </TabPane>
       <TabPane tab="基本数据" key="2">
         <LineChart
=======
        一种一孔多层地下水动态监测井，是在一个大口径钻孔中，下入二眼或二眼以上的不同深度的单井，形成一孔多层结构；在每一眼单井内安装结构井管，并在每眼单井的下部各安装滤水管，在每眼井滤水管的外面填满砂砾层；各眼单井之间互不连通。本实用新型可以实现占地面积小，使井位集中，便于管理，降低开发建设和管理成本，便于新技术的应用，环保节能。本实用新型适用于基岩埋藏较深，上腹松散层较厚的平原地区，用于地下水动态监测，获取地下水动态信息。
      </TabPane>
      <TabPane tab="基本数据" key="2">
        <LineChart
>>>>>>> e351d025d9b6cb08cd80bc569f2ae03000f61cde
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
<<<<<<< HEAD
    "XinfengWeatherStation",
=======
    id,
>>>>>>> e351d025d9b6cb08cd80bc569f2ae03000f61cde
    false
  );
  const { series: series2, xAxis: xAxis2 } = useGetData("rainfalls", id, true);
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="基本信息" key="1">
<<<<<<< HEAD
        位于海东2#支洞，岩性为花岗岩/辉绿岩，涌水量400立方米/小时，350立方米塌方（Ⅴ类不良），侵入蚀变，风华差异。
      </TabPane>
      {/* <TabPane tab="蒸发量" key="2">
=======
        一种一孔多层地下水动态监测井，是在一个大口径钻孔中，下入二眼或二眼以上的不同深度的单井，形成一孔多层结构；在每一眼单井内安装结构井管，并在每眼单井的下部各安装滤水管，在每眼井滤水管的外面填满砂砾层；各眼单井之间互不连通。本实用新型可以实现占地面积小，使井位集中，便于管理，降低开发建设和管理成本，便于新技术的应用，环保节能。本实用新型适用于基岩埋藏较深，上腹松散层较厚的平原地区，用于地下水动态监测，获取地下水动态信息。
      </TabPane>
      <TabPane tab="蒸发量" key="2">
>>>>>>> e351d025d9b6cb08cd80bc569f2ae03000f61cde
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
<<<<<<< HEAD
      </TabPane> */}
      {/* <TabPane tab="降雨量" key="3">
=======
      </TabPane>
      <TabPane tab="降雨量" key="3">
>>>>>>> e351d025d9b6cb08cd80bc569f2ae03000f61cde
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
<<<<<<< HEAD
      </TabPane> */}
    </Tabs>
  );
};
const Point = (props: point) => {
  const [mouseIn, setMouseIn] = useState(false);
=======
      </TabPane>
    </Tabs>
  );
};
const debounce = (fn: () => void) => {
  let timer: any = null;
  return () => {
    if (!timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn();
    }, 2000);
  };
};
const Point = (props: point) => {
  const [mouseIn, setMouseIn] = useState(false);
  // const appearance = new EllipsoidSurfaceAppearance({
  //   aboveGround: false,
  //   material: new Material({
  //     fabric: {
  //       type: "Image",
  //       uniforms: {
  //         image: props.mode === "custom" ? customImg : siteImg,
  //       },
  //     },
  //   }),
  // });
>>>>>>> e351d025d9b6cb08cd80bc569f2ae03000f61cde
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const { geometry } = props;
  return (
    <>
<<<<<<< HEAD
=======
      {/* <Primitive
        onClick={showDrawer}
        geometryInstances={geometry}
        appearance={appearance}
        onMouseEnter={() => {
          document.body.style.cursor = "pointer";
          // setMouseIn(true);
        }}
        onMouseLeave={() => {
          document.body.style.cursor = "auto";
          // setMouseIn(false);
        }}
      ></Primitive> */}
>>>>>>> e351d025d9b6cb08cd80bc569f2ae03000f61cde
      <Billboard
        position={props.position}
        image={locationIcon}
        width={mouseIn ? 65 : 50}
        height={mouseIn ? 65 : 50}
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
        onClick={showDrawer}
<<<<<<< HEAD
      ></Billboard>
      <Label
        position={props.textPosition}
        text={
          props.mode === "custom" ? `监测井${props.id}` : `突涌水点${props.id}`
        }
        fillColor={!mouseIn ? Color.WHITE : Color.CORNFLOWERBLUE}
=======
        // scaleByDistance={new NearFarScalar(1.5e2, 2.0, 1.5e7, 0.5)}
      ></Billboard>
      <Label
        position={props.textPosition}
        text={props.mode === "custom" ? "监测井" : "气象站"}
        fillColor={!mouseIn?Color.WHITE:Color.CORNFLOWERBLUE}
>>>>>>> e351d025d9b6cb08cd80bc569f2ae03000f61cde
        outlineColor={Color.BLACK}
        outlineWidth={20}
        style={LabelStyle.FILL_AND_OUTLINE}
        font={"14pt Microsoft Yahei"}
        translucencyByDistance={new NearFarScalar(0.0e5, 1.0, 0.1e7, 0.0)}
      ></Label>
      <Drawer
<<<<<<< HEAD
        title={props.mode === "custom" ? "监测井信息" : "突涌水点信息"}
=======
        title={props.mode === "custom" ? "监测井信息" : "气象站信息"}
>>>>>>> e351d025d9b6cb08cd80bc569f2ae03000f61cde
        placement="right"
        onClose={onClose}
        visible={visible}
        size={"large"}
      >
        {props.mode === "custom" ? (
<<<<<<< HEAD
          <CustomPoint id={props.id as string}></CustomPoint>
        ) : (
          <SitePoint id={props.id as string}></SitePoint>
=======
          <CustomPoint id={"XLP4ZK2"}></CustomPoint>
        ) : (
          <SitePoint
            id={props.id ? props.id : "XinfengWeatherStation"}
          ></SitePoint>
>>>>>>> e351d025d9b6cb08cd80bc569f2ae03000f61cde
        )}
      </Drawer>
    </>
  );
};
export default Point;
