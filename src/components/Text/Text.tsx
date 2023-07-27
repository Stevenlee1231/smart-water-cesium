import React from "react";
import { Label } from "resium";
import { Color, Cartesian3 } from "cesium";

interface text {
  position: Array<any>;
  color: Color;
  text: string;
  key?: any;
  show: boolean;
}

function Text(props: text) {
  const { position, color, text, key, show } = props;
  return (
    <Label
      disableDepthTestDistance={Number.POSITIVE_INFINITY}
      key={key}
      fillColor={color}
      position={Cartesian3.fromDegrees(position[0], position[1], 0)}
      text={text}
      scale={0.6}
      showBackground
      outlineColor={Color.BLACK}
      outlineWidth={5.0}
      backgroundColor={Color.DEEPSKYBLUE}
      show={show}
      font='bold 30px 楷体'
    />
  );
}

export default Text;
