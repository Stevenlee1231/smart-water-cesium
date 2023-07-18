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
import stationIcon from "../../assets/images/station.png";
import { BillboardCollection, Label, LabelCollection } from "resium";
import tunnel from "../../assets/datas/obswell.json";
import { useState } from "react";
import Legend from "../Legend/Legend";
import { Drawer } from "antd";
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

const Meteorology = ({ visible }: CardProps) => {
  const [visible1, setVisible1] = useState(visible);
  const showDrawer = () => {
    setVisible1(true);
  };

  const onClose = () => {
    setVisible1(false);
  };
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
        <Drawer
          title="水文气象"
          placement="right"
          onClose={onClose}
          visible={visible1}
          size={"large"}
        ></Drawer>
        {/* {visible &&
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
              <BillboardCollection>
                <LabelCollection>
                  <Point
                    key={index}
                    geometry={circleGeometry}
                    mode="site"
                    id={"XinfengWeatherStation"}
                    position={value}
                    textPosition={tunnelsText[index]}
                  />
                </LabelCollection>
              </BillboardCollection>
            );
          })} */}
        {/* {visible &&
          tunnelsText.map((value, index) => {
            return (
              <LabelCollection>
                <Label
                  position={value}
                  text="气象站"
                  fillColor={Color.WHITE}
                  outlineColor={Color.BLACK}
                  outlineWidth={20}
                  style={LabelStyle.FILL_AND_OUTLINE}
                  font={"14pt Microsoft Yahei"}
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
export default Meteorology;
