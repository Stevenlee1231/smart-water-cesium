import React from "react";
import { Label, LabelCollection } from "resium";
import { Color, Cartesian3 } from "cesium";

interface text {
  position: Array<any>;
  color: Color;
  text: string;
}

function Text(props: text) {
  const { position, color, text } = props;
  return (
    <LabelCollection>
      <Label
        fillColor={Color.ORANGE}
        position={new Cartesian3(0.0, 0.0, 0.0)}
        text="Cesium"
      />
    </LabelCollection>
  );
}

export default Text;
