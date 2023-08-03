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
import tunnel from "../../assets/datas/spring.json";
import jingIcon from "../../assets/images/jing.png";
import Legend from "../Legend/Legend";
import locationIcon from "../../assets/images/location_3.png"
import datas from "../../assets/chartData/spring/datas";
const tunnelLabel = [
  "二标段昆明段泉 65",
  "二标段昆明段泉 50",
  "二标段昆明段泉 49",
  "二标段昆明段井（泉 54）",
  "二标段昆明段泉 59",
  '二标段昆明段泉64', '二标段昆明段泉43', '二标段昆明段泉41', '二标段昆明段泉33', '二标段昆明段泉31', '二标段昆明段泉30', '二标段昆明段泉22', '二标段昆明段泉24', '二标段昆明段泉20', '二标段昆明段泉10', '二标段昆明段泉71', '二标段昆明段泉68', '二标段昆明段泉02', '二标段昆明段泉04', '二标段玉溪段金线洞泉(W501)', '二标段玉溪段深龙潭（W507）', '二标段玉溪段冒龙潭（W508）', '二标段玉溪段三印村泉（W512）', '二标段玉溪段黄营黑龙潭', '（W527）', '二标段玉溪段庄科小龙潭（W537）', '二标段玉溪段石碧村泉（W563）', '二标段玉溪段安昌里泉（W556）', '二标段玉溪段老马营（W585）', '二标段玉溪段梅子箐（W586）', '二标段玉溪段曲江龙潭（W589）', '二标段玉溪段观音山村泉（W601）', '二标段红河段小路南（W610）', '二标段红河段平诺村（W614）', '二标段红河段马家山村(W635)', '二标段红河段土基甸村（W647）'
];
const pointInfo = [
  "监测水位",
  "流量自动监测点",
  "流量自动监测点",
  "监测水位",
  "流量自动监测点",
  "流量自动监测点"
]
const remark =[
  "监测水位",
  "",
  "",
  "监测水位",
  "",
  ""
]

const xAxis = ["2021年2月上旬", "2021年2月中旬", "2021年2月下旬", "2021年3月上旬", "2021年3月中旬", "2021年3月下旬"]
const series = [["1.31", "1.33", "1.38", "1.37", "1.20", "1.14"], ["296.11", "314.55", "346.82", "331.76", "314.52", "343.15"], ["722.15", "638.71", "706.31", "830.27", "764.85", "781.99"],["2.95", "2.95", "3.01", "2.77", "2.76", "2.42"], ["0.18", "0.19", "0.18", "0.15", "0.15", "0.14"], ["0.14", "0.12", "0.10", "0.15", "0.16", "0.17"],['0.52', '0.47', '0.50', '0.45', '0.67', '0.81'],['10.28', '9.32', '9.76', '8.45', '6.69', '5.87']]
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
const Spring = ({ visible, earthInstance }: CardProps) => {
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
            console.log(datas.name)
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
                      mode="spring"
                      textPosition={tunnelsText[index]}
                      id={datas.name[index]}
                      info={datas.pointInfo[index]}
                      remark={datas.remark[index]}
                      xAxis={datas.time}
                      series={datas.data[index]}
                      title={datas.name[index]+'流量图'}
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
export default Spring;