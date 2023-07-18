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
import tunnel from "../../assets/datas/tuyongd.json";
import jingIcon from "../../assets/images/jing.png";
import Legend from "../Legend/Legend";
const tunnelLabel = [
  "TY1#",
  "TY2#",
  "TY3#",
  "TY4#",
  "TY5#",
  "TY6#",
  "TY7#",
  "TY8#",
  "TY9#",
  "TY10#",
  "TY11#",
  "TY12#",
  "TY13#",
  "TY14#",
  "TY15#",
  "TY16#",
  "TY17#",
  "TY18#",
  "TY19#",
  "TY20#",
  "TY21#",
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
                      earthInstance={earthInstance}
                      position={value}
                      key={index}
                      geometry={circleGeometry}
                      mode="gushing"
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
export default Gushing;
