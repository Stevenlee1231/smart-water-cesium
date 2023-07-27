import { CardProps } from "./tunnel";
import Point from "../Point/Point";
import {
  Cartesian3,
  CircleGeometry,
  Color,
  EllipsoidSurfaceAppearance,
  GeometryInstance,
  LabelStyle,
  NearFarScalar,
} from "cesium";
import { BillboardCollection, Label, LabelCollection } from "resium";
import tunnel from "../../assets/datas/undergroundWater.json";
import jingIcon from "../../assets/images/jing.png";
import Legend from "../Legend/Legend";
import locationIcon from "../../assets/images/location_2.png"
const tunnelLabel = [
  "二标段昆明段ZK2647",
  "二标段玉溪段XQZK216",
  "二标段昆明段ZK2010",
  "二标段昆明段ZK2808",
  "二标段昆明段ZK2811",
  "二标段昆明段ZK2839",
  "二标段昆明段ZK2612",
  "二标段昆明段ZK2613",
  "二标段昆明段ZK2614",
  "二标段昆明段ZK2194",
  "二标段昆明段ZK2734",
  "二标段昆明段KMJCZK06",
  "二标段昆明段KMJCZK09",
  "二标段玉溪段XQZK212", "二标段玉溪段XQZK70", "二标段玉溪段XQZK214",
    "二标段玉溪段XPJCZK02", "二标段玉溪段LFSJCZK03", "二标段红河段QMZK416-2",
    "二标段红河段QMZK230", "二标段红河段QMZK303", "二标段昆明段KMJCZK01",
    "二标段昆明段KMJCZK03", "二标段昆明段KMJCZK05", "二标段昆明段KMJCZK07",
    "二标段昆明段KMJCZK08", "二标段昆明段KMJCZK10", "二标段昆明段ZK2842",
    "二标段昆明段ZK2261", "二标段昆明段ZK2263", "二标段昆明段ZK2264",
    "二标段玉溪段XQZK254", "二标段玉溪段XPJCZK01", "二标段玉溪段XQZK104",
    "二标段玉溪段XQZK63", "二标段红河段XGZK01", "二标段红河段XGZK03",
    "二标段红河段XGZK02", "二标段红河段QMZK293", "二标段红河段QMZK292",
    "二标段红河段QMZK221", "二标段昆明段KMJCZK02", "二标段昆明段KMJCZK04",
    "二标段昆明段ZK2004", "二标段昆明段ZK2019", "二标段昆明段ZK2034",
    "二标段昆明段ZK2047", "二标段昆明段ZK2838", "二标段昆明段ZK2812",
    "二标段昆明段ZK2631", "二标段昆明段ZK2648", "二标段昆明段ZK2649",
    "二标段玉溪段XQZK235", "二标段红河段QMZK428", "二标段红河段QMZK223",
    "二标段昆明段KMXZZK01"
];

const remark =[
  "于8月8日安装自动化检测设备",
  "于8月8日完成设备安装调试",
  "于11月5日完成设备安装调试（水位下降、异常）",
  "于11月4日完成设备安装调试（异常、2021年7月干涸）",
  "于11月4日完成设备安装调试",
  "于11月6日完成设备安装调试"
]

const xAxis = 
  ["2020/12/6", "2020/12/7", "2020/12/8", "2020/12/9", "2020/12/10", "2020/12/11", "2020/12/12", "2020/12/13", "2020/12/14", "2020/12/15"]

const series = 
  [["2002.15", "2001.99", "2002.18", "2002.35", "2001.82", "2002.02", "2001.81", "2002.02", "2001.87", "2001.8"], ["1900", "1899.99", "1899.99", "1899.99", "1899.97", "1899.97", "1899.96", "1899.96", "1899.95", "1899.95"], ["2078.69", "2078.65", "2078.67", "2078.86", "2078.12", "2078.25", "2078.48", "2077.87", "2077.59", "2077.44"], ["1902.98", "1902.99", "1902.98", "1902.95", "1902.93", "1902.92", "1902.91", "1902.88", "1902.91", "1902.91"],["1956.55", "1956.48", "1956.39", "1956.29", "1956.19", "1956.08", "1955.98", "1955.88", "1955.8", "1955.71"], ["1912.54", "1912.37", "1912.34", "1912.32", "1912.21", "1912.13", "1912.08", "1911.95", "1911.9", "1911.84"]
  ]

const tunnels = tunnel.geometries.map((obj) => {
  return Cartesian3.fromDegrees(obj.coordinates[0], obj.coordinates[1], 0);
});
const tunnelsText = tunnel.geometries.map((obj) => {
  return Cartesian3.fromDegrees(
    obj.coordinates[0] + 0.0015,
    obj.coordinates[1],
    0
  );
});
const UndergroundWater = ({ visible, earthInstance }: CardProps) => {
  // const [monitoringVisible, setMonitoringVisible] = useState(false);
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "100px",
          right: "25px",
          visibility: visible ? "visible" : "hidden",
        }}
      >
        {visible &&
          tunnels.map((value, index) => {
            const circleGeometry = new GeometryInstance({
              geometry: new CircleGeometry({
                center: value,
                radius: 150,
                vertexFormat: EllipsoidSurfaceAppearance.VERTEX_FORMAT,
              }),
              id: index,
            });
            return (
              <>
                <BillboardCollection>
                  <LabelCollection>
                    <Point
                      icon={locationIcon}
                      earthInstance={earthInstance}
                      position={value}
                      key={index}
                      geometry={circleGeometry}
                      mode="undergroundWater"
                      textPosition={tunnelsText[index]}
                      id={tunnelLabel[index]}
                      remark={remark[index]}
                      xAxis={xAxis}
                      series={series[index]}
                      title={tunnelLabel[index]+'水位图'}
                    />
                  </LabelCollection>
                </BillboardCollection>
                {/* <LabelCollection>
                  <Label
                    position={value}
                    text="监测井"
                    fillColor={Color.LIGHTGREEN}
                    font={"12pt Source Han Sans CN"}
                  ></Label>
                </LabelCollection> */}
              </>
            );
          })}
        {/* {visible &&
          tunnelsText.map((value, index) => {
            return (
              <LabelCollection>
                <Label
                  position={value}
                  text="监测井"
                  outlineColor={Color.BLACK}
                  outlineWidth={20}
                  style={LabelStyle.FILL_AND_OUTLINE}
                  fillColor={Color.WHITE}
                  font={"14pt Microsoft Yahei "}
                  translucencyByDistance={new NearFarScalar(
                    0.0e5,
                    1.0,
                    0.1e7,
                    0.0
                  )}
                ></Label>
              </LabelCollection>
            );
          })} */}
      </div>
    </>
  );
};
export default UndergroundWater;
