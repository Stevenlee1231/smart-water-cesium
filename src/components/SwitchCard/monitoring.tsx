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
import tunnel from "../../assets/datas/obswell.json";
import jingIcon from "../../assets/images/jing.png";
import Legend from "../Legend/Legend";
const tunnelLabel = [
  "XL2K7",
  "XL2K12",
  "XL2K25",
  "XL2K17",
  "XLP3-12K3",
  "XLP4-2K2",
];
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
const Monitoring = ({ visible, earthInstance }: CardProps) => {
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
                      earthInstance={earthInstance}
                      position={value}
                      key={index}
                      geometry={circleGeometry}
                      mode="custom"
                      textPosition={tunnelsText[index]}
                      id={tunnelLabel[index]}
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
export default Monitoring;
