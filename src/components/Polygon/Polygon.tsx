import { Spin } from "antd";
import { Color } from "cesium";
import { useState } from "react";
import { GeoJsonDataSource } from "resium";
interface polygon {
  material: Color;
  data: object;
  stroke: Color;
  strokeWidth: number;
}
function Polygon(props: polygon) {
  const { data, stroke, strokeWidth, material } = props;

  return (
    <GeoJsonDataSource
      data={data}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill={material.withAlpha(0.1)}
    ></GeoJsonDataSource>
  );
}

export default Polygon;
