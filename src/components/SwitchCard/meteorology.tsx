import { CardProps } from "./tunnel";
import Point from "../Point/Point";
import {
  Cartesian3,
  CircleGeometry,
  EllipsoidSurfaceAppearance,
  GeometryInstance,
} from "cesium";
import stationIcon from "../../assets/images/station.png";
import { BillboardCollection } from "resium";
import tunnel from "../../assets/datas/obswell.json";
import { useState } from "react";
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
const Meteorology = ({ visible }: CardProps) => {
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
              <BillboardCollection>
                <Point
                  key={index}
                  geometry={circleGeometry}
                  mode="site"
                  id={"XinfengWeatherStation"}
                  position={value}
                />
              </BillboardCollection>
            );
          })}
      </div>
    </>
  );
};
export default Meteorology;
