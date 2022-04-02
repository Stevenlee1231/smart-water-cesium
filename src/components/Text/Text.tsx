import React from "react";
import { Label, LabelCollection } from "resium";
import { Color, Cartesian3 } from "cesium";

interface text {
  position: Array<any>;
  color: Color;
  text: string;
  key?: any;
}

function Text(props: text) {
  const { position, color, text, key } = props;
  return (
    <Label
      disableDepthTestDistance={Number.POSITIVE_INFINITY}
      key={key}
      fillColor={color}
      position={Cartesian3.fromDegrees(position[0], position[1], 0)}
      text={text}
      scale={0.6}
      showBackground
      backgroundColor={Color.WHITE}
    />
  );
}

export default Text;
