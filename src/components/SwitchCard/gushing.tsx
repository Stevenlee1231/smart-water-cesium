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
import tunnel from "../../assets/datas/tuyong.json";
import jingIcon from "../../assets/images/jing.png";
import Legend from "../Legend/Legend";
import locationIcon from "../../assets/images/location.png"
const tunnelLabel = [
  '蔡家村隧洞隧洞进口', '蔡家村隧洞1#支洞', '蔡家村隧洞2#支洞', '蔡家村隧洞3#支洞', '蔡家村隧洞4#支洞', '蔡家村隧洞5#支洞', '蔡家村隧洞6#支洞', '蔡家村隧洞隧洞出口'
  ,'松林隧洞隧洞进口', '松林隧洞1#上游', '松林隧洞1#下游', '松林隧洞隧洞出口','盛家塘短隧洞隧洞进口','龙庆隧洞隧洞进口','龙庆隧洞1#支洞','龙庆隧洞2#支洞','龙庆隧洞隧洞出口'
  ,'龙泉隧洞隧洞进口','龙泉隧洞1#支洞','龙泉隧洞2#支洞','龙泉隧洞隧洞出口','昆呈隧洞隧洞进口', '昆呈隧洞1#支洞', '昆呈隧洞2#支洞', '昆呈隧洞3#支洞', '昆呈隧洞4#支洞', '昆呈隧洞5#支洞', '昆呈隧洞6#支洞', '昆呈隧洞7#支洞', '昆呈隧洞8#支洞', '昆呈隧洞9#支洞', '昆呈隧洞10#支洞', '昆呈隧洞11#支洞', '昆呈隧洞12#支洞', '昆呈隧洞13#支洞', '昆呈隧洞14#支洞', '昆呈隧洞15#支洞', '昆呈隧洞16#支洞', '昆呈隧洞隧洞出口',
  '小扑隧洞隧洞进口', '小扑隧洞1#支洞', '小扑隧洞2#支洞', '小扑隧洞3#支洞', '小扑隧洞4#支洞', '小扑隧洞5#支洞', '小扑隧洞6#支洞', '小扑隧洞7#支洞', '小扑隧洞8#支洞', '小扑隧洞隧洞出口','白马山隧洞隧洞进口','白马山隧洞隧洞出口','黄草坝隧洞隧洞进口','黄草坝隧洞隧洞出口','老尖山隧洞隧洞进口','扯那苴隧洞隧洞进口','扯那苴隧洞1#支洞','扯那苴隧洞隧洞出口','大塘子隧洞隧洞进口','大塘子隧洞隧洞出口',
  '螺峰山隧洞隧洞进口', '螺峰山隧洞1#支洞', '螺峰山隧洞2#支洞', '螺峰山隧洞3#支洞', '螺峰山隧洞4#支洞', '螺峰山隧洞隧洞出口', '鸡米冲隧洞隧洞进口', '鸡米冲隧洞1#支洞', '鸡米冲隧洞2#支洞', '鸡米冲隧洞隧洞出口','小路南1#隧洞隧洞进口','小路南2#隧洞2#支洞', '小路南2#隧洞3#支洞', '小路南2#隧洞4#支洞', '小路南2#隧洞隧洞出口','龙尾隧洞隧洞进口','龙尾隧洞1#支洞','龙尾隧洞隧洞出口',
  '羊街隧洞隧洞进口','羊街隧洞隧洞出口','龙树隧洞隧洞进口', '龙树隧洞1#支洞', '龙树隧洞2#支洞', '龙树隧洞3#支洞', '龙树隧洞隧洞出口','龙树山隧洞隧洞进口','龙树隧洞隧洞出口','大路能山隧洞出口','地田坡隧洞进口','地田坡隧洞出口','大坡子隧洞1#支洞', '大坡子隧洞2#支洞', '大坡子隧洞3#支洞', '大坡子隧洞4#支洞', '大坡子隧洞隧洞出口','大山隧洞隧洞进口','大山隧洞隧洞出口','小燕塘隧洞隧洞进口','小燕塘隧洞隧洞出口'
];
const xAxis = ['2021年2月', '2021年3月', '2021年4月', '2021年5月', '2021年6月', '2021年7月', '2021年8月', '2021年9月', '2021年10月', '2021年11月', '2021年12月', '2022年1月', '2022年2月', '2022年3月', '2022年4月', '2022年5月', '2022年6月', '2022年7月', '2022年8月']
const series = [['20', '120', '37', '37', '37', '570', '249', '392', '1483', '754', '637', '426', '390', '443', '400', '360', '357', '331', '328'],['20', '10', '20', '21', '23', '28', '41', '35', '271', '300', '424', '421', '424', '631', '437', '443', '483', '528', '547'],['80', '56', '162', '134', '171', '190', '362', '717', '872', '741', '495', '440', '448', '828', '789', '830', '813', '837', '878']]
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
const Gushing = ({ visible, earthInstance }: CardProps) => {
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
                      mode="gushing"
                      textPosition={tunnelsText[index]}
                      id={tunnelLabel[index]}
                      xAxis={xAxis}
                      title={tunnelLabel[index]+'突涌水量'}
                      series={series[index]}
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
export default Gushing;
