import { Spin, Modal } from "antd";
import { Color } from "cesium";
import React from "react";
import { useState } from "react";
import { GeoJsonDataSource } from "resium";
interface polygon {
  material: Color;
  data: object;
  stroke: Color;
  strokeWidth: number;
  onClick?: Function;
  mouseEnter?: any;
  mouseLeave?: any;
}
function Polygon(props: polygon) {
  const {
    data,
    stroke,
    strokeWidth,
    material,
    onClick,
    mouseEnter,
    mouseLeave,
  } = props;
  return (
    <>
      <GeoJsonDataSource
        data={data}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill={material.withAlpha(0.5)}
        onClick={onClick as any}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      ></GeoJsonDataSource>
    </>
  );
}

export default React.memo(Polygon);
