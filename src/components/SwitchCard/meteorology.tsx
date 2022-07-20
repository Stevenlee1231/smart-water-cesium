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
const Meteorology = ({ visible }: CardProps) => {
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
              <Point
                key={index}
                geometry={circleGeometry}
                mode="site"
                id={"XinfengWeatherStation"}
              />
            );
          })}
      </div>
    </>
  );
};
export default Meteorology;
