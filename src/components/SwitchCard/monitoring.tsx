import { Card, Switch } from "antd";
import { CardProps } from "./tunnel";
import Point from "../Point/Point";
import {
  Cartesian3,
  CircleGeometry,
  EllipsoidSurfaceAppearance,
  GeometryInstance,
} from "cesium";
import tunnel from "../../assets/datas/obswell.json";
import { useState } from "react";
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
export const MonitoringCard = ({ visible }: CardProps) => {
  const [monitoringVisible, setMonitoringVisible] = useState(false);
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "180px",
          right: "25px",
          visibility: visible ? "visible" : "hidden",
        }}
      >
        <Card title={"监测井"} bordered={false}>
          开关：
          {visible && (
            <Switch
              onChange={(checked) => {
                setMonitoringVisible(checked);
              }}
              checked={monitoringVisible}
            />
          )}
        </Card>
        {monitoringVisible &&
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
              <Point
                key={index}
                geometry={circleGeometry}
                // position={value}
                // location={tunnelLabel}
              />
            );
          })}
      </div>
    </>
  );
};
