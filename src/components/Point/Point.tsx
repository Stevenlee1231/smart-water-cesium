import { Primitive } from "resium";
import { EllipsoidSurfaceAppearance, GeometryInstance, Material } from "cesium";
import { useState } from "react";
import { Drawer, Tabs } from "antd";
import backgroundImg from "../../assets/images/jing.png";
import { useGetData } from "../../utils/data";
import LineChart from "../LineChart/LineChart";
interface point {
  geometry: GeometryInstance;
}
const { TabPane } = Tabs;
const appearance = new EllipsoidSurfaceAppearance({
  aboveGround: false,
  material: new Material({
    fabric: {
      type: "Image",
      uniforms: {
        image: backgroundImg,
      },
    },
  }),
});
const Point = (props: point) => {
  const [visible, setVisible] = useState(false);
  const { series, xAxis } = useGetData("allwaterlevels", "XLP4ZK2", true);
  console.log(series);
  console.log(xAxis);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const { geometry } = props;
  return (
    <>
      <Primitive
        onClick={showDrawer}
        geometryInstances={geometry}
        appearance={appearance}
      ></Primitive>
      <Drawer
        title="监测井信息"
        placement="right"
        onClose={onClose}
        visible={visible}
        size={"large"}
      >
        <Tabs defaultActiveKey="1">
          <TabPane tab="基本信息" key="1">
            一种一孔多层地下水动态监测井，是在一个大口径钻孔中，下入二眼或二眼以上的不同深度的单井，形成一孔多层结构；在每一眼单井内安装结构井管，并在每眼单井的下部各安装滤水管，在每眼井滤水管的外面填满砂砾层；各眼单井之间互不连通。本实用新型可以实现占地面积小，使井位集中，便于管理，降低开发建设和管理成本，便于新技术的应用，环保节能。本实用新型适用于基岩埋藏较深，上腹松散层较厚的平原地区，用于地下水动态监测，获取地下水动态信息。
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
      </Drawer>
    </>
  );
};
export default Point;
